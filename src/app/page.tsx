"use client";

import Link from "./components/Link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
	const [time, setTime] = useState<string>("");
	const [copyStatus, setCopyStatus] = useState(false);

	useEffect(() => {
		setTime(
			new Date().toLocaleTimeString("en-US", {
				timeZone: "America/Toronto",
			}),
		);

		const interval = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString("en-US", {
					timeZone: "America/Toronto",
				}),
			);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const copyEmail = () => {
		navigator.clipboard.writeText("rooz@butler.ai");
		setCopyStatus(true);
		setTimeout(() => setCopyStatus(false), 500);
	};

	return (
		<>
			<title>Roozbeh Ali</title>
			<meta
				name="description"
				content="A software engineer from Toronto, Canada."
			/>

			<div className="flex flex-col py-12 px-4 sm:px-8 md:px-12 text-white w-full max-w-[600px] min-h-screen">
				<h1 className="text-orange-200 text-xl">Roozbeh Ali</h1>
				<div className="flex flex-col sm:flex-row sm:gap-2 mb-6">
					<p className="text-gray-400 text-xs">Toronto, Canada</p>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.75 }}
						className="text-gray-400 text-xs"
					>
						{time || "00:00:00 XX"}
					</motion.p>
				</div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.75, delay: 0.1 }}
					className="max-w-prose mb-6"
				>
					I'm a 20 year old software engineer based in Toronto. Currently
					working on <Link href="https://select.dev">SELECT</Link> and studying
					Computer Engineering at the{" "}
					<Link href="https://ece-webring.vercel.app/">
						University of Waterloo
					</Link>
					.
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.75, delay: 0.2 }}
					className="max-w-prose mb-6"
				>
					I'm also building something <Link href="/secret">secret</Link>.
					Previously, I founded, built and raised venture capital for{" "}
					<Link href="https://butler.ai">Butler</Link>, an all-in-one AI
					assistant.
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.75, delay: 0.3 }}
					className="max-w-prose mb-6"
				>
					I love math, programming, working out and crafting tools that feel
					good to use. I'm an avid fan of great{" "}
					<Link href="https://www.cosmos.so/roozbehali/tech">tech</Link>.
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.75, delay: 0.4 }}
					className="mb-6"
				>
					Always open to chat; reach me via{" "}
					<button
						type="button"
						onClick={copyEmail}
						className={`hover:text-orange-200 inline-flex items-center gap-1 underline ${
							copyStatus ? "cursor-not-allowed" : "cursor-pointer"
						}`}
					>
						{copyStatus ? "[copied]" : "email"}
					</button>{" "}
					or{" "}
					<a
						href="https://cal.com/roozbehali"
						className="hover:text-orange-200 underline"
					>
						calendar
					</a>
					.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, delay: 0.4 }}
					className="border-t border-zinc-500"
				>
					<div className="flex gap-2 mt-2">
						<Link href="https://linkedin.com/in/roozbehali">LinkedIn</Link>
						<Link href="https://x.com/roozbehsali">X</Link>
						<Link href="https://github.com/roozbehali">GitHub</Link>
						<Link href="https://instagram.com/roozbehsali">Instagram</Link>
					</div>
				</motion.div>
			</div>
		</>
	);
}
