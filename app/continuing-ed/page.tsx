"use client";

import React from 'react';
import { motion } from 'framer-motion';
import programmes from '../../data/cleanedData.json';

export default function ContinuingEdPage() {
    const shortCourses = programmes.flatMap((s: any) => s.programs.filter((p: string) => p.toLowerCase().includes('certificate') || p.toLowerCase().includes('digital') || p.toLowerCase().includes('short'))).slice(0, 8);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
            <h1 className="text-3xl font-bold mb-4">Continuing Education</h1>
            <p className="text-slate-600 mb-6">Short courses, professional certificates, and lifelong learning opportunities designed for working professionals and career changers.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {shortCourses.map((s: string, i: number) => (
                    <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <div className="font-medium">{s}</div>
                        <div className="text-sm text-slate-500 mt-2">Typical duration: 6–12 weeks • Mode: Online / Blended</div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
