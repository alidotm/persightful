"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ReactNode } from "react";

type ProvidersProps = {
	children: ReactNode;
} & ThemeProviderProps;

const Providers = ({ children, ...props }: ProvidersProps) => {
	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			{...props}
		>
			{children}
		</NextThemesProvider>
	);
};

export default Providers;
