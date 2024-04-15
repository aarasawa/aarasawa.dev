import { Navigation } from "../components/nav";
import Preloader from "../components/preloader";

export default function boot() {
  return (
		<div className="bg-black scroll-p-5">
			<Navigation />
			<div className=" flex flex-col justify-center w-screen h-screen overflow-hidden">
				<Preloader/>
			</div>
		</div>
	);
}