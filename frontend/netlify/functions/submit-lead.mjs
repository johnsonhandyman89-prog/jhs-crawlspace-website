import { getStore } from "@netlify/blobs";

export default async (req, context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const formData = await req.formData();
    const token = formData.get("token");

    // Verify session
    const sessionStore = getStore("team-sessions");
    const session = await sessionStore.get(token, { type: "json" });

    if (!session || new Date(session.expiresAt) < new Date()) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Get photo file
    const photoFile = formData.get("photo");
    let photoData = null;
    let photoName = null;
    let photoType = null;

    if (photoFile && photoFile.size > 0) {
      const buffer = await photoFile.arrayBuffer();
      photoData = Buffer.from(buffer).toString("base64");
      photoName = photoFile.name;
      photoType = photoFile.type;
    }

    // Build submission object
    const submission = {
      id: `lead-${Date.now()}-${Math.random().toString(36).substring(7)}`,
      submittedBy: {
        username: session.username,
        displayName: session.displayName
      },
      submittedAt: new Date().toISOString(),
      homeownerName: formData.get("homeownerName"),
      propertyAddress: formData.get("propertyAddress"),
      phoneNumber: formData.get("phoneNumber"),
      emailAddress: formData.get("emailAddress"),
      confirmHomeowner: formData.get("confirmHomeowner"),
      confirmCrawlspace: formData.get("confirmCrawlspace"),
      bestTimeForInspection: formData.get("bestTimeForInspection"),
      interestLevel: formData.get("interestLevel"),
      notes: formData.get("notes"),
      photo: photoData ? {
        name: photoName,
        type: photoType,
        data: photoData
      } : null
    };

    // Save submission to Netlify Blobs
    const submissionsStore = getStore("team-submissions");
    await submissionsStore.setJSON(submission.id, submission);

    // Return submission data so frontend can submit to Netlify Forms
    // (Netlify Forms notifications work reliably only from browser submissions)
    return new Response(JSON.stringify({
      success: true,
      submissionId: submission.id,
      // Return sanitized data for Netlify Forms submission from frontend
      formData: {
        submittedBy: `${submission.submittedBy.displayName} (${submission.submittedBy.username})`,
        submittedAt: new Date(submission.submittedAt).toLocaleString(),
        homeownerName: submission.homeownerName || '',
        propertyAddress: submission.propertyAddress || '',
        phoneNumber: submission.phoneNumber || '',
        emailAddress: submission.emailAddress || '',
        confirmHomeowner: submission.confirmHomeowner || '',
        confirmCrawlspace: submission.confirmCrawlspace || '',
        bestTimeForInspection: submission.bestTimeForInspection || '',
        interestLevel: submission.interestLevel || '',
        notes: submission.notes || '',
        photoUrl: submission.photo ? 'Photo attached (stored in submission)' : 'No photo'
      }
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    console.error("Submission error:", error);
    return new Response(JSON.stringify({ error: "Server error: " + error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

export const config = {
  path: "/api/submit-lead"
};
