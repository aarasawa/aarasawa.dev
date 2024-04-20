import React from 'react';

interface ContactCardProps {
	icon: React.ReactNode;
	href: string;
	label: string;
	handle: string;
  onMouseDown: () => void;
  onMouseUp: () => void;
}

export const Contact_Card_Unpressed: React.FC<ContactCardProps> = ({ 
  icon, href, label, handle, onMouseDown, onMouseUp
}) => {

  
  const [pressed, setPressed] = React.useState(false);

  const handleMouseDown = () => {
    setPressed(true);
    if (onMouseDown) onMouseDown();
  };

  const handleMouseUp = () => {
    setPressed(false);
    if (onMouseUp) onMouseUp();
  };

  return (
    <div className="block pointer-events-auto justify-self-center overflow-hidden group relative w-[305px] h-[305px]">
      <a href={href} className="block w-full h-full">
        <div className="flex flex-col items-center justify-center h-full text-center"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Icon */}
          <div className={`mb-4 z-10`}>{icon}</div>
          {/* Label */}
          <p className={`text-white z-10`}>{label}</p>
          {/* Handle */}
          <p className={`text-white z-10`}>{handle}</p>
          {/* Background */}

          <div className={`w-full h-full absolute top-0 left-0`}></div>
          <div className="w-full h-full absolute top-0 left-0">
            <div className={`w-full h-full bg-black border border-zinc-400 group-hover:border-white`}></div>
            <div className={`w-full h-full border-t border-l border-black`}></div>
          </div>
        </div>
      </a>
    </div>
  );
};

export const Contact_Card_Pressed: React.FC<ContactCardProps> = ({ 
  icon, href, label, handle, onMouseDown, onMouseUp
}) => {
  return (
    <div className="block pointer-events-auto justify-self-center overflow-hidden group relative w-[305px] h-[305px]">
      <a href={href} className="block w-full h-full">
        <div className="flex flex-col items-center justify-center h-full text-center">
          {/* Icon */}
          <div className="mb-4 z-10">{icon}</div>
          {/* Label */}
          <p className="text-white z-10">{label}</p>
          {/* Handle */}
          <p className="text-white z-10">{handle}</p>
        </div>
        <div className="w-[300px] h-[300px] left-[5px] top-[5px] absolute bg-zinc-500 group-hover:bg-zinc-400"></div>
        <div className="w-[300px] h-[300px] left-0 top-0 absolute">
          <div className="w-[300px] h-[300px] left-0 top-0 absolute bg-black border border-zinc-400 group-hover:border-white"></div>
          <div className="w-[290px] h-[290px] left-[5px] top-[5px] absolute bg-black border border-zinc-400 group-hover:border-white"></div>
        </div>
      </a>
    </div>
  );
};