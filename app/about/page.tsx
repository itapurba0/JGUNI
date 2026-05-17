"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from '../components/AboutSection';
import faculty from '../../data/faculty.json';
import campus from '../../data/campus_images.json';
import Image from 'next/image';

const AboutPage = () => {
    const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    return (
        <main className="bg-transparent">
            <AboutSection />

            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Faculty</h2>
                <p className="text-slate-600 mb-6">At JG University we pride ourselves on a diverse faculty of practitioners, researchers and industry leaders who teach and mentor our students.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {faculty.map((f: any, i: number) => (
                        <motion.div key={i} whileHover={{ y: -6 }} className={`p-4 bg-white/80 backdrop-blur-sm rounded-3xl ${extrude} flex items-center gap-4`}>
                            <div className="w-16 h-16 rounded-full overflow-hidden relative">
                                <Image src={f.image || campus[i % campus.length]?.image || campus[0].image} alt={f.name} fill sizes="64px" unoptimized className="object-cover" />
                            </div>
                            <div>
                                <div className="font-semibold">{f.name}</div>
                                <div className="text-sm text-slate-500">{f.title} — {f.school}</div>
                                <div className="text-sm text-slate-600 mt-1">{f.research?.slice(0, 80)}{f.research && f.research.length > 80 ? '…' : ''}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Campus Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {campus.map((c: any, i: number) => (
                        <motion.img key={i} src={c.image} alt={`campus-${i}`} whileHover={{ scale: 1.03 }} className="rounded-2xl w-full h-40 object-cover shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]" />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
