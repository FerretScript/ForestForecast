import { Link } from "wouter";
import { TreePine } from "lucide-react";

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string,
) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  return (
    <nav className="min-w-screen flex h-[4.375rem] w-full items-center justify-between scroll-smooth border-b-2 border-dgreen bg-lgreen">
      <Link href="/">
        <a className="flex aspect-square h-full items-center justify-center p-4">
          <TreePine size={34} className="fill-primary stroke-primary" />
        </a>
      </Link>
      <div className="flex h-full w-fit items-center justify-center">
        <a
          href="#aboutus"
          className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl"
        >
          ABOUT US
        </a>
        <Link href="/simulator">
          <a className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl">
            SIMULATOR
          </a>
        </Link>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="cursor-pointer px-4 font-serif text-lg font-bold text-primary lg:text-xl"
        >
          CONTACT US
        </a>
      </div>
      <div className="hidden lg:block"></div>
    </nav>
  );
}
