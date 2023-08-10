import HeroImg from "../../public/Hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute z-10 text-center top-1/2 right-1/2 translate-x-1/2 -translate-y-1/ bg-white/80 py-8 px-24 max-md:w-full">
        <h1 className="font-medium text-4xl">لاتندا</h1>
        <p className="text-lg">أفضل موقع لشراء ادواتك المنزلية</p>
      </div>
      <div className="max-md:hidden">
        <Image
          src={HeroImg}
          alt="Hero"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "88vh",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
