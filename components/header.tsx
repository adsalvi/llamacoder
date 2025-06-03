
import Image from "next/image";

import GithubIcon from "@/components/icons/github-icon";
import logo from "@/public/drope-logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mx-auto flex w-full shrink-0 items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center">
        <Image
          src={logo}
          alt="Drope AI"
          width={40}
          height={40}
          quality={100}
          className="h-10 w-10 object-contain"
          priority
        />
        <span className="ml-3 text-xl font-bold text-gray-900">drope AI</span>
      </Link>
    </header>
  );
}
