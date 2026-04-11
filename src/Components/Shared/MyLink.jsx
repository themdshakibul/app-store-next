"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <nav>
      <Link
        href={href}
        className={`pb-1 font-semibold ${pathName === href ? "border-b-2 border-purple-600  text-purple-600" : ""}`}
      >
        {children}
      </Link>
    </nav>
  );
};

export default MyLink;
