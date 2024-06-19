"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center">
        <Image src="/M.svg" width={150} height={150} alt="mible logo" />

        <h1 className="text-xl">Sign in to Mible</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col bg-purple-200 m-4 rounded-md p-4"
          >
            <label className="" htmlFor="email">
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="block my-2 rounded-sm"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <label className="mb-5" htmlFor="password">
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="block my-2 rounded-sm"
                type="password"
                name="password"
                id="password"
              />
            </label>
            <div>
              <button className="w-full bg-purple-600 rounded-md text-white">
                Sign in
              </button>
            </div>
            {error && (
              <div className="bg-red-300 text-white block w-fit px-3 py-1 mt-3 rounded-md">
                {error}
              </div>
            )}
            <Link className="text-sm text-right mt-5" href="/register">
              Don't have an account?
              <span className="ml-2 underline">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
