"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Aanbod", path: "/aanbod" },
  { name: "Waardebepaling", path: "/waardebepaling" },
  { name: "Taxeren", path: "/taxeren" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.jpeg"
              alt="Logo"
              width={140}
              height={70}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 text-[15px] font-semibold text-[#07076D]">
            {navLinks.map((link) => (
              <li key={link.name} className="group relative">
                <Link
                  href={link.path}
                  className="transition-colors duration-300 group-hover:text-[#07C907]"
                >
                  {link.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 origin-left bg-[#07C907] transition-transform duration-300 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4 text-[#07076D]">
          <a href="#" aria-label="Facebook">
            <Facebook className="hover:text-[#1877F2] transition duration-200 cursor-pointer" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="hover:text-[#C13584] transition duration-200 cursor-pointer" />
          </a>
          <a href="mailto:info@example.com" aria-label="Email">
            <Mail className="hover:text-[#EA4335] transition duration-200 cursor-pointer" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-[#07076D]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow px-6 py-5 space-y-6 text-[#07076D] transition-all duration-300">
          <ul className="space-y-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="block hover:text-[#07C907] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 pt-4 border-t pt-5 text-[#07076D]">
            <a href="#" aria-label="Facebook">
              <Facebook className="hover:text-[#1877F2] transition duration-200 cursor-pointer" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="hover:text-[#C13584] transition duration-200 cursor-pointer" />
            </a>
            <a href="mailto:info@example.com" aria-label="Email">
              <Mail className="hover:text-[#EA4335] transition duration-200 cursor-pointer" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
