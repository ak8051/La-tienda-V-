import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
      <Hero />
    </>
  );
}
