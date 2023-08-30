import mongoose from 'mongoose';
import { model, models } from 'mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';

type createUserType = {
	email: string;
	username: string;
	password: string;
};

interface createUserTypeInterface extends createUserType, Document {}

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

// user save hook
userSchema.pre<createUserTypeInterface>('save', async function (next) {
	if (!this.isModified('password')) {
		return next();
	}

	try {
		const saltRounds = 10;
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(this.password, salt);
		this.password = hashedPassword;
		return next();
	} catch (error) {
		console.log(error);
		return next();
	}
});

const User = models.User || model('User', userSchema);

export default User;
