export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    console.log('Received data:', { name, email, phone, message });

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.riocreate.com', // Use host instead of service
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('Transporter created');

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'test@test.com',
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    console.log('Sending email');

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}