import mongoose from 'mongoose';
import { model, models } from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			require: false,
		},
		username: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || model('User', userSchema);

export default User;
