"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import menuOpenIcon from "@/public/icons/menu-open.svg";
import menuCloseIcon from "@/public/icons/menu-close.svg";
import Nav from "./Nav";

export default function Header() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  return (
    <header className="fixed w-full shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] bg-white landscape:px-11">
      {/* Navbar */}
      <div className="px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-passion-one inline-block self-center text-2xl"
        >
          DETECT<span className="text-[#00C141]">X</span>
        </Link>
        {/* Desktop Nav Links (Hidden on mobile) */}
        <Nav display="hidden landscape:block" />
        {/* Mobile Nav Button (Hidden on desktop) */}
        <Image
          src={isNavMenuOpen ? menuCloseIcon : menuOpenIcon}
          alt={isNavMenuOpen ? "Close menu" : "Open menu"}
          className="cursor-pointer landscape:hidden"
          onClick={() => setIsNavMenuOpen((prevState) => !prevState)}
        />
      </div>
      {/* Mobile Nav Menu (Hidden on desktop) */}
      {isNavMenuOpen && <Nav display="landscape:hidden" />}
    </header>
  );
}
