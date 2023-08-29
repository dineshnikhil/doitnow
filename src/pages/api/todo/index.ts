import { NextApiRequest, NextApiResponse } from 'next';
import dbConnection from '@/server/config';
import Todo from '@/server/models/todo';

dbConnection();

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req;

	if (method === 'GET') {
		const todos = await Todo.find();
		return res.status(200).json(todos);
	}

	if (method === 'POST') {
		const newTodo = await Todo.create(body);
		const savedTodo = await newTodo.save();
		return res.status(201).json(savedTodo);
	}
}
