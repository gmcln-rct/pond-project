import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// CONTACT API ENDPOINT

export async function POST(request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing email configuration");
    return NextResponse.json(
      { message: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const { name, email, phone, message } = await request.json();
    console.log("Received data:", { name, email, phone, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,
    });

    console.log("Verifying transporter");
    try {
      await transporter.verify();
      console.log("Transporter verified successfully");
    } catch (verifyError) {
      console.error("Transporter verification failed:", verifyError);
      throw new Error("Email transporter verification failed");
    }

    const mailOptionsToOwner = {
      from: process.env.EMAIL_USER,
      to: "gmcclanan1@gmail.com",
      subject: `LBE Form - New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    const logoPath = path.join(
      process.cwd(),
      "public/images",
      "little-bear-email.png"
    );
    const logoContent = fs.readFileSync(logoPath).toString("base64");

    const mailOptionsToUser = {
      from: `"LBE Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Message Received - Little Bear Environmental",
      html:  `
      <body style="background-color: #f0f0f0; font-family: 'Roboto', sans-serif; color: #3b3e38;">
        <p style="margin: 0 0 15px 0;">Dear ${name},</p>
        <p style="margin: 0 0 15px 0;">Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
        <p style="margin: 0 0 15px 0;">Here is a copy of your message:</p>
        <p style="margin: 0 0 15px 0;">
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone}<br>
          <strong>Message:</strong> ${message}
        </p>
        <p style="margin: 0 0 15px 0;">Best regards,<br>The LBE Team</p>
        <img src="cid:logo" alt="LBE Logo" style="width: 80%; max-width: 250px; height: auto; margin: 0 0 15px 0;">
        <p style="color: #3b3e38; font-size: 10px; margin-top: 40px;">
          If you no longer wish to receive emails from us, you can 
          <a href="${process.env.BASE_URL}/unsubscribe?email=${encodeURIComponent(email)}">unsubscribe</a> at any time.
        </p>
      </body>
      `,
      attachments: [
        {
          filename: "logo.png",
          path: logoPath,
          cid: "logo", // same cid value as in the html img src
        },
      ],
    };

    console.log("Sending email to site owner");
    await transporter.sendMail(mailOptionsToOwner);
    console.log("Email to site owner sent successfully");

    console.log("Sending acknowledgment email to user");
    await transporter.sendMail(mailOptionsToUser);
    console.log("Acknowledgment email to user sent successfully");

    return NextResponse.json(
      { message: "Emails sent successfully" },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Detailed error:", error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid request data", error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Error sending email", error: error.message },
      { status: 500 }
    );
  }
}
