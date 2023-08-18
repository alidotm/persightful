import Link from "next/link";
import { links } from "./header";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Footer = () => {
	return (
		<footer className="py-10 border-t">
			<div className="container mx-auto max-w-5xl space-y-6 flex flex-col sm:flex-row justify-between px-6">
				<section className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
					<Link
						href="/"
						className="font-bold rounded-md text-xl ring-style"
					>
						PerSightFul.
					</Link>

					<ul className="flex items-center space-x-4">
						{links.map(({ name, href }) => (
							<li key={href}>
								<Link
									href={href}
									className={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											className: "font-medium",
										})
									)}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</section>

				<section className="flex flex-col items-center space-y-6">
					<h3 className="font-semibold text-xl text-center">
						Email Us Directly
					</h3>
					<h4>
						<a href="mailto:" className="flex flex-col">
							<span className="font-semibold text-center sm:text-left">
								Ali Muhammad
							</span>
							<span className="text-muted-foreground font-light">
								ali@persightful.tech
							</span>
						</a>
					</h4>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
