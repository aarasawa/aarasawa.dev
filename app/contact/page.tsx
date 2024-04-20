'use client'
import { Github, Mail, Linkedin } from "lucide-react";
import { Navigation } from "../components/nav";
import { Contact_Card_Unpressed, Contact_Card_Pressed } from "../components/contact_card";
import React from 'react';

interface Social {
	icon: React.ReactNode;
	href: string;
	label: string;
	handle: string;
}

const socials: Social[] = [
  {
    icon: <Linkedin size={30} />,
    href:"https://linkedin.com/in/alexarasawa",
    label: "LinkedIn",
    handle: "Alexander Arasawa",
  },
	{
		icon: <Mail size={30} />,
		href: "mailto:aarasawa@gmail.com",
		label: "Email",
		handle: "aarasawa@gmail.com",
	},
	{
		icon: <Github size={30} />,
		href: "https://www.github.com/aarasawa",
		label: "Github",
		handle: "aarasawa",
	},
];

const Contact: React.FC = () => {
	const [pressedIndex, setPressedIndex] = React.useState<number | null>(null);

	const handleMouseDown = (index: number) => {
		setPressedIndex(index);
	};

	const handleMouseUp = (href: string) => {
		if (pressedIndex !== null) {
			setPressedIndex(null);
			window.location.href = href;
		}
	};

	const emptyFunc = () => {}

	return (
		<div className="bg-black scroll-p-5">
			
			<Navigation/>

			<div className="container flex items-center min-h-screen py-16 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto lg:grid-cols-3 p-8">

					{socials.map((s, index) => (
						pressedIndex === index ? (
							<Contact_Card_Unpressed
								key={index}
								icon={s.icon}
								href={s.href}
								label={s.label}
								handle={s.handle}
								onMouseDown={() => emptyFunc}
								onMouseUp={() => emptyFunc}
							/>
						) : (
							<Contact_Card_Pressed
								key={index}
								icon={s.icon}
								href={s.href}
								label={s.label}
								handle={s.handle}
								onMouseDown={() => handleMouseDown(index)}
								onMouseUp={() => handleMouseUp(s.href)}
							/>
						)
					))}

				</div>
			</div>
		</div>
	);
}

export default Contact;