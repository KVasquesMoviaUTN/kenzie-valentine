"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Hero() {
	return (
		<section className="h-screen w-full flex flex-col items-center justify-center relative z-10">
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, ease: "easeOut" }}
				className="flex flex-col items-center gap-6"
			>
				<motion.div
					animate={{ y: [0, -15, 0] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				>
					<Heart
						size={80}
						className="text-dusty-rose fill-dusty-rose/20"
						strokeWidth={1.5}
					/>
				</motion.div>

				<h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-charcoal tracking-wide text-center px-6 leading-tight">
					PARA EL AMOR DE MI VIDA
				</h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.5, duration: 1 }}
					className="text-lg md:text-xl text-charcoal/80 font-light"
				>
					Scroll down to see our story
				</motion.p>
			</motion.div>

			<motion.div
				className="absolute bottom-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{ delay: 2, duration: 2, repeat: Infinity }}
			>
				<div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center p-1">
					<div className="w-1 h-2 bg-charcoal/30 rounded-full animate-bounce" />
				</div>
			</motion.div>
		</section>
	);
}
