"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    { quote: "The mentorship and industry exposure changed my trajectory.", name: "A. Kumar", course: "B.Tech CS", rating: 5 },
    { quote: "Professors pushed me to apply research in real projects.", name: "R. Singh", course: "MSc Data", rating: 5 },
    { quote: "Career services helped me secure my dream role.", name: "S. Patel", course: "MBA", rating: 5 },
];

export default function TestimonialsSection() {
    return (
        <section aria-label="Student testimonials" className="py-16 bg-slate-900 text-slate-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
                <p className="text-center text-slate-300 mt-2">Real stories from students who experienced the JG University journey.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.blockquote
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="p-6 bg-slate-800/70 border border-slate-700 rounded-2xl shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center font-semibold text-white">
                                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                                    </div>
                                    <div>
                                        <div className="font-semibold">{t.name}</div>
                                        <div className="text-sm text-slate-400">{t.course}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 text-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            <p className="mt-4 text-slate-200">“{t.quote}”</p>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}