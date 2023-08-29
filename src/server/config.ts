import mongoose from 'mongoose';

export default async function dbConnection(): Promise<void> {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/todo');
		console.log('Connected to Mongo..!');
	} catch (error) {
		console.error('Error while connecting to Mongo,', error);
	}
}
