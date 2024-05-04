'use client'
import React from "react";
import dynamic from 'next/dynamic';
import Navigation from "../components/Navigation";
import Card from '../components/TesterCard';
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

const cards = [
  {
    key: 1,
    content: (
      <Card 
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
        icon=<Tractor/>
        href="https://google.com/"
        label="Pesticide Notification System"
        handle="System for stuff."
      />
    ),
  },
  {
    key: 2,
    content: (
      <Card 
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" 
        icon=<Atom/>
        href=""
        label="Example"
        handle="Example"
      />
    ),
  },
  {
    key: 3,
    content: (
      <Card 
        imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" 
        icon=<Activity/>
        href=""
        label="Example"
        handle="Example"
      />
    ),
  }
];

const Carroussel = dynamic(() => import("../components/Carroussel"), { ssr: false });

const Projects: React.FC = () => {
  return (
		<div className="bg-black scroll-p-5">

			<Navigation/>

			<div className="flex items-center justify-center min-h-screen mx-auto overflow-hidden">
        
          <Carroussel

              /* cards={cards} */
              cards={projects}
              offset={2}
              showArrows={false}
              height="500px"
              width="60%"
              margin="0 auto"

          />

      </div>
    </div>
  );
}

export default Projects;