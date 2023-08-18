import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export const links = [
	{
		name: "Services",
		href: "#services",
	},
	{
		name: "Contact",
		href: "#contact",
	},
];

const Header = () => {
	return (
		<header className="w-full z-50 sticky top-0 bg-background/80 backdrop-blur h-20 flex justify-center items-center">
			<div className="container px-4 flex justify-between items-center">
				<section
					aria-label="nav-links"
					className="flex items-center space-x-10"
				>
					<Link
						href="/"
						className="font-bold rounded-md text-xl ring-style"
					>
						PerSightFul.
					</Link>

					<nav>
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
					</nav>
				</section>
				<section className="space-x-3">
					<Link
						href="#contact"
						className={cn(
							buttonVariants({ size: "sm", variant: "default" })
						)}
					>
						<span className="mr-1">Get a Chatbot Prototype </span>
						<span className="italic font-light">
							{" "}
							— it&apos;s free
						</span>
					</Link>
				</section>
			</div>
		</header>
	);
};

export default Header;
