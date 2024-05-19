import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Users } from "lucide-react";
import { useState } from "react";
import IconLink from "./IconLink";

export default function FloatingNav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.06 }}
        onClick={() => {
          setShowNav(!showNav);
        }}
        animate={showNav ? { x: "110%" } : { x: "0%" }}
        className="absolute bottom-4 left-2 z-50 flex aspect-square h-14 items-center justify-center rounded-2xl bg-white md:top-4 md:h-20"
      >
        {!showNav ? (
          <ChevronRight size={50} className="stroke-black " />
        ) : (
          <ChevronLeft size={50} className="stroke-black  " />
        )}
      </motion.button>
      <motion.div
        initial={{ x: "-120%" }}
        animate={showNav ? { x: "0%" } : { x: "-120%" }}
        className="absolute  bottom-4 left-2 z-50 flex h-28 w-14 flex-col items-center justify-around rounded-2xl bg-white p-1 md:top-4 md:h-40 md:w-20"
      >
        <IconLink href={"/#nav"}>
          <Home size={30} className="stroke-black" />
        </IconLink>
        <IconLink href="/about-us">
          <Users size={30} className="stroke-black" />
        </IconLink>
      </motion.div>
    </>
  );
}
