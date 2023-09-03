import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import dbConnection from '@/server/config';
import User from '@/server/models/user';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
	],
	pages: {
		signIn: '/signin',
	},
	callbacks: {
		async signIn({ user, account }: any) {
			if (user) {
				await dbConnection();
				const foundUser = await User.findOne({ email: user.email });
				if (!foundUser) {
					const newUser = await User.create({
						username: user.name,
						email: user.email,
					});
					const savedUser = await newUser.save();
					if (savedUser) {
						return user;
					}
				}
			}

			return user;
		},
	},
};

export default NextAuth(authOptions);
