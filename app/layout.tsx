import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayoof Lawyers | Kingdom of Bahrain",
  description:
    "Mayoof Lawyers provides legal consultancy and representation services in the Kingdom of Bahrain and across the GCC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
