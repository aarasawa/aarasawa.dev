import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="justify-self-center overflow-hidden relative w-[300px] h-[300px]">
			<div className="pointer-events-auto md:py-0.5">
				{children}
					<div
						className="w-[250px] h-[250px] left-[32px] top-[43px] absolute bg-neutral-400"/>
					<div
						className="w-[250px] h-[250px] left-[27px] top-[38px] absolute bg-black border-4 border-zinc-200"/>
			</div>
		</div>
	);
};