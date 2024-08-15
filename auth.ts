
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { pages } from 'next/dist/build/templates/app-page';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    SignUp: '/auth/signup',
    signOut: '/auth/signout',
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },

};

export default NextAuth(authOptions);
