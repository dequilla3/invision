"use client";

import { useState } from "react";

interface NavbarProps {
  items: NavLinks[];
}
export default function Navbar({ items }: NavbarProps) {
  const [navLinks, setNavLinks] = useState<NavLinks[]>(items);
  const handleClick = (index: number) => {
    const updatedNavLinks = navLinks.map((link, i) => ({
      ...link,
      isActive: i === index ? true : false,
    }));
    setNavLinks(updatedNavLinks);
  };
  return (
    <div className="shadow-md p-4">
      <div className="ml-60 mr-40">
        <nav className="flex ">
          <a href="#" className="font-semibold text-xl">
            <div className="flex">
              <div className="flex mr-2">
                <div className="bg-green-700 w-6 h-6 rotate-45 translate-x-1"/>
                <div className="bg-sky-700 w-6 h-6 rotate-45 tr" />
              </div>
              Brand
            </div>
          </a>
          <ul className="flex ml-10">
            {navLinks.map((val, index) => (
              <li
                key={index}
                className={`ml-10 cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-green-700 origin-center ${
                  val.isActive ? "border-b-2 border-green-700" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {val.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
