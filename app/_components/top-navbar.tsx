"use client";

import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { IoReorderThreeOutline, IoCloseOutline } from "react-icons/io5";
export default function TopNavbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const NavLinks = [
    {
      name: "Home",
      link: "/dasboard",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Tourist Spot",
      link: "/tourist-spot",
    },
  ];

  return (
    <div className="w-full h-16 relative justify-between text-white">
      <Navbar className="fixed bg-black ">
        <div className="flex items-center gap-10 w-full h-full">
          <div className="flex items-center justify-center h-full md:hidden">
            <IoReorderThreeOutline
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl"
            />
          </div>
          <p className="">CEBU</p>
        </div>

        <motion.div className="justify-evenly h-full items-center w-full hidden md:flex">
          {NavLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-full h-full"
            >
              <Link
                href={link.link}
                className={`${
                  activeLink === link.link
                    ? "border-b-2 border-green-500"
                    : "border-hidden border"
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Navbar>

      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-black bg-opacity-90 z-50 p-4 md:hidden">
          <div className="flex justify-end">
            <IoCloseOutline
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl cursor-pointer"
            />
          </div>
          <ul className="flex flex-col items-start text-white space-y-6">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.link}
                  className={`${
                    activeLink === link.link
                      ? "border-b-2 border-green-500"
                      : "border-hidden border"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
