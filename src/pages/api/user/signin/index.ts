import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import User from '@/server/models/user';
import bcrypt from 'bcrypt';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;

	// check if the user exits
	const user = await User.findOne({ username: body.username });
	if (!user) {
		return res.status(400).json({ error: 'user not found.' });
	}

	// check for the password
	const validpassword = await bcrypt.compare(body.password, user.password);

	if (!validpassword) {
		return res.status(400).json({ error: 'password was wrong..!' });
	}
}
