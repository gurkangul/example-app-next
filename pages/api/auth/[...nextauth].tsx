import NextAuth from "next-auth";
// tslint:disable-next-line:<rule name>
import CredentialsProvider from "next-auth/providers/credentials";
import { API } from "../../../src/api";

const options = (req: any, res: any) => {
  return {
    providers: [
      CredentialsProvider({
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "jsmith@gmail.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials: any) {
          try {
            const result = await API.SIGN_IN(credentials);
            console.log("********************************");
            console.log(result);
            if (result?.status == "Success") {
              return result;
            }
            throw new Error("&email=" + credentials.email);
          } catch (e: any) {
            const errorMessage = e?.response?.data?.message;
            throw new Error(
              errorMessage || "hata" + "&email=" + credentials.email
            );
          }
        },
      }),
    ],
    callbacks: {
      // Getting the JWT token from API response
      async jwt({ token, user }: any) {
        if (user) {
          token.token = user?.token;
          token.user = user?.email;
        }
        return token;
      },
      async session({ session, token }: any) {
        session.token = token.token;
        session.user = token.user;
        return session;
      },
    },
    secret:
      process.env.AUTH_SECRET || "sdf45g54g1h2möçj5k6gf66hj___fdfg112kjhl",
    pages: {
      error: "/login", // Changing the error redirect page to our custom login page
    },
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => {
  NextAuth(req, res, options(req, res));
};
