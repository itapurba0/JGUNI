"use client";

import React from 'react';
import { motion } from 'framer-motion';
import collaborations from '../../data/collaborations.json';
import faculty from '../../data/faculty.json';

export default function ResearchPage() {
    const extrude = "shadow-[9px_9px_16px_rgba(245, 167, 115, 0.8),-9px_-9px_16px_rgba(255, 139, 81, 0.8)]";
    return (
        <main className="bg-transparent py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-bold mb-4 text-slate-800">Research</h1>
                <p className="text-slate-600 mb-8">Our research centers, labs, and initiatives drive innovation across data science, engineering, public policy and entrepreneurship.</p>

                <section className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-slate-800">Collaborations & Centers</h2>
                        <p className="text-sm text-slate-600 mb-4">JG University partners with international universities and industry to power translational research and student exchange.</p>
                        {collaborations.map((c: any, i: number) => (
                            <motion.div key={i} whileHover={{ scale: 1.01 }} className={`p-4 bg-white/80 backdrop-blur-sm rounded-3xl ${extrude} mb-3`}>
                                <div className="font-medium">{c.school}</div>
                                <div className="text-sm text-slate-600 mt-1">Programs: {c.programs.join(', ')}</div>
                                <div className="text-xs text-slate-400 mt-1">Contact: {c.contact || 'contact@jguni.edu'}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-slate-800">Research Faculty</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {faculty.map((f: any, i: number) => (
                                <motion.div key={i} whileHover={{ x: 6 }} className={`p-3 bg-white/80 backdrop-blur-sm rounded-3xl ${extrude} flex items-center gap-4`}>
                                    <img src={f.image} alt={f.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <div className="font-medium">{f.name}</div>
                                        <div className="text-sm text-slate-500">{f.title} — {f.school}</div>
                                        <div className="text-xs text-slate-400">Research areas: {f.research?.slice(0, 60)}{f.research && f.research.length > 60 ? '…' : ''}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
