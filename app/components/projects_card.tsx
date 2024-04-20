
interface ProjectCardProps {
  icon: React.ReactNode;
  href: string | undefined;
  label: string;
  handle: string;
  isActive: boolean;
}

export const Projects_Card: React.FC<ProjectCardProps> = ({ icon, href, label, handle, isActive }) => {
  return (
    <a 
      href={isActive ? href : undefined} 
      className={`block justify-self-center overflow-hidden relative group
        pointer-events-${isActive ? 'auto' : 'max-h-none'}
        w-[335px] h-[473px] 
        lg:w-[435px] lg:h-[573px]`}
    >

          {/* surrounding frame (invisible) */}
          <div 
            className={`absolute bg-neutral-500 left-[3px] top-[3px]
              ${isActive ? 'group-hover:bg-neutral-400' : ''} 
              w-[350px] h-[468px] 
              lg:w-[460px] lg:h-[568px]`}
          ></div>

                {/* outer white line frame */}
                <div 
                  className={`left-0 top-0 absolute bg-black border border-zinc-400 
                    ${isActive ? 'group-hover:border-white' : ''} 
                    w-[330px] h-[466px] 
                    lg:w-[430px] lg:h-[566px]`}
                ></div>

                {/* inner white line frame */}
                <div 
                  className={`left-[4px] top-[3px] absolute bg-black border border-zinc-400 
                    ${isActive ? 'group-hover:border-white' : ''} 
                    w-[323px] h-[460px] 
                    lg:w-[423px] lg:h-[560px]`}
                >

                      {/* container for icon, label, and handle */}
                      <div className="flex flex-col items-center justify-center h-full text-center">

                            {/* Icon */}
                            <div className="mb-4">{icon}</div>
                            {/* Label */}
                            <p className="text-white">{label}</p>
                            {/* Handle */}
                            <p className="text-white">{handle}</p>
                        
                      </div>
                </div>
    </a>
  );
};