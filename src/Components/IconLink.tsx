import { PropsWithChildren } from 'react'
import { Link } from 'wouter';

interface Props extends PropsWithChildren {
  href: string;
}

export default function IconLink({children, href}: Props) {
  return (
    <Link
      href={href}
      className="flex aspect-square w-full items-center justify-center rounded-2xl hover:cursor-pointer hover:bg-slate-300 md:p-5"
    >
      <a className="flex h-full w-full items-center justify-center ">
        {children}
      </a>
    </Link>
  );
}