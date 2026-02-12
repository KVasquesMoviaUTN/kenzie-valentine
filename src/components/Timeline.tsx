"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MEMORIES = [
	{
		id: 1,
		title: "August 4, 2025",
		date: "A love story is born",
		description: "Every love story is beautiful, but ours is my favorite.",
		image: "/memories/august-2025.jpg"
	},
	{
		id: 2,
		title: "September 4, 2025",
		date: "(Not) Just another date",
		description: "Food was ok, but you were amazing.",
		image: "/memories/september-2025.jpg"
	},
	{
		id: 3,
		title: "October 10, 2025",
		date: "You said yes!",
		description: "The Happiest day of my life.",
		image: "/memories/proposal.jpg"
	},
	{
		id: 4,
		title: "January 30, 2026",
		date: "Our Journey Continues",
		description: "Looking forward to a lifetime of memories.",
		image: "/memories/recoleta.jpg"
	},
];

export default function Timeline() {
	return (
		<section className="py-20 px-4 md:px-10 flex flex-col items-center gap-10 relative z-10 w-full max-w-6xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="font-serif text-3xl md:text-5xl text-charcoal text-center"
			>
				Our Memories
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
				{MEMORIES.map((memory, i) => (
					<motion.div
						key={memory.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: i * 0.1, duration: 0.5 }}
						whileHover={{
							scale: 1.05,
							boxShadow: "0px 10px 30px rgba(212, 165, 165, 0.4)",
							y: -5
						}}
						className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-dusty-rose/20 cursor-pointer flex flex-col items-center text-center transition-all hover:bg-white/80 h-full min-h-[380px]"
					>
						<div className="w-full h-56 relative rounded-lg overflow-hidden shadow-sm mb-4">
							<Image
								src={memory.image}
								alt={memory.title}
								fill
								className="object-cover hover:scale-110 transition-transform duration-500"
							/>
						</div>
						<div className="flex flex-col gap-2 w-full flex-grow mt-2">
							<h3 className="font-serif text-lg md:text-xl text-charcoal w-full px-2 text-center leading-snug">{memory.title}</h3>
							<p className="text-xs md:text-sm text-dusty-rose font-medium uppercase tracking-wider w-full text-center">{memory.date}</p>
							<p className="text-xs md:text-sm text-charcoal/70 w-full px-2 text-center pb-2">{memory.description}</p>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
