import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import User from '@/server/models/user';
import { getSession } from 'next-auth/react';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;
	const session = await getSession({ req });

	if (!session) {
		return res.status(401).json({ error: 'Unauthenticated user.!' });
	}

	if (method === 'GET') {
		const users = await User.find();
		return res.status(200).json(users);
	}

	if (method === 'POST') {
		const newUser = await User.create(body);
		const saveduser = await newUser.save();
		return res.status(201).json(saveduser);
	}
}
