import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';

const url = "http://localhost:3000/courses";

function Lenguech() {
    const [prod, setProd] = useState(null);
    const { id } = useParams();

    async function get() {
        try {
            const { data } = await axios.get(`${url}/${id}`);
            setProd(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        get();
    }, [id]);

    if (!prod) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="text-blue-400 text-xl animate-pulse font-mono tracking-widest">LOADING...</div>
            </div>  
        );
    }

    return (
        <div className="min-h-screen w-full bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,58,138,0.5),rgba(255,255,255,0))] text-white font-sans selection:bg-blue-500/30">
            <div className="max-w-[1240px] m-auto px-6 py-10">
                
                <nav className="flex items-center gap-3 text-sm text-slate-400 mb-16 bg-slate-900/40 w-fit px-4 py-2 rounded-full border border-slate-800">
                    <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                    <span className="opacity-30">/</span>
                    <span className="text-slate-200">{prod.title}</span>
                </nav>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-24">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="inline-block px-4 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest mb-6">
                            {prod.category}
                        </div>
                        <h1 className="text-7xl font-black mb-8 tracking-tighter leading-none">
                            {prod.title}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
                            {prod.description}. Master the industry-standard tools and build a professional portfolio that stands out.
                        </p>
                        <button 
                            className="group flex items-center gap-4 px-10 py-5 rounded-2xl font-black transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-blue-500/20"
                            style={{ backgroundColor: prod.style.main, color: '#000' }}
                        >
                            ENROLL IN COURSE
                            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    <div className="relative order-1 lg:order-2 flex justify-center">
                        <div 
                            className="absolute inset-0 blur-[120px] opacity-30 animate-pulse"
                            style={{ backgroundColor: prod.style.main }}
                        ></div>
                        <div className="relative bg-slate-900/50 backdrop-blur-xl p-12 rounded-[50px] border border-slate-800 shadow-2xl">
                            <img 
                                src={prod.image_url} 
                                alt="" 
                                className="w-72 h-72 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {[
                        { icon: "📅", label: "Start Date", val: "5 April" },
                        { icon: "🕒", label: "Schedule", val: "6 classes/week" },
                        { icon: "💼", label: "Projects", val: "3 Portfolio pieces" },
                        { icon: "👥", label: "Capacity", val: "10-12 people" },
                        { icon: "🔥", label: "Availability", val: "8 seats left" },
                        { icon: "📜", label: "Award", val: "Official Certificate" }
                    ].map((item, i) => (
                        <div key={i} className="group bg-slate-900/30 p-6 rounded-3xl border border-slate-800/50 hover:border-slate-700 transition-colors">
                            <div className="flex items-center gap-5">
                                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
                                    <p className="text-lg text-slate-200 font-semibold">{item.val}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900/40 backdrop-blur-md rounded-[40px] p-12 border border-slate-800/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold mb-8">Why <span style={{ color: prod.style.main }}>{prod.title}</span>?</h2>
                        <p className="text-slate-400 text-xl leading-relaxed max-w-4xl font-light">
                            {prod.info || "Dive deep into the core principles of this technology. This course is designed to take you from basics to professional proficiency through hands-on practice and real-world scenarios."}
                        </p>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
                </div>

            </div>
        </div>
    );
}

export default Lenguech;