/** biome-ignore-all lint/suspicious/noCommentText: used for header text */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100dvh)] bg-neutral-900 text-neutral-300 p-4 space-y-8 py-8">
			<div className="flex flex-col items-center space-y-2">
				<Image alt="" className="mx-auto h-24 w-24 rounded-full aspect-square mb-2" height="96" src="/cole.svg" width="96" />
				<h1 className="text-3xl font-bold tracking-tight text-white text-center">cole harris</h1>
				<p className="text-neutral-400 text-center">
					software engineer & college student
					<br />
					born, raised, and still living in west virginia
				</p>
			</div>
			<div className="max-w-xl space-y-8">
				<p className="text-center">
					hey there! my name is cole, and i am a software engineer and college student in west virginia. i am currently attending{" "}
					<Link className="bg-linear-to-r from-blue-500  to-yellow-500 bg-clip-text text-transparent hover:opacity-80 transition-colors" href="https://wvu.edu/" target="_blank">
						west virginia university
					</Link>{" "}
					for computer science and cybersecurity, and i have a ton of experience in website design and backend engineering. i am always searching for new opportunities, so feel free to{" "}
					<Link className="text-neutral-400 hover:text-opacity-70 opacity-80 transition-colors" href="mailto:me@colenh.dev">
						reach out to me
					</Link>
					!
				</p>
				<div>
					<h2 className="text-xl font-bold">// projects</h2>
					<ul className="list-disc list-outside space-y-2 pl-5">
						<li>
							<Link className="text-neutral-400 hover:text-opacity-70 opacity-80 transition-colors" href="https://cow.yoga" target="_blank">
								cow yoga
							</Link>{" "}
							- a team creating products to simplify daily life for businesses and individuals, one at a time.
						</li>
						<li>
							<Link className="text-[#a4d233] hover:text-opacity-70 opacity-80 transition-colors" href="https://wandera.app" target="_blank">
								wandera
							</Link>{" "}
							- empowers you to manage your small business operations from any place, device, or planet with shipping, accounting, supply management, CRM, inventory, and more.
						</li>
						<li>
							<Link className="text-[#c4621b] hover:text-opacity-70 opacity-80 transition-colors" href="https://oranjetaxi.com" target="_blank">
								oranjetaxi
							</Link>{" "}
							- a taxi company within the virtual experience De Antillen on Roblox.
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-xl font-bold">// experience</h2>
					<ul className="list-disc list-outside space-y-2 pl-5">
						<li>
							<Link className="text-[#a957f7] hover:text-opacity-70 opacity-80 transition-colors" href="https://series.hr/" target="_blank">
								engineering manager at sailboat games
							</Link>{" "}
							<span className="italic text-neutral-500">(2021-present)</span> - in charge of shaping and delivering every technical experience, overseeing the strategy for both Series and Eastside at Sailboat Games.
						</li>
					</ul>
				</div>
				<div>
					<h2 className="text-xl font-bold">// contact</h2>
					<ul className="list-disc list-outside space-y-2 pl-5">
						<li>
							email -{" "}
							<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="mailto:me@colenh.dev">
								me@colenh.dev
							</Link>
						</li>
						<li>
							github -{" "}
							<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="https://github.com/colenh" target="_blank">
								@colenh
							</Link>
						</li>
					</ul>
				</div>
				<p className="text-center">
					you can find the source code for this website on github at{" "}
					<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="https://github.com/colenh/portfolio" target="_blank">
						colenh/portfolio
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
