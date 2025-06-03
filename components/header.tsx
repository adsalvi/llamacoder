
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative mx-auto flex w-full shrink-0 items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold text-gray-900">Drope AI</span>
      </Link>
    </header>
  );
}
