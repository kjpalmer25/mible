import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: "Sign in to Mible",
};

export default function LoginPage() {
  return (
    <div className="bg-white h-screen w-screen flex justify-center">
      {/* back arrow */}
      <Link href="/">
        <svg
          className="fixed top-5 left-5 fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
        </svg>
      </Link>

      <div className="flex flex-col items-center">
        <Image src="/M.svg" width={150} height={150} alt="mible logo" />

        <h1 className="text-xl">Sign in to Mible</h1>
        <div>
          <form className="flex flex-col bg-purple-200 m-4 rounded-md p-4">
            <label className="" htmlFor="email">
              Email
              <input
                className="block my-2 rounded-sm"
                type="email"
                name="email"
                id="email"
              />
            </label>
            <label className="mb-5" htmlFor="password">
              Password
              <input
                className="block my-2 rounded-sm"
                type="password"
                name="password"
                id="password"
              />
            </label>
            <div>
              <button className="w-full bg-purple-600 mb-4 rounded-md text-white">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
