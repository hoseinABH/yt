import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <span className="font-bold text-sm text-nowrap text-white bg-lime-600 px-1 w-full rounded-md">
        PLAYGROUND
      </span>
    </Link>
  );
}
