"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Radio } from "./ui/radio";

const ContactForm = () => {
	return (
		<form action="" className="mt-10">
			<h3 className="font-semibold  text-xl text-start">Get In Touch</h3>
			<div className="isolate mt-7 -space-y-px rounded-2xl bg-white/50">
				<Input
					label="Name"
					type="text"
					name="name"
					autoComplete="name"
				/>
				<Input
					label="Email"
					type="email"
					name="email"
					autoComplete="email"
				/>
				<Input
					type="text"
					label="Company"
					name="company"
					autoComplete="organization"
				/>
				<Input
					label="Phone"
					type="tel"
					name="phone"
					autoComplete="tel"
				/>
				<Input label="Message" name="message" type="text" />

				<div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
					<fieldset>
						<legend className="text-primary">Budget</legend>
						<div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
							<Radio
								label="$500 – $1k"
								name="budget"
								value="25"
							/>
							<Radio
								label="$1k – $2k"
								name="budget"
								value="50"
							/>
							<Radio
								label="$2k – $3k"
								name="budget"
								value="100"
							/>
							<Radio
								label="More than $3k"
								name="budget"
								value="150"
							/>
						</div>
					</fieldset>
				</div>
			</div>

			<Button type="submit" className="mt-5">
				Get In Touch
			</Button>
		</form>
	);
};

export default ContactForm;
