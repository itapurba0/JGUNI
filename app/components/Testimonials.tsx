"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import campus from '../../data/campus_images.json';

const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

import faculty from '../../data/faculty.json';
import Image from 'next/image';

const data = (faculty && faculty.slice(0, 3).map((f: any) => ({ name: f.name, quote: f.bio || 'A JG student/alumnus.', role: f.school, image: f.image }))) || [
    { name: 'Aisha', quote: 'My time at JG transformed my career trajectory.', role: 'Alumnus' },
    { name: 'Carlos', quote: 'Hands-on projects made me job-ready.', role: 'Student' },
    { name: 'Meera', quote: 'Faculty mentorship is outstanding.', role: 'Alumnus' },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const timer = useRef<number | null>(null);

    useEffect(() => {
        timer.current = window.setInterval(() => setIndex((i) => (i + 1) % data.length), 3500);
        return () => { if (timer.current) clearInterval(timer.current); };
    }, []);

    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold text-slate-800">Student Testimonials</h2>
                <div className="mt-6 relative">
                    <AnimatePresence mode="wait">
                        <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className={`p-6 rounded-2xl ${extrude} bg-white/80 backdrop-blur-sm`}>
                            <div className={`w-16 h-16 rounded-full mx-auto ${inset} bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden relative`}>
                                {data[index].image ? (
                                    <Image src={data[index].image} alt={data[index].name} fill sizes="64px" unoptimized className="object-cover" />
                                ) : (
                                    <Image src={campus[index % campus.length]?.image || campus[0].image} alt="Campus" fill sizes="64px" unoptimized className="object-cover" />
                                )}
                            </div>
                            <div className="mt-4 text-gray-800 font-medium">"{data[index].quote}"</div>
                            <div className="mt-2 text-sm text-slate-600">— {data[index].name}, {data[index].role}</div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
