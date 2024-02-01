import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="dark flex justify-center min-h-screen bg-neutral-900 px-4 sm:px-6 lg:px-8">
			<div className="flex items-center justify-center h-screen">
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
						<p className="mt-2 text-sm text-neutral-400">student & software engineer from west virginia</p>
					</div>
					<div>
						<p className="text-neutral-300">hey there! my name is cole, and i am a high school student and software engineer living in west virginia.</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">// projects</h3>
						<ul className="list-disc pl-5 space-y-1 text-neutral-300">
							<li>
								<Link className="text-neutral-400 hover:text-neutral-600 opacity-80 transition-colors" href="https://cow.yoga">
									cow yoga
								</Link>{" "}
								- a team creating products to simplify daily life for businesses and individuals, one at a time.
							</li>
							<li>
								<Link className="text-[#c4621b] hover:text-[#e99b62] opacity-80 transition-colors" href="https://oranjetaxi.xyz">
									oranjetaxi
								</Link>{" "}
								- a taxi company within the virtual experience De Antillen on Roblox.
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-white">// contact</h3>
						<ul className="list-disc pl-5 space-y-1 text-neutral-300">
							<li>
								email -{" "}
								<Link className="text-neutral-500 hover:text-neutral-300 opacity-80 transition-colors" href="mailto:me@colenh.dev">
									me@colenh.dev
								</Link>
							</li>
							<li>
								github -{" "}
								<Link className="text-neutral-500 hover:text-neutral-300 opacity-80 transition-colors" href="https://github.com/colenh">
									@colenh
								</Link>
							</li>
							<li>
								read.cv -{" "}
								<Link className="text-neutral-500 hover:text-neutral-300 opacity-80 transition-colors" href="https://read.cv/colenh">
									@colenh
								</Link>
							</li>
						</ul>
					</div>
					<div className="text-neutral-300">
						<p>
							you can find the source code for this website on github at{" "}
							<Link className="text-neutral-500 hover:text-neutral-300 opacity-80 transition-colors" href="https://github.com/colenh/portfolio">
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
