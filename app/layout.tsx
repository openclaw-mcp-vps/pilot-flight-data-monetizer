import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlightData Pro — Monetize Your Flight Tracking Data",
  description: "Platform for pilots to package and sell flight data insights to aviation companies, weather services, and researchers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16e887d5-6881-4295-a1c6-4004897b69b5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
