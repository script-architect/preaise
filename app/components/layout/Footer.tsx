"use client";

import Link from "next/link";
import {useEffect , useState } from "react";

export default function Footer() {
   const [currentYear, setCurrentYear] = useState<number | string>("2026");

    // useEffect tab chalta hai jab component browser mein load (mount) ho jata hai
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
      <footer className="border-t border-white/10 bg-black text-white py-12 mt-20">
            {/* setting the grid locked along with the navbar by max-w-7xl*/}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Column 1 : Brand */}
                <div className="flex items-center gap-3 group" >
                    {/* Logo Box matching our Navbar style */}
                    <div className="w-8 h-8 bg-white text-black font-extrabold flex items-center justify-center text-lg rounded-md">
                       P 
                    </div>
                    <span className="font-bold tracking-wider text-l uppercase text-white">
                       Preaise 
                    </span>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                    End-to-End Technology Solutions Partner.
                </p>
                <span className="text-xs text-brand-accent tracking-widest uppercase font-semibold">
                    Build. Test. Grow.
                </span>
           

            {/* Column 2 : Quick Links */}
            <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
                    Navigation
                </h4>
                <ul className="flex flex-col gap-2 text-sm text-gray-400">
                    <li>
                        <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="hover:text-white transition-colors">Case Studies</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-white transition-colors">About Preaise</Link>
                    </li>
                </ul>
            </div>

            {/* COlumn 3 : AGency Motto / Footer Note */}
            <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-200">
                    Our Philosophy
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                    We don't just wride code . We engineer scalable digital infrastructure that powers enterprise growth.
                </p>
            </div>
        </div>

        {/* Bottom Copyright bar */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-12 pt-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} Preaise Technologies. All rights reserved.</p>
            <p className="tracking-wide"> Crafted for Excellence</p>
        </div>
      </footer>
    );
}