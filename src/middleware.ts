export { default } from "next-auth/middleware";
export const config = { matcher: ["/dashboard/:path*"] };
// import { withAuth } from "next-auth/middleware";
//
// export default withAuth({
//   pages: {
//     signIn: "/signin",
//   },
// });
//
// export const config = { matcher: ["/dashboard/:path*"] };
