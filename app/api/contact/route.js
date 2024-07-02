export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    console.log('Received data:', { name, email, phone, message });


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

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { message: 'Error sending email', error: error.message },
      { status: 500 }
    );
  }
}