import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Here you would typically send the form data to your email service
    // For example, using SendGrid, Mailgun, or any other email service
    // For now, we'll just log it
    console.log('Form submission:', { name, email, message });

    // Return success response
    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}