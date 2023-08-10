import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto md:px-2">
        <Navbar />
      </div>
      <Hero />
    </>
  );
}
