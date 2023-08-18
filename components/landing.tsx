import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { FadeIn, FadeInStagger } from "./fadein";

const Landing = () => {
	return (
		<section
			aria-label="landing"
			className="container mt-28 max-w-6xl mx-auto px-4"
		>
			<FadeInStagger faster>
				<div className="flex flex-col items-center space-y-6">
					<FadeIn>
						<div className="flex flex-col items-center space-y-6">
							<Link
								href="/free-prototype"
								className="bg-accent text-sm sm:text-base text-center rounded-lg w-fit px-4 py-1 ring-style"
							>
								<strong>
									<span className="font-semibold">
										Limited Offer —{" "}
									</span>
									<span className="font-light">
										Get a{" "}
										<span className="font-semibold">
											Free
										</span>{" "}
										Prototype of AI powered ChatBot,
										<span className="font-semibold">
											{" "}
											Act Fast!
										</span>
									</span>
								</strong>
							</Link>

							<h1 className="leading-[1.1] font-bold text-4xl sm:text-6xl max-w-4xl text-center">
								Save time and money with AI Chatbots &
								Automations.
							</h1>
							<p className="text-lg sm:text-2xl max-w-3xl font-light text-muted-foreground text-center">
								We empower our clients to infuse efficiency into
								their businesses by leveraging creative
								AI-powered solutions.
							</p>
						</div>
					</FadeIn>
					<FadeIn>
						<div className="flex space-x-4 items-center pb-14">
							<Link
								href="#contact"
								className={cn(
									buttonVariants({
										size: "xl",
										variant: "default",
									})
								)}
							>
								<span className="mr-1">
									Get a Chatbot Prototype{" "}
								</span>
								<span className="italic font-light">
									{" "}
									— it&apos;s free
								</span>
							</Link>
						</div>
					</FadeIn>

					<FadeIn>
						<div className="flow-root">
							<div className="-m-2 rounded-xl bg-accent/30 p-2 ring-1 ring-inset ring-muted-foreground/30 lg:-m-4 lg:rounded-2xl lg:p-4">
								<img
									src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
									alt="App screenshot"
									width={2432}
									height={1442}
									className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
								/>
							</div>
						</div>
					</FadeIn>
				</div>
			</FadeInStagger>
		</section>
	);
};

export default Landing;
