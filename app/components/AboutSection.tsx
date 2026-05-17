"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import campus from '../../data/campus_images.json';

const stats = [
    { label: "Programs", value: 50, suffix: "+" },
    { label: "Placement Rate", value: 98, suffix: "%" },
    { label: "Alumni", value: 20000, suffix: "+" },
];

export default function AboutSection() {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setVisible(true);
                });
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;
        const timers: number[] = [];
        stats.forEach((s, i) => {
            const steps = 40;
            const duration = 1200;
            const increment = Math.max(1, Math.floor(s.value / steps));
            let current = 0;
            const t = window.setInterval(() => {
                current += increment;
                if (current >= s.value) {
                    current = s.value;
                    clearInterval(t);
                }
                setCounts((prev) => {
                    const next = [...prev];
                    next[i] = current;
                    return next;
                });
            }, duration / steps);
            timers.push(t);
        });
        return () => timers.forEach((t) => clearInterval(t));
    }, [visible]);

    return (
        <section aria-labelledby="about-heading" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div className="relative min-h-80 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.08)]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <Image src={campus[1]?.image || campus[0].image} alt="Campus life" fill sizes="(max-width: 768px) 100vw, 50vw" unoptimized className="object-cover" />
                    </motion.div>

                    <div ref={ref}>
                        <motion.h2 id="about-heading" className="text-3xl font-bold text-slate-900" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            About JG University
                        </motion.h2>
                        <motion.p className="mt-4 text-slate-600" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            JG University provides a transformative education focused on entrepreneurship, research, and close industry partnerships to launch careers and accelerate impact.
                        </motion.p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {stats.map((s, i) => (
                                <motion.div key={s.label} className="p-6 rounded-2xl text-center shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)] bg-white/70 backdrop-blur-sm" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <div className="text-2xl font-extrabold text-red-700">
                                        {counts[i].toLocaleString()}
                                        {s.suffix}
                                    </div>
                                    <div className="mt-2 text-sm text-slate-600">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}