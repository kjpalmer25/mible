export { default } from "next-auth/middleware";

//defines pages protected from public access, inaccessible without login
export const config = { matcher: ["/dashboard"] };
