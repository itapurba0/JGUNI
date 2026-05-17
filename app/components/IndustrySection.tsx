"use client";

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    '/partners/google.png',
    '/partners/microsoft.png',
    '/partners/ibm.png',
    '/partners/amazon.png',
    '/partners/intel.png',
];

const IndustrySection = () => {
    return (
        <section className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-center text-slate-900 font-semibold">Industry Linkages</h3>
                <p className="text-center text-slate-600 mt-2">Trusted by industry partners for research and placements.</p>

                <div className="mt-6 overflow-hidden">
                    <motion.div className="flex space-x-8 items-center" animate={{ x: [0, -800] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}>
                        {partners.concat(partners).map((p, i) => (
                            <div key={i} style={{ flexShrink: 0 }} className="w-32 h-16 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                                <img src={p} alt={`partner-${i}`} className="max-h-10 object-contain" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;
