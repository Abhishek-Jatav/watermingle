// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  // Nodemailer transporter setup and email sending logic here

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending message" }), {
      status: 500,
    });
  }
}
