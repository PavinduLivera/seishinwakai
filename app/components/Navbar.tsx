"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaUserPlus, FaFacebook, FaTrophy } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image"; // Image component එක import කරන්න

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dojos", href: "/dojos" },
    { name: "About", href: "/about" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section - නම අයින් කර Logo එක පමණක් දමා ඇත */}
          <Link href="/" className="flex items-center h-full">
            <div className="relative w-32 h-16 md:w-50 md:h-20 transition-transform hover:scale-105">
              <Image 
                src="/seishinwakai-black.png" 
                alt="Seishinwakai Logo"
                fill
                className="object-contain object-left" // Logo එක වම් පැත්තට align කරලා සම්පූර්ණයෙන් පේන්න හදනවා
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-bold text-dojo-black uppercase text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-dojo-green transition-colors flex items-center gap-1.5"
              >
                {link.name === "Achievements" && <FaTrophy className="text-amber-500 text-xs" />}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Social */}
          <div className="hidden md:flex items-center gap-5">
             <a 
               href="https://www.facebook.com/share/1UFY58CwQh/" 
               target="_blank" 
               className="text-[#1877F2] text-xl hover:scale-125 transition-transform"
             >
               <FaFacebook />
             </a>
             <button className="bg-dojo-green hover:bg-dojo-black text-white px-6 py-2.5 rounded font-black text-xs flex items-center gap-2 transition-all shadow-lg hover:shadow-red-200">
               <FaUserPlus /> JOIN NOW
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dojo-black text-2xl focus:outline-none p-2"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden absolute w-full bg-white border-b-8 border-dojo-green shadow-2xl transition-all duration-500 ease-in-out ${
          isOpen ? "top-20 opacity-100 visible" : "top-[-500px] opacity-0 invisible"
        }`}
      >
        <div className="px-8 py-10 space-y-6 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-black text-dojo-black uppercase hover:text-dojo-red transition-colors flex items-center gap-2"
            >
              {link.name === "Achievements" && <FaTrophy className="text-amber-500" />}
              {link.name}
            </Link>
          ))}
          <div className="w-full pt-4 border-t border-gray-100 flex flex-col items-center gap-6">
            <button className="w-full bg-dojo-green text-white py-4 rounded-xl font-black flex justify-center items-center gap-2 shadow-lg active:scale-95 transition-transform">
              <FaUserPlus /> JOIN NOW
            </button>
            <a href="https://facebook.com" className="text-[#1877F2] text-3xl">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}