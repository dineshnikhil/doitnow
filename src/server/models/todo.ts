import mongoose from 'mongoose';
import { model, models } from 'mongoose';

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: false,
		},
	},
	{ timestamps: true }
);

const Todo = models.Todo || model('Todo', todoSchema);

export default Todo;
