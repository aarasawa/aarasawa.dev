import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectsCardBtn from './ProjectsCardBtn';

interface ProjectCardProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  handle: string;
  onClick?: () => void;
}

const ProjectsCard: React.FC<ProjectCardProps> = ({
  icon, href, label, handle
}) => {
  const [show, setShown] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className="relative overflow-hidden pointer-events-auto justify-self-center group w-[305px] h-[305px]"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => {
        setShown(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >

        <div className="flex flex-col items-center justify-center h-full text-center">

            <div className="mb-4 z-10">{icon}</div>
            <h2 className="text-lg font-semibold text-center text-white z-10">{label}</h2>
            <p className="text-sm text-gray-600 text-center z-10">{handle}</p>

            <div className="absolute bg-zinc-400 group-hover:bg-zinc-300 w-[300px] h-[300px] left-[5px] top-[5px]"></div>
            <div className="absolute w-[300px] h-[300px] left-0 top-0">

                <div className={`absolute bg-black border border-zinc-400 group-hover:border-white w-[300px] h-[300px] ${pressed ? 'left-[5px] top-[5px]' : 'left-0 top-0'}`}></div>
                <div className={`absolute bg-black border border-zinc-400 group-hover:border-white w-[290px] h-[290px] ${pressed ? 'left-[10px] top-[10px]' : 'left-[5px] top-[5px]'}`}></div>
          
            </div>

        </div>

    </animated.div>
  );
}

export default ProjectsCard;