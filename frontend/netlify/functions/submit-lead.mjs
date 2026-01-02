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
      giftSelected: formData.get("giftSelected"),
      photo: photoData ? {
        name: photoName,
        type: photoType,
        data: photoData
      } : null
    };

    // Save submission to Netlify Blobs
    const submissionsStore = getStore("team-submissions");
    await submissionsStore.setJSON(submission.id, submission);

    // Submit to Netlify Forms (uses same notification settings as contact form)
    await submitToNetlifyForms(submission);

    return new Response(JSON.stringify({
      success: true,
      submissionId: submission.id
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

async function submitToNetlifyForms(submission) {
  // Build form data for Netlify Forms submission
  const formData = new URLSearchParams();
  formData.append('form-name', 'team-lead');
  formData.append('submittedBy', `${submission.submittedBy.displayName} (${submission.submittedBy.username})`);
  formData.append('submittedAt', new Date(submission.submittedAt).toLocaleString());
  formData.append('homeownerName', submission.homeownerName || '');
  formData.append('propertyAddress', submission.propertyAddress || '');
  formData.append('phoneNumber', submission.phoneNumber || '');
  formData.append('emailAddress', submission.emailAddress || '');
  formData.append('confirmHomeowner', submission.confirmHomeowner || '');
  formData.append('confirmCrawlspace', submission.confirmCrawlspace || '');
  formData.append('bestTimeForInspection', submission.bestTimeForInspection || '');
  formData.append('interestLevel', submission.interestLevel || '');
  formData.append('notes', submission.notes || '');
  formData.append('giftSelected', submission.giftSelected || '');
  formData.append('photoUrl', submission.photo ? 'Photo attached (stored in submission)' : 'No photo');

  // Get the site URL from environment or use a default
  const siteUrl = Netlify.env.get('URL') || 'https://sensational-mandazi-abf05e.netlify.app';

  try {
    console.log('Submitting to Netlify Forms...');

    const response = await fetch(siteUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData.toString()
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Netlify Forms error:', response.status, errorText);
      throw new Error(`Netlify Forms error: ${response.status}`);
    }

    console.log('Netlify Forms submission successful');
  } catch (error) {
    console.error('Form submission error:', error.message);
    // Don't throw - the lead is already saved to Blobs, just log the notification failure
    console.log('Lead saved to Blobs but form notification may have failed');
  }
}

export const config = {
  path: "/api/submit-lead"
};
