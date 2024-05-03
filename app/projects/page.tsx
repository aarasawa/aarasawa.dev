'use client'
import React from "react";
import dynamic from 'next/dynamic';
import Navigation from "../components/Navigation";
import { Tractor, Activity, Atom } from "lucide-react";

const projects = [
  {
    icon: <Tractor size={30} />,
    href: "",
    label: "Pesticide Notification System",
    handle: "Interactive map of pesticide applications in California",
  },
  {
    icon: <Activity size={30} />,
    href: "",
    label: "Activity Tracker",
    handle: "Track Activities",
  },
  {
    icon: <Atom size={30} />,
    href: "",
    label: "Example",
    handle: "Explore Molecules",
  },
];

const Carroussel = dynamic(() => import("../components/Carroussel"), { ssr: false });

const Projects: React.FC = () => {
  return (
		<div className="bg-black scroll-p-5">

			<Navigation/>

			<div className="flex items-center justify-center min-h-screen mx-auto overflow-hidden">
        
          <Carroussel

              cards={projects}
              offset={2}
              showArrows={false}
              height="500px"
              width="50%"
              margin="0 auto"

          />

      </div>
    </div>
  );
}

export default Projects;