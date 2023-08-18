import { FadeIn, FadeInStagger } from "./fadein";

const services = [
	{
		title: "AI Chatbots",
		description:
			"We design and develop AI chatbots that are tailored to your business needs. Our chatbots are built to be intelligent, efficient, and personalized to your customers.",
		subServices: [
			{
				title: "Customer Support Chatbots",
			},
			{
				title: "Sales Chatbots",
			},
			{
				title: "Lead Generation Chatbots",
			},
			{
				title: "Traning Chatbots",
			},
		],
	},
	{
		title: "Automations",
		description:
			"We take care of automating tasks like lead management, as well as optimizing systems and processes across your entire business.",
	},
	{
		title: "Workflows",
		description:
			"We design and establish robust workflows that seamlessly integrate with both your sales process and overall business functions.",
	},
];

const Services = () => {
	return (
		<section
			aria-label="services"
			id="services"
			className="container py-28 space-y-7 max-w-6xl mx-auto px-5 flex flex-col justify-center items-center"
		>
			<FadeInStagger>
				<FadeIn>
					<div className="flex justify-center flex-col items-center space-y-7">
						<h3 className="font-semibold text-xl">Services</h3>
						<h2 className="text-3xl sm:text-5xl max-w-xl font-semibold text-center pb-10">
							We use AI to help you seize new opportunities.
						</h2>
					</div>
				</FadeIn>

				<div className="divide-y px-5">
					{services.map((service) => (
						<FadeIn key={service.title}>
							<Card
								description={service.description}
								subServices={service.subServices}
								title={service.title}
							/>
						</FadeIn>
					))}
				</div>
			</FadeInStagger>
		</section>
	);
};

type CardProps = {
	title: string;
	description: string;
	subServices?: {
		title: string;
	}[];
};

const Card = ({ description, subServices, title }: CardProps) => {
	return (
		<div className="max-w-xl py-4">
			<p className="font-light text-lg text-muted-foreground">
				<strong className="font-bold text-primary">{title} - </strong>{" "}
				{description}
			</p>

			{subServices && (
				<ul className="mt-3 list-disc">
					{subServices.map((subService) => (
						<li key={subService.title}>{subService.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Services;
