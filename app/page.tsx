import Confetti from "./components/Confetti";
import Hero from "./components/Hero";
import Hadiah from "./components/Hadiah";
import Testimonials from "./components/Testimonials";
import Bantuan from "./components/Bantuan";
import Kuiz from "./components/Kuiz";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Confetti />
      <main className="flex-1">
        <Hero />
        <Hadiah />
        <Testimonials />
        <Bantuan />
        <Kuiz />
      </main>
      <Footer />
    </div>
  );
}
