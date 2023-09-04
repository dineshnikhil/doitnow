import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import dbConnection from '@/server/config';
import User from '@/server/models/user';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				// Add logic here to look up the user from the credentials supplied
				// const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };
				const user = {
					id: '1',
					name: credentials?.username,
					email: credentials?.email,
					password: credentials?.password,
				};

				if (user) {
					return user;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
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

				if (foundUser) {
					// if the user found we need to check for the correct password.
					const validPassword = await bcrypt.compare(
						user.password,
						foundUser.password
					);

					if (validPassword) {
						return foundUser;
					} else {
						return null;
					}
				} else {
					if (user.password) {
						const newUser = await User.create({
							username: user.name,
							email: user.email,
							password: user.password,
						});
						const savedUser = await newUser.save();
						if (savedUser) {
							return user;
						}
					}
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
