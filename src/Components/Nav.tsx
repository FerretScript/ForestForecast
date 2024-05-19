import { Link } from "wouter";
import { TreePine } from "lucide-react";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <nav className="min-w-screen flex h-[50px]  w-full items-center justify-between scroll-smooth border-b-2 border-dgreen bg-lgreen md:h-[4.375rem]">
      <motion.a
        whileTap={{ scale: 0.8 }}
        href="https://github.com/FerretScript/ForestForecast"
        className="flex aspect-square h-full items-center justify-center p-4 hover:cursor-pointer"
      >
        <TreePine size={34} className="fill-primary stroke-primary" />
      </motion.a>
      {/* Nav links */}
      <div className="flex h-full w-fit items-center justify-center">
        <Link href="/about-us">
          <a
            className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl"
          >
            ABOUT US
          </a>
        </Link>
        <Link href="/simulator">
          <a
            className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl"
          >
            SIMULATOR
          </a>
        </Link>
        <a
          href="mailto:yairprogrammer@gmail.com"
          className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl"
        >
          CONTACT US
        </a>
      </div>
      <div className="hidden lg:block"></div>
    </nav>
  );
}
