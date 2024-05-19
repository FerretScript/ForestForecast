import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { scroll } from "framer-motion";
import { useLocation } from "wouter";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function Paralax({ scrollYProgress }: Props) {
  const [location, setLocation] = useLocation();

  const navigate = () => {
    setLocation("/simulator");
  };

  scroll((progress) => {
    if (progress > 0.9 && location === "/") {
      navigate();
    }
  });

  const backgroundhelper = useTransform(scrollYProgress, [0, 1], ["79%", "0%"]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["-1%", "20%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["-1%", "5%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["-2%", "-10%"]);
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["-5%", "-25%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "190%"]);

  return (
    <>
      <div className="relative grid h-full w-screen place-items-center overflow-hidden">
        <motion.div
          style={{ y: textY }}
          className="relative z-30 mb-[350px] flex flex-col items-center justify-center text-5xl font-bold text-white sm:text-8xl md:text-9xl lg:text-[9.5rem]"
        >
          <span className="mb-5 select-none">
            Forest<p className="inline text-dgreen">Forecast</p>
          </span>
          <div className="text-md flex items-center justify-around rounded-2xl bg-dgreen px-6 py-4 text-5xl font-normal">
            <p>Scroll down to start</p>
            <motion.div
              initial={{ y: "-15%" }}
              animate={{ y: [-3, 7, -3] }}
              transition={{ ease: "linear", duration: 1.4, repeat: Infinity }}
              className="aspect-square h-full pl-1"
            >
              <ChevronDown size={50} className="pt-1" />
            </motion.div>
          </div>
        </motion.div>
        {/* Background */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `url(./forest.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 "
          style={{
            backgroundImage: `url(./layer4.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer4Y,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          style={{
            backgroundImage: `url(./layer3.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer3Y,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-30"
          style={{
            backgroundImage: `url(./layer2.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer2Y,
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 z-40"
          style={{
            backgroundImage: `url(./layer1.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: layer1Y,
          }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 z-40 h-80 w-full bg-[#0b1e25]"
          style={{
            y: backgroundhelper,
          }}
        />
      </div>
    </>
  );
}
