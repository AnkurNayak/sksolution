import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/home-components/AppHeader";
import AppFooter from "@/components/home-components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SK JOB SOLUTION",
  description:
    "Your go-to platform for job solutions and career advice. Explore opportunities, enhance your skills, and connect with experts.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "jobs, career solutions, job opportunities, career advice",
  author: "SK JOB SOLUTION Team",
  robots: "index, follow",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
