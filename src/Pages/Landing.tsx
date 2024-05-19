import Header from "/Users/chema./Documents/Programming/GuadaHack/webApp/ForestForecast/src/Components/Header.tsx";

export default function AboutUs() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
      <Header />
      <div className="relative flex h-full w-full items-center justify-center pb-28">
        <div className="absolute left-0 top-0 -z-10 h-[60rem] w-screen bg-[#606C38] heropattern-topography-dgreen/35" />
        <div className="relative z-10 max-w-4xl rounded-lg bg-white p-10 shadow-lg">
          <h1 className="mb-4 text-4xl font-bold text-[#283618]">About Us</h1>
          <p className="mb-6 text-lg text-[#283618]">
            Welcome to ForestForecast, a cutting-edge project dedicated to
            predicting deforestation using advanced image processing and machine
            learning techniques. Our goal is to provide accurate and actionable
            insights to help preserve our planet's forests.
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-[#606C38]">
            Our Mission
          </h2>
          <p className="mb-6 text-lg text-[#283618]">
            Our mission is to leverage technology to combat deforestation and
            promote sustainable forest management. By providing reliable data
            and predictions, we aim to empower conservation efforts and inform
            policy decisions.
          </p>
          <h2 className="mb-4 text-3xl font-semibold text-[#606C38]">
            Meet the Team
          </h2>
          <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-[#283618]">
                John Doe
              </h3>
              <p className="text-lg text-[#283618]">Project Lead</p>
              <p className="text-[#283618]">
                John is a seasoned expert in machine learning and environmental
                science with over a decade of experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#283618]">
                Jane Smith
              </h3>
              <p className="text-lg text-[#283618]">Lead Developer</p>
              <p className="text-[#283618]">
                Jane is a software engineer specializing in image processing and
                web development, passionate about sustainability.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
          <h2 className="mb-4 text-3xl font-semibold text-[#606C38]">
            Join Us
          </h2>
          <p className="mb-6 text-lg text-[#283618]">
            We are always looking for passionate individuals to join our team.
            If you are interested in contributing to our mission, please get in
            touch with us.
          </p>
          <a
            href="/contact"
            className="text-lg font-semibold text-[#606C38] underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
