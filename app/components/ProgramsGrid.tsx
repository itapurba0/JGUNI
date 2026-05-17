"use client";

import React from 'react';
import { BookOpen, Cpu, Heart, Globe, DollarSign, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const extrude = "shadow-[0_10px_30px_rgba(15,23,42,0.08)]";
const inset = "shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]";

const items = [
    { title: 'Computer Science', icon: <Cpu /> },
    { title: 'Business & Management', icon: <DollarSign /> },
    { title: 'Health Sciences', icon: <Heart /> },
    { title: 'Engineering', icon: <Layers /> },
    { title: 'Global Studies', icon: <Globe /> },
    { title: 'Humanities', icon: <BookOpen /> },
];

export default function ProgramsGrid() {
    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-slate-800">Programs & Schools</h2>
                <p className="text-slate-600 mt-2">Select from diverse programmes across schools.</p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((it) => (
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.995 }} key={it.title} className={`p-6 rounded-3xl bg-white/80 backdrop-blur-sm ${extrude} hover:${inset} active:${inset} transition-shadow duration-150`}>
                            <div className={`w-12 h-12 rounded-full ${inset} flex items-center justify-center bg-white/80 backdrop-blur-sm`}>
                                <div className="text-red-700">{it.icon}</div>
                            </div>
                            <div className="mt-4 font-semibold text-gray-800">{it.title}</div>
                            <div className="text-sm text-slate-600 mt-2">Short description about {it.title} programmes and career paths.</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
