import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

console.log('Email user:', process.env.EMAIL_USER);

export async function POST(request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { message: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const { name, email, phone, message } = await request.json();
    console.log('Received data:', { name, email, phone, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'mail.riocreate.com',
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

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'gmcclanan1@gmail.com',
      subject: `LBE Form - New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    console.log('Sending email');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
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
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}