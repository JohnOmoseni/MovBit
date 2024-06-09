import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import ScrollToTop from "@/components/ScrollToTop";
import ReduxProvider from "./provider";

import "./globals.css";
import "./index.css";
import "./utilities.css";

export const metadata: Metadata = {
  title: "MovBit",
  description: "MovBit app",
  icons: { icon: "/images/step.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-raleway")}>
        <div className="wrapper">
          <ScrollToTop />
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
