"use client";
import Link from "next/link";

import {useEffect , useState } from "react";

    // 25 Elite International Currencies and their Symbols Mapping
    const currencySymbols: Record<string, string> = {
    USD: "$", INR: "₹", EUR: "€", GBP: "£", AED: "د.إ",
    AUD: "A$", CAD: "C$", SGD: "S$", JPY: "¥", CNY: "¥",
    SAR: "ر.س", QAR: "ر.ق", KWD: "د.ك", OMR: "ر.ع", BHD: ".د.ب",
    CHF: "CHF", NZD: "NZ$", HKD: "HK$", MYR: "RM", THB: "฿",
    ZAR: "R", BRL: "R$", RUB: "₽", KRW: "₩", TRY: "₺"
    };

  export default function HomePage() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Website Development",
    currency: "USD", 
    budget: "",    
    });


  const divisions = [
      {
        title: "Enterprise Software",
        desc: "Architecting custom, secure, and higly scalable software solutions built for complex corporate operations.",
        tag: "Build"
      },
      {
        title: "Website Development",
        desc: "Building fast, high-performance, and beautiful websites using modern web engineer standards.",
        tag: "Build"
      },
      {
        title: "SEO Optimization",
        desc: "Optimizing your code, content, and architecture to rank at the top of search engine result pages.",
        tag:  "Grow"
      },
      {
        title: "Marketing Website Solutions",
        desc: "Creating high-converting landing pages and business sites tailored to generate leads and sales.",
        tag: "Grow"
      },
      {
        title: "Quality Assurance",
        desc: "Rigorous automation testing, performance benchmarking, and security audits to guarantee flawless code.",
        tag: "Test"
      },
      {
        title: "Web Tools Integration",
        desc: "Setting up Google Search Console, tracking scripts, and deep website analaytics for full data control.",
        tag: "Test"
      },
      {
        title: "Chatbot & Automation Setup",
        desc : "Integrating smart interactive chat tools to automate customer communication 24/7.",
        tag: "Build"
      }
    ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-brand-accent selection:text-white">

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-30 pb-20 md:pt-25 md:pb-27 flex flex-col items-start gap-8">

        {/* Subtle Tech Badge */}
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-400">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            End-to-End Technology Solution Partner
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.95] max-w-5xl uppercase">
                We Build. <br />
                We Test. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-brand-accent">
                We Grow. 
            </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
          Preaise Technologies crafts elite digital infrastructure, enterprise software, and high-performance applications for industry leaders.
        </p>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <a 
              href="#services"
              className="w-full sm:w-auto text-center bg-brand-accent text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto text-center border border-white/20 text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-md hover:bg-white/10 transition-all"
            > 
              Contact Us
            </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/10 scroll-mt-24">
      
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3">Core Competencies</h2>
          <p className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">Our Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((items, index) => (
            <div key={index} className="group relative border border-white/10 bg-white/[0.02] p-8 rounded-lg hover:bg-white/[0.05] transition-all flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="inline-block text-[10px] font-bold tracking-widest uppercase border border-white/10 px-2 py-0.5 rounded text-gray-500">
                  {items.tag}
                </span>
                <h3 className="text-xl font-bold tracking-tight uppercase mt-6 text-white">
                   {items.title}
                </h3>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed font-light">
                  {items.desc}
                </p>
              </div> 
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/10 scroll-mt-24">
      
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Intensity and Brand Philosphy*/}
            <div className="flex flex-col gap-6">
               <h2 className="text-xs font-bold tracking-widest uppercase text-brand-accent">
                The Origin Story
               </h2>
               <p className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-[0.95]">
                Engieered for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-brand-accent">
                 Absolute Precision. 
                </span>
               </p>
               <p className="text-lg text-gray-400 font-light leading-relaxed mt-4">
                  Forged at the intersection of <span className="text-white font-semibold tracking-wider">linguistic heritage</span> and <span className="text-brand-accent font-semibold">computational engineering</span>, PREAISE structurally bisects its core identity into proactive execution ("Pre-") and frictionless freedom of action ("Aise"). We engineer a definitive paradigm shift in enterprise architecture, resolving the ultimate technology paradox: deploying hardened, mathematically exact backend infrastructure that delivers absolute, human-centric simplicity for the end-user.
               </p>
               <p className="text-base text-gray-500 leading-relaxed font-light">
                We founded Preaise Technologies with a singular, rigid vision: to transform complex operational bottlenecks into sleek, un-bottlenecked enterprise systems. Every script we write, every architecture we design, and every script we test is calibrated for maximum velocity and scale. 
               </p>
            </div>

            {/* BIG-LEVEL tech stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:mt-12">

              <div className="border border-white/5 bg-white/[0.01] p-8 rounded-lg hover:border-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">Root Paradigm</span>
                <h4 className="text-xl font-bold uppercase mt-4 text-white">The Solution</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  Inspired by absolute execution metrics. We eliminate architectural lag and build pristine digital systems that dominate market space.
                </p>
              </div>

              <div className="border border-white/5 bg-white/[0.01] p-8 rounded-lg hover:border-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">Our Standard</span>
                <h4 className="text-xl font-bold uppercase mt-4 text-white">Zero Compromise</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  From full stack responsive architectures to rigid quality benchmarking, our solutions are engineered to grow with massive scale.
                </p>
              </div>

              <div className="border border-white/5 bg-white/[0.01] p-8 rounded-lg hover:border-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent ">The Protocol</span>
                <h4 className="text-xl font-bold uppercase mt-4 text-white">Build. Test. Grow.</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  A continuous development pipeline ensuring your platform is secure, optimized, and built to capture conversion analaytics.
                </p>
              </div>

              <div className="border border-white/5 bg-white/[0.01] p-8 rounded-lg hover:border-white/10 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">Global Network</span>
                <h4 className="text-xl font-bold uppercase mt-4 text-white">Elite Scale</h4>
                <p className="text-xs text-gray-400 mt-2 font-light leading-relaxed">
                  Serving international parameters with multi-currency dynamic architecture, powering platforms ready for world-class delivery.
                </p>
              </div>

            </div>
          </div>
      
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-3">Get In Touch</h2>
            <p className="text-3xl font-extrabold uppercase"> Let's Start Your Project</p>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">1. What service do you need help with?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-1">
                {[
                  "Website Development",
                  "SEO Optimization",
                  "Quality Assurance",
                  "Marketing Website Solutions",
                  "Web Tools Integration",
                  "Chatbot & Automation Setup"
                ].map((title) =>(
                  <button 
                  type="button"
                  key={title}
                  onClick={() => setFormData({ ...formData, category: title })}
                  className={`text-left p-4 rounded border text-[11px] font-semibold uppercase tracking-wider transition-all ${
                    formData.category === title
                    ? "bg-brand-accent border-brand-accent text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20" 
                  }`}
                >
                  {title}
                </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Full Name</label>
              <input type="text" placeholder="Rockson Dolie" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />  
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400"> Email Address</label>
              <input type="email" placeholder="dolieRockson@company.com" className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 my-2">

              {/* Currency Dropdown */}
              <div className="flex flex-col gap-2 md:w-1/3">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Choose Currency
                </label>
                <select
                value={formData.currency}
                onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                >
                  {Object.keys(currencySymbols).map((curr) => (
                    <option key={curr} value={curr} className="bg-black text-white">
                      {curr} ({currencySymbols[curr]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Dynamic Budget Input Box */}
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                   Estimated Project Budget ({formData.currency})
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-sm font-bold whitespace-nowrap mr-4 text-gray-500 select-none">
                    {currencySymbols[formData.currency]} 
                  </span>
                  <input 
                    type="number"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. 5000"
                    className="w-full bg-white/5 border border-white/10 rounded pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors"
                    
                    />
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Project Requirements</label>
              <textarea rows={4} placeholder="Tell us about what you want to build..." className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition-colors resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-white text-black font-bold text-xs uppercase tracking-widest py-4 rounded hover:bg-gray-200 transition-colors mt-2">
              Submit Message
            </button>
          </form>
      </section>
      

    </div> 
  
  );

}