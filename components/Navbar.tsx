"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul
        className={`lg:flex flex-col lg:flex-row lg:h-full gap-12 ${
          isOpen ? "flex" : "hidden"
        } lg:static absolute top-full left-0 w-full bg-gray-800 p-4 lg:bg-transparent lg:p-0 transition-all duration-300`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      >
        <Image
          src={isOpen ? "/x.png" : "/menu.svg"}
          alt="menu"
          width={32}
          height={32}
        />
      </div>
    </nav>
  );
};

export default Navbar;
