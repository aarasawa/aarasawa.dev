"use client";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href:"https://linkedin.com/in/alexander-arasawa",
    label: "LinkedIn",
    handle: "Alexander Arasawa",
  },
	{
		icon: <Mail size={20} />,
		href: "mailto:aarasawa@gmail.com",
		label: "Email",
		handle: "aarasawa@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/aarasawa",
		label: "Github",
		handle: "aarasawa",
	},
];

export default function Example() {
	return (
		<div className="bg-black scroll-p-5">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3 ">
					{socials.map((s) => (
						<Card key={s.label}>
							<Link
								href={s.href}
								target="_blank"
								className="p-2 relative flex flex-col items-center gap-4 py-24 lg:pb-48">
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-md text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="font-medium xl:text-xl text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="mt-4 z-50 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}