import Link from "next/link";
// Common components
import { Logo } from "./logo";

const navigation = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "about us",
    href: "/about-us",
  },
  {
    key: "contact us",
    href: "/contact-us",
  },
  {
    key: "products",
    href: "/products",
  },
];

export function Header() {
  return (
    <header className="py-4 border-b bg-gray-50 flex items-center">
      <nav className="container px-4 md:px-2 flex items-end justify-between mx-auto">
        <div className="space-y-3">
          <Logo />
          <ul className="flex items-center flex-wrap gap-3">
            {navigation.map((nav) => (
              <li key={nav.key}>
                <Link
                  href={nav.href}
                  className="hover:text-lime-600 text-sm font-bold transition-colors"
                >
                  {nav.key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-3 flex items-center">
          <input
            type="search"
            name="search"
            className="border-slate-400 hidden sm:block transition-all focus-within:border-lime-700 border outline-none h-6 rounded-md placeholder:text-sm px-2 text-sm"
            placeholder="Search what you want..."
          />
          <button className="border-lime-700 transition-colors text-lime-700 hover:bg-lime-700 border rounded-md px-4 font-bold hover:text-white h-6 text-xs">
            LOGIN
          </button>
        </div>
      </nav>
    </header>
  );
}
