import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure authentication providers
  providers: [
    // Add your authentication providers here, e.g., GitHub, Google, etc.
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  // Add custom callbacks to control access
  callbacks: {
    async session(session, user) {
      // Customize the session based on user properties, if needed
      // For example, you can add a property to session based on user conditions

      // In this example, we allow unauthenticated access to a "public" route
      if (user) {
        session.user = user;
      } else {
        session.user = { name: "Guest" };
      }

      return Promise.resolve(session);
    },
  },
});
