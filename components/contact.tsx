import ContactForm from "./contact-form";
import { FadeIn, FadeInStagger } from "./fadein";

const Contact = () => {
	return (
		<section
			aria-label="contact"
			id="contact"
			className="container py-28 gap-14 max-w-3xl mx-auto px-6"
		>
			<FadeInStagger>
				<FadeIn>
					<div className="flex flex-col border-b pb-10 items-start space-y-6">
						<h3 className="font-semibold text-xl text-center">
							Email Us Directly
						</h3>

						<h4>
							<a
								href="mailto:ali@persightful.tech"
								className="flex flex-col"
							>
								<span className="font-semibold">
									Ali Muhammad
								</span>
								<span className="text-muted-foreground font-light">
									ali@persightful.tech
								</span>
							</a>
						</h4>
					</div>
				</FadeIn>

				<FadeIn>
					<ContactForm />
				</FadeIn>
			</FadeInStagger>
		</section>
	);
};

export default Contact;
