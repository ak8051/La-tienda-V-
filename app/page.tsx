import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto md:px-2">
        <Navbar />
      </div>
      <Hero />
      <div className="max-w-6xl mx-auto md:px-2">
        <Products />
      </div>
    </>
  );
}
