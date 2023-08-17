import Providers from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import {  Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/header";

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={bricolage_grotesque.className}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
