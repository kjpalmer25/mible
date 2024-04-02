import Image from "next/image";
import Navbar from "../components/navbar/navbar.js";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata = {
  title: "Welcome to Mible",
};

export default function WelcomePage() {
  return (
    <div className="bg-white h-screen">
      <Navbar />
    </div>
  );
}
