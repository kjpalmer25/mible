import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mible",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* wrap all app content in NextAuth session provider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
