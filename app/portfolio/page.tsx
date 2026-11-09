"use client";

import Link from "next/link";

export default function PortfolioPage() {
    const projects = [
        {
            title: "Monvael OS",
            subtitle: "Free Expense Tracker & Startup Burn Rate Engine",
            desc: "A localized startup burn rate tracker, micro-budget metrics engine, and optimized office expense CSV export database. Built with clean component architectures running pure local storage compliance.",
            tech: ["Vanilla JavaScript", "Tailwind CSS", "Local Storage Metrics", "CSV Database Matrix"],
            liveUrl: "https://monvael.in"
        },
        {
            title: "Login Computer",
            subtitle: "Digital Service Center & Academic Automation Hub",
            desc: "Designed and engineered a fully responsive platform for a local digital hub featuring automated online ordering system setups, technical On-Page SEO execution achieving Top 3 Google Search rankings.",
            tech: ["HTML5", "CSS3", "JavaScript", "DNS Mapping", "Vercel Production"],
            liveUrl: "https://logincomputer.in"
        },
        {
            title: "WeatherFlight-Pro",
            subtitle: "Dynamic Weather Analaytics & Flight Path Sentinel",
            desc: "A high-performance real-time weather monitoring portal integrating asynchronous third-party weather APIs and Interactive Map layers including elevation grids, satellite orbits, and location tracking via Geocoding.",
            tech: ["Vanilla JavaScript", "Tailwind CSS", "REST API Integration", "Reverse Geocoding Layer"],
            liveUrl: "https://weatherflight-pro.vercel.app"
        }
    ];

    const technicalBreakdowns = [
        {
            title: "Why Distributed Streaming Overpowers Direct HTTP",
            concept: "Apache Kafka Event Grid Architecture",
            problem: "Traditional service-to-service REST mapping creates hard coupling and blocking request-response cycles during data spikes.",
            solution: "Implemented Apache Kafka (KRaft standalone) to segregate telemetry producers from downstream consumers. This introduced asynchronous data processing pipelines, ensuring 0% gateway message drops under peak multi-client simulated loads.",
            impact: "Decoupled service runtimes with resilient fault-tolerant request queue."
        },
        {
            title: "Mitigating Relational DB Latency in High-Read Grids",
            concept: "Redis Memory Cache Layer Integration",
            problem: "Repeated entity fetching and complex SQL joins create massive disk I/O bottlenecks and scale limitations.",
            solution: "Injected Redis as an in-memory transactional cache layer operating above PostgreSQL/MySQL. Coupled with optimal index optimization and structured Hibernate association tuning, this avoided repetitive query operations on fast-read pathways.",
            impact: "Reduced absolute database response overhead by up to 40% globally."
        },
        {
            title: "Decentralized Routing vs Rigid Monolithic Gateways",
            concept: "Spring Cloud Gateway & Eureka Ecosystem",
            problem: "Hardcoded backend endpoint routing scales horribly and presents a single point of failure in microservice grids.",
            solution: "Deployed Spring Cloud Gateway paired with Netflix Eureka Service Discovery for adaptive cluster routing, authorization validation, and clean runtime exception handling. Isolated responsibilities via type-safe DTO data boundaries.",
            impact: "Dynamic load balancing with completely transparent microservice boundaries."
        }
    ];
    return (
        <div className="bg-black text-white min-h-screen pt-24 pb-20 selection:bg-brand-accent selection:text-white">

            {/* Header */}
            <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-start gap-4">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">
                    Case Studies
                </span>
                <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] max-w-4xl">
                 Our Production <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-brand-accent">
                 Proven Work.
                 </span>   
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl font-light mt-2 leading-relaxed">
                    Explore Preaise Technologies' definitive engineering framework through client platforms deployed for absolute scalability and performance.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group border border-white/10 bg-white/[0.01] p-8 rounded-xl hover:bg-white/[0.03] hover:border-brand-accent/40 transition-all duration-300 flex flex-col justify-between min-h-[380px] shadow-2xl relative overflow-hidden"
                        >
                            {/*Dynamic subtle accent background dot on hover*/}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            <div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-brand-accent transition-colors">
                                       {project.title} 
                                    </h3>
                                    <span className="text-xs font-semibold text-gray-400 tracking-wide">
                                        {project.subtitle}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-400 mt-6 leading-relaxed font-light">
                                    {project.desc}
                                </p>

                                {/* Tech pills matrix */}
                                <div className="flex flex-wrap gap-2 mt-6">
                                    {project.tech.map((t, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 rounded text-gray-400"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                            </div>

                            {/* Action Trigger Butto */}
                            <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between">
                                <span className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors">
                                    Production Active
                                </span>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-white text-black px-4 py-2.5 rounded hover:bg-gray-200 transition-all shadow-md"
                                >
                                    Launch App <span className="text-sm">↗</span>
                                </a>    
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ENterprise Architecture Case studies Grid */}
            <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-accent">
                        Deep-Dive Systems
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mt-1 text-white">
                        Architecture Breakdowns 
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technicalBreakdowns.map((tech, index) => (
                        <div 
                            key={index}
                            className="bg-white/[0.01] border border-white/5 p-6 rounded-lg hover:border-brand-accent/20 transition-all flex flex-col justify-between"
                        >
                        <div>
                            <span className="text-[10px] font-mono tracking-wider text-brand-accent uppercase bg-brand-accent/5 px-2 py-0.5 rounded border border-brand-accent/10">
                                {tech.concept}
                            </span>
                            <h3 className="text-lg font-bold uppercase tracking-tight text-white mt-4 leading-snug">
                                {tech.title}
                            </h3>

                            <div className="mt-4 space-y-3 text-xs">
                                <p className="text-gray-500 font-light">
                                    <strong className="text-gray-400 block font-semibold uppercase mb-1"> The Bottleneck </strong> {tech.problem} 
                                </p>
                                <p className="text-gray-400 font-light leading-relaxed">
                                    <strong className="text-brand-accent block font-semibold uppercase mb-1"> The Engineering Fix:</strong> {tech.solution}
                                </p>
                            </div>
                        </div>

                            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 font-medium">
                                <span className="text-white">System Impact:</span> {tech.impact}
                            </div>
                        </div> 
                    ))}
                </div>
            </section>
        </div>

    );
}