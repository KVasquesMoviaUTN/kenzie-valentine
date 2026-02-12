"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingBackground() {
	const [elements, setElements] = useState<Array<{ id: number; left: number; duration: number; delay: number }>>([]);

	useEffect(() => {
		const newElements = Array.from({ length: 20 }).map((_, i) => ({
			id: i,
			left: Math.random() * 100,
			duration: Math.random() * 20 + 10,
			delay: Math.random() * 10,
		}));
		setElements(newElements);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{elements.map((el) => (
				<motion.div
					key={el.id}
					className="absolute bottom-0 text-dusty-rose opacity-20"
					initial={{ y: "110vh", opacity: 0 }}
					animate={{
						y: "-10vh",
						opacity: [0, 0.2, 0],
						x: [0, Math.random() * 50 - 25, 0],
					}}
					transition={{
						duration: el.duration,
						repeat: Infinity,
						delay: el.delay,
						ease: "linear",
					}}
					style={{ left: `${el.left}%` }}
				>
					{/* Simple heart SVG or character */}
					<span className="text-2xl">♥</span>
				</motion.div>
			))}
		</div>
	);
}
