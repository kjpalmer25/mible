import LoginForm from "@/components/LoginForm";
import NavMenu from "@/components/publicNav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Sign in",
};

export default async function Login() {
  const session = await getServerSession(authOptions);
  //redirect user to dashboard if already logged in
  if (session) redirect("/dashboard");
  return (
    <div>
      <NavMenu />
      <LoginForm />
    </div>
  );
}
