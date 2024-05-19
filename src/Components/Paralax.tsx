import { motion, MotionValue, useTransform } from "framer-motion";
import { Link } from "wouter";

type Props = {
  scrollYProgress: MotionValue<number>;
};

export default function Paralax({ scrollYProgress }: Props) {
  const backgroundhelper = useTransform(scrollYProgress, [0, 1], ["80%", "0%"]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["-1%", "20%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["-1%", "5%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["-2%", "-10%"]);
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["-5%", "-25%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "180%"]);

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
          <Link href="/simulator">
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="flex cursor-pointer select-none items-center justify-center rounded-[2rem] bg-dgreen px-6 pb-4 pt-3 text-center text-[4rem]"
            >
              Start
            </motion.a>
          </Link>
        </motion.div>
        {/* Background */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 bg-red-400"
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
          className="pointer-events-none absolute bottom-0 z-40 h-72 w-full bg-[#0b1e25]"
          style={{
            y: backgroundhelper,
          }}
        />
      </div>
    </>
  );
}
