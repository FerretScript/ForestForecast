import Header from "/Users/chema./Documents/Programming/GuadaHack/webApp/ForestForecast/src/Components/Header.tsx";

export default function Hero() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
      <Header />
      <div className="relative flex h-full w-full items-center justify-center pb-28">
        <div className="absolute left-0 top-0 -z-10 h-[60rem] w-screen bg-[#606C38] heropattern-topography-dgreen/35" />
      </div>
    </div>
  );
}
