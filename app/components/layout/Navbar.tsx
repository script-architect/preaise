"use client"; // it tells Next.js that this is an interactive user component

import Link from "next/link";
import {useEffect , useState} from "react";

export default function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            root.classList.add("dark");
            setIsDarkMode(true);
        }
    };
    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md text-white">
           <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           {/* Logo Area - Preaise Technologies */}
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Minimalist P logo box */}
                        <div className="w-10 h-10 bg-white text-black font-extrabold flex items-center justify-center text-xl rounded-md transition-tranform group-hover:scale-105">
                            P
                        </div>
                        <span className="font-bold tracking-wider text-xl uppercase">
                            Preaise
                        </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
                    <a href="/#services" className="hover:text-white transition-colors">Services</a>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <a href="/#about" className="hover:text-white transition-colors">About</a>
                </div>

                {/* Interactive Light/Dark Mode Swither */}
                <div className="flex items-center gap-4">
                    <button 
                        type="button"
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs font-bold tracking-widest uppercase cursor-pointer"
                    >
                        {isDarkMode ? "☀️ Light" : "🌙 Dark"}
                    </button>
                </div>


                {/* Action Button (Premium Call to Action) */}
                <div>
                    <a
                      href="#contact"
                      className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-gray-200 transition-all shadow-sm">
                        Let's Talk
                      </a>
                </div>
                
           </div> 
        </nav>
    );
}