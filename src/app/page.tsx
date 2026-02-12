import FloatingBackground from "@/components/FloatingBackground";
import Hero from "@/components/Hero";
import InteractiveHeart from "@/components/InteractiveHeart";
import BackgroundMusic from "@/components/BackgroundMusic";
import Proposal from "@/components/Proposal";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-cream">
      {/* Floating Elements Background - Z-Index 0 */}
      <FloatingBackground />

      {/* Background Music - Hidden */}
      <BackgroundMusic />

      {/* Main Content - Z-Index 10 */}
      <div className="relative z-10 flex flex-col gap-10 md:gap-20 pb-20">
        <Hero />

        <Timeline />

        <InteractiveHeart />

        <Proposal />
      </div>

      <footer className="w-full text-center py-6 relative z-10 opacity-50 font-serif text-sm">
        Made with ❤️ for my princesita
      </footer>
    </main>
  );
}
