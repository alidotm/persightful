import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, asChild, ...props }, ref) => {
		const id = React.useId();

		return (
			<div className="group relative z-0 transition-all focus-within:z-10">
				<input
					id={id}
					ref={ref}
					{...props}
					placeholder=" "
					className={cn(
						"peer block w-full border border-input bg-background px-6 pb-4 pt-12 ring-1 ring-transparent transition focus:border- focus:outline-none focus:ring-primary group-first:rounded-t-lg group-last:rounded-b-lg"
					)}
				/>
				<label
					htmlFor={id}
					className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-primary transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-primary"
				>
					{label}
				</label>
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
