import { RequestInternal, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const userRole = "user";

export const Options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ) {
        try {
          const res = await fetch("https://akil-backend.onrender.com/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const user = await res.json();

          if (res.ok && user) {
            user.data.role = "verified";
            return user.data; // Assuming user.data contains the user info
          }
          return null;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.role = user.role; // Assuming role is directly under user
        token.id = user.id;     // Assuming id is directly under user
        token.name = user.name; // Assuming name is directly under user
        token.accessToken = user.accessToken; // Assuming accessToken is directly under user
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "signin", 
    signOut: "/signout",
  },
  secret: process.env.AUTH_SECRET,
};
