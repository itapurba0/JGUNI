"use client";

import React from "react";
import { Laptop, Users, BookOpen, ShieldCheck, FlaskRound, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const schools = [
    { title: "School of Technology", icon: <Laptop className="w-6 h-6 text-red-700" />, desc: "Engineering, Computer Science & Data." },
    { title: "School of Management", icon: <Users className="w-6 h-6 text-red-700" />, desc: "Business, Finance & Leadership." },
    { title: "School of Humanities", icon: <BookOpen className="w-6 h-6 text-red-700" />, desc: "Arts, Design & Social Sciences." },
    { title: "School of Law", icon: <ShieldCheck className="w-6 h-6 text-red-700" />, desc: "Legal studies and policy." },
    { title: "Cyber Security", icon: <ShieldCheck className="w-6 h-6 text-red-700" />, desc: "Security, Forensics & Risk." },
    { title: "Applied Sciences", icon: <FlaskRound className="w-6 h-6 text-red-700" />, desc: "Research and applied labs." },
    { title: "Design & Innovation", icon: <PenTool className="w-6 h-6 text-red-700" />, desc: "Product, UX and creative tech." },
];

export default function ProgramsSection() {
    return (
        <section id="programmes" aria-label="Programs and schools" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-3xl font-bold text-center text-slate-900">Programs & Schools</h2>
                <p className="text-center text-slate-600 mt-2">Explore our major schools and flagship programmes.</p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {schools.map((s, i) => (
                        <motion.div
                            key={s.title}
                            className="p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)] transform-gpu transition"
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-red-50 rounded-xl">{s.icon}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900">{s.title}</h3>
                                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}