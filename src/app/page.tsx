import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="dark flex justify-center min-h-[calc(100dvh)] bg-neutral-900 px-4 sm:px-6 lg:px-8">
			<div className="flex items-center justify-center h-[calc(100dvh)]">
				<div className="max-w-xl space-y-8">
					<div className="text-center">
						<Image
							alt=""
							className="mx-auto h-24 w-24 rounded-full"
							height="96"
							src="/cole.svg"
							style={{
								aspectRatio: "96/96",
								objectFit: "cover"
							}}
							width="96"
						/>
						<h2 className="mt-6 text-3xl font-bold tracking-tight text-white">colenh</h2>
						<p className="mt-2 text-sm text-neutral-400">frontend software engineer & student from west virginia</p>
					</div>
					<div>
						<p className="text-neutral-300">hey there! my name is cole, and i am a frontend software engineer and high school student from west virginia.</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">// projects</h3>
						<ul className="list-disc pl-5 space-y-1 text-neutral-300">
							<li>
								<Link className="text-neutral-400 hover:text-opacity-70 opacity-80 transition-colors" href="https://cow.yoga">
									cow yoga
								</Link>{" "}
								- a team creating products to simplify daily life for businesses and individuals, one at a time.
							</li>
							<li>
								<Link className="text-[#a4d233] hover:text-opacity-70 opacity-80 transition-colors" href="https://wandera.app">
									wandera
								</Link>{" "}
								- enables you to control and amend your Roblox datastores from any place, device or planet regardless of your access to Studio.
							</li>
							<li>
								<Link className="text-[#c4621b] hover:text-opacity-70 opacity-80 transition-colors" href="https://oranjetaxi.xyz">
									oranjetaxi
								</Link>{" "}
								- a taxi company within the virtual experience De Antillen on Roblox.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">// experience</h3>
						<ul className="list-disc pl-5 space-y-1 text-neutral-300">
							<li>
								<Link className="text-green-600 hover:text-opacity-70 opacity-80 transition-colors" href="https://www.serieswork.com">
									senior frontend engineer at sailboat games / series
								</Link>{" "}
								- in charge of crafting and maintaining all frontend sites for both Series and Eastside, two companies under the Sailboat Games umbrella.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">// contact</h3>
						<ul className="list-disc pl-5 space-y-1 text-neutral-300">
							<li>
								email -{" "}
								<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="mailto:me@colenh.dev">
									me@colenh.dev
								</Link>
							</li>
							<li>
								github -{" "}
								<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="https://github.com/colenh">
									@colenh
								</Link>
							</li>
							<li>
								read.cv -{" "}
								<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="https://read.cv/colenh">
									@colenh
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-neutral-300">
						<p>
							you can find the source code for this website on github at{" "}
							<Link className="text-neutral-500 hover:text-opacity-70 opacity-80 transition-colors" href="https://github.com/colenh/portfolio">
								colenh/portfolio
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
