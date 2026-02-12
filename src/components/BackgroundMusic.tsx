"use client";

import { useRef, useEffect } from "react";

export default function BackgroundMusic() {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			audioRef.current = new Audio("/love-story.mp3");
			audioRef.current.loop = true;
			audioRef.current.volume = 0.5;

			const playAudio = () => {
				if (audioRef.current) {
					audioRef.current.play()
						.then(() => {
							// Remove listener once playing
							document.removeEventListener("click", playAudio);
						})
						.catch((e) => {
							console.log("Autoplay blocked, waiting for interaction:", e);
						});
				}
			};

			// Try playing immediately
			playAudio();

			// Also try satisfying browser policy on first interaction
			document.addEventListener("click", playAudio);

			return () => {
				document.removeEventListener("click", playAudio);
				if (audioRef.current) {
					audioRef.current.pause();
					audioRef.current = null;
				}
			};
		}
	}, []);

	return null;
}
