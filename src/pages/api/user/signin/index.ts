import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import User from '@/server/models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;

	// check if the user exits
	const user = await User.findOne({ email: body.email });
	if (!user) {
		return res.status(400).json({ error: 'user not found.' });
	}

	// check for the password
	const validpassword = await bcrypt.compare(body.password, user.password);

	if (!validpassword) {
		return res.status(400).json({ error: 'password was wrong..!' });
	}

	// lets create the token
	const tokenData = {
		id: user._id,
	};

	const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
		expiresIn: '1d',
	});

	res.setHeader('Set-Cookie', `token=${token}; HttpOnly`);

	return res.status(200).json({
		data: {
			username: user.username,
			isAdmin: user.isAdmin,
		},
		message: 'Login successful',
		success: true,
	});
}
