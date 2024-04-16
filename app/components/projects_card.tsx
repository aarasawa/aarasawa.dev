import { PropsWithChildren } from "react";

export const Projects_Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="pointer-events-auto justify-self-center overflow-hidden relative group w-[434px] h-[573px]">
      {children}
      <div className="w-[431px] h-[570px] left-[3px] top-[3px] absolute bg-neutral-500 group-hover:bg-neutral-400"></div>
      <div className="w-[429px] h-[568px] left-0 top-0 absolute">
        <div className="w-[429px] h-[568px] left-0 top-0 absolute bg-black border border-zinc-400 group-hover:border-white"></div>
        <div className="w-[423px] h-[562px] left-[3px] top-[3px] absolute bg-black border border-zinc-400 group-hover:border-white"></div>
      </div>
    </div>
  )
}