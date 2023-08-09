import HeroImg from "../../public/Hero.jpg";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam
          quos recusandae, voluptatibus, distinctio veritatis deleniti saepe
          fugit deserunt beatae, harum maiores nam repudiandae magni accusamus
          enim cupiditate dolor accusantium.
        </p>
      </div>
      <div className="">
        <Image
          src={HeroImg}
          fill
          alt="Hero"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default Hero;
