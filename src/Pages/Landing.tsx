import { Suspense, useRef } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { useScroll } from "framer-motion";
import Nav from "../Components/Nav";
import Paralax from "../Components/Paralax";

export default function Landing() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="flex h-fit w-screen flex-col items-center justify-start overflow-y-auto scroll-smooth">
        <div
          ref={ref}
          className="flex h-screen w-fit flex-col items-center justify-start overflow-y-auto"
        >
          <Nav />
          <Paralax scrollYProgress={scrollYProgress} />
        </div>
        <div className="bg-[#0b1e25] h-screen w-full"></div>
      </div>
    </Suspense>
  );
}
