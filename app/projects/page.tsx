import { Navigation } from "../components/nav";

export default function Projects() {
	return (
		<div className="bg-black scroll-p-5">
			<Navigation />
			<div className=" flex flex-col justify-center w-screen h-screen overflow-hidden">
				<div className="bg-black">
					<div className="flex"></div>
					<h1 className="text-center mt-5 text-4xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text">
							Under Construction
					</h1>
				</div>
			</div>
		</div>
	);
}