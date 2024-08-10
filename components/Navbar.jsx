import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-headerBg text-white flex items-center justify-center space-x-72 py-5">
      <div>
        <Link href={"/"}>Raja Taha</Link>
      </div>
      <nav className="space-x-20">
        <Link href={"/"}>Home</Link>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#contact"}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
