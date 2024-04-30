'use client'
import { Navigation } from "../components/nav";
import { Projects_Card } from "../components/projects_card"
import MultiCardCarousel from "../components/carousel";
import { Tractor, Activity, Atom } from "lucide-react";
import React from 'react';

const projects = [
	{
		icon: <Tractor size={30}/>,
		href: "https://pesticidenoi.netlify.app/",
		label: "Pesticide Notification System",
		handle: "Pesticide System"
	},
	{
		icon: <Activity size={30}/>,
		href: "",
		label: "Example",
		handle: "Example"
	},
	{
		icon: <Atom size={30}/>,
		href: "",
		label: "Example",
		handle: "Example"
	},
];

export default function Projects() {
	const [currentIndex, setCurrentIndex] = React.useState<number>(0);

	const handleMouseDown = (index: number) => {
		setCurrentIndex(index);
	};

	const handleMouseUp = (href: string) => {
		window.location.href = href;
	};

	return (
		<div className="bg-black scroll-p-5">

			<Navigation/>

			<div 
				className="flex items-center justify-center
					min-h-screen mx-auto overflow-hidden"
			>

					<MultiCardCarousel 
						currentIndex={currentIndex} 
						setCurrentIndex={setCurrentIndex} 
						projects={projects}
					>

								{projects.map((project, index) => (
									<Projects_Card 
										key={index}
										icon={project.icon}
										href={project.href}
										label={project.label}
										handle={project.handle}
										index={index}
										handleMouseDown={handleMouseDown}
										handleMouseUp={handleMouseUp}
									/>
								))}

					</MultiCardCarousel>

			</div>
		</div>
	);
}