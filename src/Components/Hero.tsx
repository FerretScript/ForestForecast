 import { useScroll } from "framer-motion";
import Header from "./Header";
import Paralax from "./Paralax";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return (
    <div
      ref={ref}
      className="flex h-screen w-screen flex-col items-center justify-start"
    >
      <Header />
      <Paralax scrollYProgress={scrollYProgress} />
    </div>
  );  
}
