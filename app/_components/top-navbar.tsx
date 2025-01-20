"use client";

import { Navbar, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function TopNavbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClicked = (Link: string) => {
    setActiveLink(Link);
  };

  return (
    <div className="relative flex w-full h-full justify-between text-white">
      <Navbar className="bg-black fixed justify-evenly w-full">
        <div className="flex items-center w-full">
          <p className="font-bold text-inherit">ACME</p>
        </div>
        <div className="flex justify-evenly h-full items-center w-full">
          <NavbarItem className="items-center justify-center flex w-full hover:bg-green-500 h-full">
            <Link
              onClick={() => handleLinkClicked("home")}
              className={`${
                activeLink === "home"
                  ? "border-b-2 border-red-500"
                  : "border border-none"
              } text-white `}
              href="http://localhost:3000/"
            >
              Home
            </Link>
          </NavbarItem>

          <NavbarItem
            onClick={() => handleLinkClicked("about")}
            className={`${
              activeLink === "about" ? "border-b-2 border-red-500" : ""
            } text-black items-center justify-center flex w-full hover:bg-green-500 h-full`}
          >
            <Link className="text-white hover:bg-green-500" href="/about">
              About
            </Link>
          </NavbarItem>

          <NavbarItem
            onClick={() => handleLinkClicked("tourist-spot")}
            className={`${
              activeLink === "tourist-spot" ? "border-b-2 border-red-500" : ""
            } text-black items-center justify-center flex w-full hover:bg-green-500 h-full`}
          >
            <Link
              className="text-white hover:bg-green-500"
              href="/tourist-spot"
            >
              Tourist Spot
            </Link>
          </NavbarItem>
        </div>
      </Navbar>
    </div>
  );
}
