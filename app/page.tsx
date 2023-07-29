import Link from "next/link";

export default function Home() {
	return (
		<div className="h-screen w-screen overflow-y-auto flex flex-col bg-neutral-900">
			<div className="my-auto py-24 space-y-8">
				<div className="w-4/5 md:w-5/12 max-w-3xl mx-auto mt-16 text-neutral-300 font-medium">
					<div className="mb-6">
						<div className="flex justify-between items-center">
							<h1 className="align-top font-heading font-semibold text-4xl text-neutral-300">colenh</h1>
						</div>

						<p className="text-md mt-1">student & software engineer from west virginia</p>

						<p className="text-neutral-400 my-4 text-base space-y-4">hey there! my name is cole, and i am a high school student and software engineer living in west virginia.</p>
					</div>
				</div>

				<div className="w-4/5 md:w-5/12 max-w-3xl mx-auto text-neutral-300 font-medium">
					<div className="mb-6">
						<div className="text-xl mt-1">// projects</div>

						<ul className="text-neutral-400 my-4 text-base space-y-1 list-disc list-inside">
							<li>
								<Link href="https://porcify.com" className="text-[#ba7a79] hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" target="_blank" rel="noreferrer">
									porcify
								</Link>{" "}
								- a software platform that enables companies to incentivize and reward individuals not only for discovering vulnerabilities and bugs but also for making valuable code contributions and more.
							</li>

							<li>
								<Link href="https://oranjetaxi.xyz" className="text-[#de8222] hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" target="_blank" rel="noreferrer">
									oranjetaxi
								</Link>{" "}
								- a taxi company within the virtual experience De Antillen on Roblox.
							</li>
						</ul>
					</div>
				</div>

				<div className="w-4/5 md:w-5/12 max-w-3xl mx-auto text-neutral-300 font-medium">
					<div className="mb-6">
						<div className="text-xl mt-1">// contact</div>

						<ul className="text-neutral-400 my-4 text-base space-y-1 list-disc list-inside">
							<li>
								email -{" "}
								<Link href="mailto:me@colenh.dev" className="text-neutral-100 hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" target="_blank" rel="noreferrer">
									me@colenh.dev
								</Link>
							</li>

							<li>
								github -{" "}
								<Link href="https://github.com/colenh" className="text-neutral-100 hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" target="_blank" rel="noreferrer">
									@colenh
								</Link>
							</li>

							<li>
								read.cv -{" "}
								<Link href="https://read.cv/colenh" className="text-neutral-100 hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" target="_blank" rel="noreferrer">
									@colenh
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="w-4/5 md:w-5/12 max-w-3xl mx-auto mb-12 mt-4 text-neutral-300 font-medium">
					<div className="opacity-60 my-4 text-base text-neutral-600">
						<p className="mb-3">
							you can find the source code for this website on github at{" "}
							<Link className="text-neutral-100 hover:underline underline-offset-1 hover:animate-pulse items-center inline-flex opacity-80" href="https://github.com/colenh/portfolio/" target="_blank" rel="noreferrer">
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
