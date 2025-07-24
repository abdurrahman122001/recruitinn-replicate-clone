import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs';
import { IncomingForm } from 'formidable';

// Disable Next.js body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

interface FormFields {
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string;
  position: string;
  experience: string;
  message: string;
}

interface FormFiles {
  resume?: formidable.File[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse form data
    const form = new IncomingForm();
    const [fields, files] = await new Promise<[FormFields, FormFiles]>((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields as unknown as FormFields, files as FormFiles]);
      });
    });

    // Validate required fields
    if (!fields.fullName || !fields.email || !fields.position || !files.resume) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"RecruitInn Applications" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      subject: `New Job Application: ${fields.fullName} - ${fields.position}`,
      text: `
        New Job Application Received:
        
        Name: ${fields.fullName}
        Email: ${fields.email}
        Phone: ${fields.phone}
        Current Company: ${fields.currentCompany || 'Not provided'}
        Position: ${fields.position}
        Experience: ${fields.experience}
        
        Cover Letter:
        ${fields.message || 'No cover letter provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">New Job Application Received</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Current Company:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.currentCompany || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Position:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.position}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Experience:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fields.experience || 'Not specified'}</td>
            </tr>
          </table>
          
          <h3 style="color: #2563eb; margin-top: 20px;">Cover Letter:</h3>
          <p style="white-space: pre-wrap; background: #f9fafb; padding: 15px; border-radius: 6px;">
            ${fields.message || 'No cover letter provided'}
          </p>
        </div>
      `,
      attachments: files.resume
        ? [
            {
              filename: files.resume[0].originalFilename || 'resume.pdf',
              content: fs.createReadStream(files.resume[0].filepath),
            },
          ]
        : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Clean up uploaded file
    if (files.resume) {
      fs.unlink(files.resume[0].filepath, (err) => {
        if (err) console.error('Error deleting temp file:', err);
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending application:', error);
    return res.status(500).json({ 
      message: 'Error sending application',
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}