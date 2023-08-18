import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FadeIn } from "./fadein";

const Feature = () => {
	return (
		<section
			aria-label="feature"
			className="py-20 sm:py-28 my-28 mx-auto bg-secondary/20 rounded-3xl"
		>
			<FadeIn>
				<div className="space-y-5 px-4 max-w-4xl container flex flex-col justify-center items-center">
					<h2 className="text-3xl sm:text-6xl text-center font-bold">
						We Skillfully{" "}
						<span className="text-accent text-stroke">Create</span>{" "}
						and{" "}
						<span className="text-accent text-stroke">Launch</span>{" "}
						your AI Solutions,{" "}
						<span className="text-accent text-stroke">
							Seamlessly
						</span>
					</h2>
					<p className="text-lg max-w-3xl text-center font-light text-muted-foreground">
						PerSightFul designs unique chatbots, assists in creating
						smart business automations, and tailors AI platforms.
						Our goal is to transform how businesses operate and
						connect with customers using personalized, efficient,
						and intelligent AI applications.
					</p>
					<Link
						href="/contact"
						className={cn(
							buttonVariants({
								size: "xl",
								variant: "default",
							})
						)}
					>
						<span className="mr-1">Get a Chatbot Prototype </span>
						<span className="italic font-light">
							{" "}
							— it&apos;s free
						</span>
					</Link>
				</div>
			</FadeIn>
		</section>
	);
};

export default Feature;
