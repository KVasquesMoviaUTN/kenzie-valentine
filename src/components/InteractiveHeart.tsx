"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

const REASONS = [
	"Your beautiful smile",
	"Your sense of humor",
	"How you stay strong when things get hard",
	"How you talk Spanish",
	"The way you look at me",
	"Your yummy lips 😈",
	"You are my best friend",
];

export default function InteractiveHeart() {
	const [reason, setReason] = useState<string | null>(null);

	const handleClick = () => {
		// Trigger confetti
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
			colors: ['#D4A5A5', '#FFFDF9', '#FFC0CB']
		});

		// Set random reason
		const randomReason = REASONS[Math.floor(Math.random() * REASONS.length)];
		setReason(randomReason);
	};

	return (
		<section className="py-20 flex flex-col items-center justify-center gap-8 relative z-10 w-full min-h-[50vh]">
			<motion.div
				whileHover={{ scale: 1.1, rotate: 5 }}
				whileTap={{ scale: 0.9 }}
				onClick={handleClick}
				className="cursor-pointer relative"
			>
				<motion.div
					animate={{ scale: [1, 1.05, 1] }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
				>
					<Heart
						className="text-dusty-rose fill-dusty-rose hover:fill-dusty-rose/80 transition-colors drop-shadow-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
						strokeWidth={1}
					/>
				</motion.div>
				<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-serif text-lg md:text-xl pointer-events-none">
					Click Me
				</p>
			</motion.div>

			<div className="h-20 flex items-center justify-center">
				<AnimatePresence mode="wait">
					{reason && (
						<motion.p
							key={reason}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="font-serif text-xl md:text-3xl text-charcoal text-center max-w-lg px-6 leading-relaxed"
						>
							&quot;{reason}&quot;
						</motion.p>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
