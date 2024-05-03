import React from 'react';

interface ContactCardProps {
	icon: React.ReactNode;
	href: string;
	label: string;
	handle: string;
  index: number;
  handleMouseDown: (index: number) => void;
  handleMouseUp: (href: string) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, href, label, handle, index, handleMouseDown, handleMouseUp
}) => {  
  const [pressed, setPressed] = React.useState(false);

  const onMouseDown = () => {
    setPressed(true);
    handleMouseDown(index);
  };

  const onMouseUp = () => {
    setPressed(false);
    handleMouseUp(href);
  };

  const onMouseLeave = () => {
    if (pressed) {
      setPressed(false);
    }
  }

  return (
    // Backdrop layer
    <div
      className={`
        block pointer-events-auto justify-self-center overflow-hidden group relative
        w-[305px] h-[305px]`}
    >
          {/* Clickable layer covering square */}
          <a 
            href={href}
            className="block w-full h-full"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
              {/* Label, Icon, Handle container */}
              <div 
                className="flex flex-col items-center justify-center h-full text-center"
              >

                  <div className="mb-4 z-10">{icon}</div>
                  <p className="text-white z-10">{label}</p>
                  <p className="text-white z-10">{handle}</p>

                  {/* Solid backdrop behind concentric square frames */}
                  <div 
                    className={`absolute bg-zinc-400 group-hover:bg-zinc-300
                      w-[300px] h-[300px] 
                      left-[5px] top-[5px]`}></div>
                      
                  <div className={`w-[300px] h-[300px] left-0 top-0 absolute`}>

                        {/* Outer square border frame */}
                        <div 
                          className={`absolute bg-black border border-zinc-400 group-hover:border-white
                            w-[300px] h-[300px] 
                            ${pressed ? `left-[5px] top-[5px]` : `left-0 top-0`}`}></div>

                        {/* Inner square border frame */}
                        <div 
                          className={`absolute bg-black border border-zinc-400 group-hover:border-white
                            w-[290px] h-[290px] 
                            ${pressed ? `left-[10px] top-[10px]` : `left-[5px] top-[5px]`}`}></div>

                  </div>

              </div>

          </a>

    </div>
  );
};

export default ContactCard;