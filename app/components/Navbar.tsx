import Link from "next/link";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { AiOutlinePhone } from "react-icons/ai";

function Navbar() {
  return (
    <div className="py-5 flex items-center justify-between flex-row-reverse">
      <div>
        <Link href="/">
          <Image src="/Logo.png" width={156} height={126} alt="Logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-5 flex-row-reverse">
          <Link href="/" className="flex flex-row-reverse items-center gap-2">
            <BiHome className="text-lg font-bold" />
            <li>الرئيسية</li>
          </Link>
          <Link
            href="/contact"
            className="flex flex-row-reverse items-center gap-2"
          >
            <AiOutlinePhone className="text-lg font-bold" />
            <li>اتصل بنا</li>
          </Link>
          <Link
            href="/about"
            className="flex flex-row-reverse items-center gap-2"
          >
            <FcAbout className="text-lg font-bold" />
            <li>حول</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
