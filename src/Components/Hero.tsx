import { Link } from "wouter";
import Header from "./Header";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex w-screen flex-col items-center justify-start">
      <Header />
      <div className="relative flex h-screen w-full items-center justify-center pb-28">
        <div className="absolute left-0 top-0 -z-10 h-[60rem] w-screen bg-[#606C38] heropattern-topography-dgreen/35" />
        <div className="z-0 -mr-10 flex h-[37rem] w-fit flex-col items-center justify-start rounded-bl-[4rem] rounded-tr-[4rem] bg-white p-10 pr-20 text-[7rem] font-[500]">
          <div className="block text-left font-serif tracking-tight text-dgreen">
            Forecasting the <br /> Future of{" "}
            <span className="inline text-lgreen">Forests</span>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Link
              href="/simulator"
              className="flex items-center justify-center rounded-3xl bg-lgreen px-5 text-center text-[4rem] tracking-wide transition-all duration-200 hover:scale-105"
            >
              <a>Start</a>
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="forest"
          className="z-20 -ml-5 h-[33rem] w-[44rem] rounded-br-[4rem] rounded-tl-[4rem] object-cover"
        />
      </div>

      {/* About Us Section */}
      <div
        id="about-us"
        className="relative flex h-full w-full items-center justify-center pb-28"
      >
        <div className="relative z-10 max-w-4xl rounded-lg bg-white p-6 shadow-lg sm:p-10">
          <h1 className="mb-4 text-3xl font-bold text-[#283618] sm:text-4xl">
            About Us
          </h1>
          <p className="mb-6 text-base text-[#283618] sm:text-lg">
            Welcome to ForestForecast, a cutting-edge project dedicated to
            predicting deforestation using advanced image processing and machine
            learning techniques. Our goal is to provide accurate and actionable
            insights to help preserve our planet's forests.
          </p>
          <h2 className="mb-4 text-2xl font-semibold text-[#606C38] sm:text-3xl">
            Our Mission
          </h2>
          <p className="mb-6 text-base text-[#283618] sm:text-lg">
            Our mission is to leverage technology to combat deforestation and
            promote sustainable forest management. By providing reliable data
            and predictions, we aim to empower conservation efforts and inform
            policy decisions.
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
                software engineer with a passion for crafting a better world. I
                am a mathematics and data science enthusiast.
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
                Yair specializes in image processing and web development, driven
                by a passion for sustainability and innovation.
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
                Daniel is a data science expert focused on creating predictive
                models to address environmental challenges.
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
                Axel is a skilled software engineer with a strong background in
                developing scalable applications for environmental monitoring.
              </p>
            </div>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-[#606C38] sm:text-3xl">
            Join Us
          </h2>
          <p className="mb-6 text-base text-[#283618] sm:text-lg">
            We are always looking for passionate individuals to join our team.
            If you are interested in contributing to our mission, please get in
            touch with us.
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
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
