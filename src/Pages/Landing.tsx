import { Suspense, useRef } from "react";
import LoadingScreen from "../Components/LoadingScreen";
import { useScroll } from "framer-motion";
import Nav from "../Components/Nav";
import Paralax from "../Components/Paralax";
import { Github } from "lucide-react";

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
        <div className="flex h-screen w-full items-center justify-center">
          <div
            id="aboutus"
            className="relative flex h-full w-full items-center justify-center"
          >
            <div className="relative z-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg sm:p-10">
              <h1 className="mb-4 text-3xl font-bold text-[#283618] sm:text-4xl">
                About Us
              </h1>
              <p className="mb-6 text-base text-[#283618] sm:text-lg">
                Welcome to ForestForecast, a cutting-edge project dedicated to
                predicting deforestation using advanced image processing and
                machine learning techniques. Our goal is to provide accurate and
                actionable insights to help preserve our planet's forests.
              </p>
              <h2 className="mb-4 text-2xl font-semibold text-[#606C38] sm:text-3xl">
                Our Mission
              </h2>
              <p className="mb-6 text-base text-[#283618] sm:text-lg">
                Our mission is to leverage technology to combat deforestation
                and promote sustainable forest management. By providing reliable
                data and predictions, we aim to empower conservation efforts and
                inform policy decisions.
              </p>
              <h2 className="mb-4 text-2xl font-semibold text-[#606C38] sm:text-3xl">
                Meet the Team
              </h2>
              <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-[#283618] sm:text-2xl">
                    <a
                      href="https://www.linkedin.com/in/jos%C3%A9-mar%C3%ADa-soto-valenzuela-070a2626b/"
                      className="text-[#283618] underline"
                    >
                      José María
                    </a>
                  </h3>
                  <p className="text-base text-[#283618] sm:text-lg">
                    Software Engineer
                  </p>
                  <p className="text-sm text-[#283618] sm:text-base">
                    Hey guys I am José, but feel free to call me Chema. I am a
                    software engineer with a passion for crafting a better
                    world. I am a mathematics and data science enthusiast.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#283618] sm:text-2xl">
                    <a
                      href="https://www.linkedin.com/in/yairsalvador"
                      className="text-[#283618] underline"
                    >
                      Yair Salvador
                    </a>
                  </h3>
                  <p className="text-base text-[#283618] sm:text-lg">
                    Software Engineer
                  </p>
                  <p className="text-sm text-[#283618] sm:text-base">
                    Yair specializes in image processing and web development,
                    driven by a passion for sustainability and innovation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#283618] sm:text-2xl">
                    <a
                      href="https://www.linkedin.com/in/danielbarreras"
                      className="text-[#283618] underline"
                    >
                      Daniel Barreras
                    </a>
                  </h3>
                  <p className="text-base text-[#283618] sm:text-lg">
                    Software Engineer
                  </p>
                  <p className="text-sm text-[#283618] sm:text-base">
                    Daniel is a data science expert focused on creating
                    predictive models to address environmental challenges.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#283618] sm:text-2xl">
                    <a
                      href="https://www.linkedin.com/in/axelgutierrez"
                      className="text-[#283618] underline"
                    >
                      Axel Gutierrez
                    </a>
                  </h3>
                  <p className="text-base text-[#283618] sm:text-lg">
                    Software Engineer
                  </p>
                  <p className="text-sm text-[#283618] sm:text-base">
                    Axel is a skilled software engineer with a strong background
                    in developing scalable applications for environmental
                    monitoring.
                  </p>
                </div>
              </div>
              <h2 className="mb-4 text-2xl font-semibold text-[#606C38] sm:text-3xl">
                Join Us
              </h2>
              <p className="mb-6 text-base text-[#283618] sm:text-lg">
                We are always looking for passionate individuals to join our
                team. If you are interested in contributing to our mission,
                please get in touch with us.
              </p>
              <a
                href="/contact"
                className="text-base font-semibold text-[#606C38] underline sm:text-lg"
              >
                Contact Us
              </a>
              <div className="mt-6">
                <a
                  href="https://github.com/FerretScript"
                  className="text-3xl text-[#283618] sm:text-4xl"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
