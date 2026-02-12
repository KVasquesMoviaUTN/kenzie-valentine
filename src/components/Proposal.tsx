"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Proposal() {
	const [accepted, setAccepted] = useState(false);
	const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

	const handleNoHover = () => {
		const x = Math.random() * 200;
		const y = Math.random() * 400;
		setNoBtnPosition({ x, y });
	};

	const handleYesClick = () => {
		setAccepted(true);
		const duration = 15 * 1000;
		const animationEnd = Date.now() + duration;
		const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

		const interval = window.setInterval(() => {
			const timeLeft = animationEnd - Date.now();

			if (timeLeft <= 0) {
				return clearInterval(interval);
			}

			const particleCount = 50 * (timeLeft / duration);
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
			});
			confetti({
				...defaults,
				particleCount,
				origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
			});
		}, 250);
	};

	return (
		<section className="py-20 flex flex-col items-center justify-center min-h-screen w-full relative z-10">
			{!accepted ? (
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center flex flex-col items-center gap-8"
				>
					<h2 className="font-serif text-4xl md:text-6xl text-charcoal">
						Kenzie, will you be my Valentine?
					</h2>

					<div className="flex items-center gap-8 mt-8">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={handleYesClick}
							className="bg-dusty-rose text-white px-8 py-4 rounded-full text-xl font-serif hover:bg-dusty-rose/90 transition-colors shadow-lg"
						>
							Yes! ❤️
						</motion.button>

						<motion.button
							animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
							onHoverStart={handleNoHover}
							onClick={handleNoHover}
							className="bg-charcoal/10 text-charcoal px-8 py-4 rounded-full text-xl font-serif hover:bg-charcoal/20 transition-colors"
						>
							No
						</motion.button>
					</div>
				</motion.div>
			) : (
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h2 className="font-serif text-5xl md:text-7xl text-dusty-rose mb-4">
						I knew you&apos;d say yes! ❤️
					</h2>
					<p className="text-xl text-charcoal/70">
						Best Valentine&apos;s Day Ever.
					</p>
				</motion.div>
			)}
		</section>
	);
}
