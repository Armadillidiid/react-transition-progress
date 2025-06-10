import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Transition Progress",
  description: "Open-source transition progress bars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBarProvider>
          <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0" />
          {children}
        </ProgressBarProvider>
      </body>
    </html>
  );
}
