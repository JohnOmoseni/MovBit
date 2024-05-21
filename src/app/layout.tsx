import type { Metadata } from "next";
// import { Raleway as FontSans } from "next/font/google";

import { cn } from "../lib/utils";
import ReduxProvider from "./provider";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import "./index.css";
import "./utilities.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// export const fontSans = FontSans({
// 	subsets: ["latin"],
// 	variable: "--font-sans",
// });

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
					<ReduxProvider>
						<Header />
						{children}
						<Footer />
					</ReduxProvider>
				</div>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
