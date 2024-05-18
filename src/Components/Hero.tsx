import { Link } from "wouter";
import Header from "./Header";

export default function Hero() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
      <Header />
      <div className="relative flex h-full w-full items-center justify-center pb-28">
        <div className="absolute left-0 top-0 -z-10 h-[60rem] w-screen bg-[#606C38] heropattern-topography-dgreen/35" />
        <div className="z-0 -mr-10 flex h-[37rem] w-fit flex-col items-center justify-start rounded-bl-[4rem] rounded-tr-[4rem] bg-white p-10 pr-20 text-[7rem] font-[500]">
          <div className="block text-left font-serif tracking-tight text-dgreen">
            Forecasting the <br /> Future of{" "}
            <span className="inline text-lgreen">Forests</span>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <Link
              href="/simulator"
              className="rounded-3xl bg-lgreen px-5 flex items-center justify-center hover:scale-105 transition-all duration-200 text-center text-[4rem] tracking-wide"
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
    </div>
  );
}
