 import NextAuth, { type NextAuthOptions } from "next-auth";
 import EmailProvider from "next-auth/providers/email"
 import { PrismaAdapter } from "@auth/prisma-adapter"
 import { PrismaClient } from "@prisma/client"

 const prisma = new PrismaClient()

 export const authOptions: NextAuthOptions = {
   adapter: PrismaAdapter(prisma),
   secret: process.env.NEXTAUTH_SECRET,
   providers: [
     EmailProvider({
       server: {
         host: process.env.EMAIL_SERVER_HOST,
         port: Number(process.env.EMAIL_SERVER_PORT),
         auth: {
           user: process.env.EMAIL_SERVER_USER,
           pass: process.env.EMAIL_SERVER_PASSWORD,
         },
       },
       from: process.env.EMAIL_FROM,
     }),
   ],
   theme: {
  colorScheme: "dark", // "auto" | "dark" | "light"
  brandColor: "#914cd2", // Hex color code
  logo: "https://next-auth.js.org/img/logo/logo-sm.png", // Absolute URL to image
  buttonText: "#d3d9ea" // Hex color code
},
 };

 const handler = NextAuth(authOptions);

 export { handler as GET, handler as POST }