// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';

dbConnection();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({});
}
