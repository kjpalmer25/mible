"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="px-5 py-2 w-fit shadow-lg bg-gray-200 rounded-sm items-center">
        <h2>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </h2>
        <button
          onClick={() => signOut()}
          className="bg-red-400 w-full rounded-sm py-2 px-10 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
