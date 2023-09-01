import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import User from '@/server/models/user';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;

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
