import { PropsWithChildren } from "react";

export const Projects_Card: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="pointer-events-auto justify-self-center overflow-hidden relative group w-[334px] h-[173px]">
      {children}
      <div className="w-[331px] h-[170px] left-[3px] top-[3px] absolute bg-neutral-500 group-hover:bg-neutral-400"></div>
      <div className="w-[329px] h-[168px] left-0 top-0 absolute">
        <div className="w-[329px] h-[168px] left-0 top-0 absolute bg-black border border-zinc-400 group-hover:border-white"></div>
        <div className="w-[323px] h-[162px] left-[3px] top-[3px] absolute bg-black border border-zinc-400 group-hover:border-white"></div>
      </div>
    </div>
  )
}