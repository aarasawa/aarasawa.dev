import { Navigation } from "../components/nav";
import { Tractor } from "lucide-react";
import Link from 'next/link';
import { Projects_Card } from '../components/projects_card';

const projects = [
	{
		icon: <Tractor size={20} />,
		href: "https://www.pesticidenoi.netlify.app",
		label: "Pesticide Notification System",
		handle: "Pesticide System"
	}
];

export default function Projects() {
	return (
		<div className="bg-black scroll-p-5">
			<Navigation/>
			<div className="container flex items-center min-h-screen py-16 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 p-8">
					{projects.map((p) => (
						<Projects_Card key={p.label}>
							<Link
								href={p.href}
								className="overflow-hidden relative flex flex-col items-center gap-4 py-24 group"
							>
								<span className="relative z-10 flex items-center">
									{p.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
								<span className="font-medium xl:text-xl text-zinc-400 group-hover:text-white">
										{p.handle}
									</span>
									<span className="z-50 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
										{p.label}
									</span>
								</div>
							</Link>
						</Projects_Card>
					))}
				</div>
			</div>
		</div>
	);
}