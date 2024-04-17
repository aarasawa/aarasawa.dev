import { PropsWithChildren } from "react";

export const Projects_Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="pointer-events-auto justify-self-center overflow-hidden relative group 
      w-[334px] h-[473px]
      lg:w-[434px] lg:h-[573px]"
    >
      {children}
      
      <div className="absolute bg-neutral-500 group-hover:bg-neutral-400 left-[3px] top-[3px]
        w-[331px] h-[470px]
        lg:w-[431px] lg:h-[570px]"></div>

      <div className="left-0 top-0 absolute
        w-[329px] h-[468px]
        lg:w-[429px] lg:h-[568px]">

        <div className="left-0 top-0 absolute bg-black border border-zinc-400 group-hover:border-white
          w-[329px] h-[468px]
          lg:w-[429px] lg:h-[568px]"></div>

        <div className="left-[4px] top-[4px] absolute bg-black border border-zinc-400 group-hover:border-white
          w-[322px] h-[461px]
          lg:w-[422px] lg:h-[561px]"></div>

      </div>
    </div>
  )
}