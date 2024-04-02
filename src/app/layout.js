import { Inter } from "next/font/google";
import "./globals.css";
import NavMenu from "../components/navbar/navbar.js";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Mible",
//   description: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
