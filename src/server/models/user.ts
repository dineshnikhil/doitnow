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
		username: {
			type: String,
			required: [true, 'Please provide a username'],
			unique: true,
		},
		email: {
			type: String,
			required: [true, 'Please provide a email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please provide a password'],
		},
		isVerfied: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		forgotPasswordToken: String,
		forgotPasswordTokenExpiry: Date,
		verifyToken: String,
		verifyTokenExpiry: Date,
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
