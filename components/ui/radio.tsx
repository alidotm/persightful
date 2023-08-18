import * as React from "react";

import { cn } from "@/lib/utils";

export interface RadioProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
	({ className, label, ...props }, ref) => {
		return (
			<label className="flex gap-x-3 cursor-pointer">
				<input
					type="radio"
					{...props}
					className={cn(
						"h-5 w-5 flex-none appearance-none rounded-full border border-primary/20 outline-none checked:border-[0.4rem] checked:border-primary focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-2"
					)}
				/>
				<span className="text-primary">{label}</span>
			</label>
		);
	}
);
Radio.displayName = "Radio";

export { Radio };
