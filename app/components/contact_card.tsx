import { PropsWithChildren } from "react";

export const Contact_Card: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="pointer-events-auto justify-self-center overflow-hidden group relative w-[305px] h-[305px]">
			{children}
			<div className="w-[300px] h-[300px] left-[5px] top-[5px] absolute bg-zinc-500 group-hover:bg-zinc-400"></div>
			<div className="w-[300px] h-[300px] left-0 top-0 absolute">
				<div className="w-[300px] h-[300px] left-0 top-0 absolute bg-black border border-zinc-400 group-hover:border-white"></div>
				<div className="w-[290px] h-[290px] left-[5px] top-[5px] absolute bg-black border border-zinc-400 group-hover:border-white"/>
			</div>
		</div>
	);
};