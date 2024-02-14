import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hindalya - The Global University",
  description: "Hindalya is an innovative web application that offers free access to various resources such as projects, assignments, courses, and blogs to help students and professionals advance their knowledge and skills. The platform also provides affordable mentorship to help individuals achieve their educational goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        </body>
    </html>
  );
}
