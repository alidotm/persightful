import Contact from "@/components/contact";
import Feature from "@/components/feature";
import Landing from "@/components/landing";
import Services from "@/components/services";

export default function Home() {
	return (
		<main>
			<Landing />
			<Feature />
			<Services />
			<Contact />
		</main>
	);
}
