import { IContactEmail } from '@/common/types/interfaces';
import { getEmailTemplate } from '@/common/utils/getEmailTemplate';
import sendgrid from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
    const contactEmail: IContactEmail = req.body;
    try {
        await sendgrid.send({
            to: 'ukuanovweogheneovo@gmail.com', // Your email where you'll receive emails
            from: 'ukuanovweogheneovo@gmail.com', // your website email address here
            subject: `${contactEmail?.subject}`,
            html: getEmailTemplate(contactEmail),
        });
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: '' });
}

export default sendEmail;
