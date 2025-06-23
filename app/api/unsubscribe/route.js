import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// UNSUBSCRIBE ENDPOINT

export async function POST(request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const { email } = await request.json();
    console.log('Received unsubscribe request from:', email);

    if (!email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
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

    console.log('Verifying transporter');
    try {
      await transporter.verify();
      console.log('Transporter verified successfully');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      throw new Error('Email transporter verification failed');
    }

    const mailOptionsToOwner = {
      from: process.env.EMAIL_USER,
      to: "Nicole@littlebearenvironmental.com ",
      bcc: "gmcclanan1@gmail.com",
      subject: `Unsubscribe Request`,
      text: `The following user has requested to unsubscribe from your mailing list: ${email}`,
    };

    console.log('Sending unsubscribe email to site owner');
    await transporter.sendMail(mailOptionsToOwner);
    console.log('Unsubscribe email to site owner sent successfully');

    return NextResponse.json(
      { message: 'Unsubscribe request sent successfully' },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Detailed error:', error);
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: 'Invalid request data', error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: 'Error processing unsubscribe request', error: error.message },
      { status: 500 }
    );
  }
}
