import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Contact_Card } from "../components/contact_card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href:"https://linkedin.com/in/alexarasawa",
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
		href: "https://www.github.com/aarasawa",
		label: "Github",
		handle: "aarasawa",
	},
];

export default function Contact() {
	return (
		<div className="bg-black scroll-p-5">
			<Navigation/>
			<div className="container flex items-center min-h-screen py-16 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3 p-8">
					{socials.map((s) => (
						<Contact_Card key={s.label}>
							<Link
								href={s.href}
								className="overflow-hidden relative flex flex-col items-center gap-4 py-24 group"
							>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border group-hover:text-white group-hover:border-white text-zinc-400 border-zinc-500">
									{s.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="font-medium xl:text-xl text-zinc-400 group-hover:text-white">
										{s.handle}
									</span>
									<span className="z-50 text-sm text-center text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
								</div>
							</Link>
						</Contact_Card>
					))}
				</div>
			</div>
		</div>
	);
}