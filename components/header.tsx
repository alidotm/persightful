import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Header = () => {
	return (
		<header className="w-full bg-background bg-opacity-75 backdrop-blur-lg h-20 flex justify-center items-center">
			<div className="container px-4 flex justify-between items-center">
				<section className="flex items-center space-x-10">
					<Link href="/" className="font-bold text-xl">
						PerSightFul.
					</Link>

					<nav>
						<ul className="flex items-center space-x-4">
							<li>
								<Link
									href="/about"
									className={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											className: "font-medium",
										})
									)}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											className: "font-medium",
										})
									)}
								>
									Examples
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											className: "font-medium",
										})
									)}
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className={cn(
										buttonVariants({
											variant: "ghost",
											size: "sm",
											className: "font-medium",
										})
									)}
								>
									FAQs
								</Link>
							</li>
						</ul>
					</nav>
				</section>
				<section>
					<Link
						href="/contact"
						className={cn(
							buttonVariants({ size: "sm", variant: "default" })
						)}
					>
						<span className="mr-1">Get your Prototype </span>
						<span className="italic font-light"> — it&apos;s free</span>
					</Link>
				</section>
			</div>
		</header>
	);
};

export default Header;
