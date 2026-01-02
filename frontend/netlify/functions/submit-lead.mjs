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

    // Send email notification
    const emailContent = buildEmailContent(submission);
    await sendEmailNotification(emailContent, submission.photo);

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

function buildEmailContent(submission) {
  return `
NEW LEAD SUBMISSION
==================

Submitted By: ${submission.submittedBy.displayName} (${submission.submittedBy.username})
Submitted At: ${new Date(submission.submittedAt).toLocaleString()}

LEAD INFORMATION
----------------

Homeowner Name: ${submission.homeownerName || "N/A"}
Property Address: ${submission.propertyAddress || "N/A"}
Phone Number: ${submission.phoneNumber || "N/A"}
Email Address: ${submission.emailAddress || "N/A"}

QUALIFICATION
-------------

Confirm Homeowner: ${submission.confirmHomeowner || "N/A"}
Confirm Crawlspace Present: ${submission.confirmCrawlspace || "N/A"}
Best Time for Inspection: ${submission.bestTimeForInspection || "N/A"}
Interest Level: ${submission.interestLevel || "N/A"}

ADDITIONAL INFO
---------------

Notes/Concerns: ${submission.notes || "None"}
Gift Selected: ${submission.giftSelected || "N/A"}

Photo Attached: ${submission.photo ? "Yes - " + submission.photo.name : "No"}

---
Submission ID: ${submission.id}
`;
}

async function sendEmailNotification(content, photo) {
  // Using Netlify's built-in email integration or fetch to an email service
  // For production, this would integrate with SendGrid, Mailgun, etc.
  // For now, we'll use a simple approach with the Netlify environment

  const SENDGRID_API_KEY = Netlify.env.get("SENDGRID_API_KEY");

  if (!SENDGRID_API_KEY) {
    console.log("Email notification (SENDGRID_API_KEY not configured):");
    console.log(content);
    return;
  }

  const emailData = {
    personalizations: [{
      to: [{ email: "jhscrawlspace@gmail.com" }]
    }],
    from: { email: "noreply@themoisturecrew.com", name: "The Moisture Crew Portal" },
    subject: "New Lead Submission - The Moisture Crew",
    content: [{
      type: "text/plain",
      value: content
    }]
  };

  // Add photo attachment if present
  if (photo) {
    emailData.attachments = [{
      content: photo.data,
      filename: photo.name,
      type: photo.type,
      disposition: "attachment"
    }];
  }

  try {
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      console.error("SendGrid error:", await response.text());
    }
  } catch (error) {
    console.error("Email send error:", error);
  }
}

export const config = {
  path: "/api/submit-lead"
};
