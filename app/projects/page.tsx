import { Navigation } from "../components/nav";
import MultiCardCarousel from "../components/carousel";
import { Tractor } from "lucide-react";

const projects = [
	{
		icon: <Tractor size={30} />,
		href: "https://pesticidenoi.netlify.app/",
		label: "Pesticide Notification System",
		handle: "Pesticide System"
	},
];

export default function Projects() {
	return (
		<div className="bg-black scroll-p-5">
			<Navigation/>
			<div className="container flex items-center min-h-screen py-16 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 py-6">
					<MultiCardCarousel projects={projects}/>
				</div>
			</div>
		</div>
	);
}