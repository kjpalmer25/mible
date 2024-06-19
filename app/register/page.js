import RegisterForm from "@/components/RegisterForm";
import NavMenu from "@/components/publicNav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  const session = await getServerSession(authOptions);
  //redirect user to dashboard if already logged in
  if (session) redirect("/dashboard");
  return (
    <main>
      <NavMenu />
      <RegisterForm />
    </main>
  );
}
