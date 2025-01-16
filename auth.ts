import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma/prisma";
import { getUserFromDb } from "@/store/user.service";
import { User } from "@prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const { email, password } = credentials;

        const response = await getUserFromDb(
          email as string,
          password as string
        );

        if (response.success) {
          return response.data as User;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = {
        ...user,
        id: token.id as string,
        email: token.email as string,
        imageUrl: token.imageUrl as string,
        name: token.name as string,
        lastName: token.lastName as string,
      };
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
  secret: process.env.AUTH_SECRET as string,
});
