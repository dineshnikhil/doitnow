import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import Todo from '@/server/models/todo';
import { getSession } from 'next-auth/react';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;
	// const session = await getServerSession(req, res, AuthOptions);
	const session = await getSession({ req });
	console.log('i am session from api route', session);

	if (method === 'GET') {
		const todos = await Todo.find();
		return res.status(200).json({ todos, error: 'no error.!' });
	}

	if (method === 'POST') {
		if (!session) {
			return res.status(401).json({ error: 'Unauthorized User.!' });
		}

		const newTodo = await Todo.create(body);
		const savedTodo = await newTodo.save();
		return res.status(201).json(savedTodo);
	}
}
