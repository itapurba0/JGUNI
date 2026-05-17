"use client";

import React from 'react';
import { motion } from 'framer-motion';
import campus from '../../data/campus_images.json';
import Image from 'next/image';

const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const pressed = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-transparent py-12">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ staggerChildren: 0.08 }} className={`max-w-5xl w-full p-10 rounded-3xl ${extrude} bg-white/80 backdrop-blur-sm`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold text-slate-800">Excellence by Choice</motion.h1>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-slate-600">JG University blends applied research with industry partnerships to prepare graduates for global careers.</motion.p>

                        <div className="mt-6 flex gap-4">
                            <NeumoButton label="Apply" primary />
                            <NeumoButton label="Learn More" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className={`w-72 h-60 rounded-3xl ${pressed} bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden relative`}>
                            {campus && campus[0] && (
                                <Image src={campus[0].image} alt="campus" fill sizes="(max-width: 768px) 100vw, 50vw" unoptimized className="object-cover" />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

function NeumoButton({ label, primary = false }: { label: string; primary?: boolean }) {
    const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";
    return (
        <button className={`px-4 py-2 rounded-full ${primary ? 'text-red-700' : 'text-gray-700'} bg-white/80 backdrop-blur-sm ${extrude} hover:${inset} active:${inset} transition-shadow duration-150`}>{label}</button>
    );
}
