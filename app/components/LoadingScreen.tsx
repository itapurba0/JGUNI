"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LoadingScreen() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setShow(false), 2000);
        return () => clearTimeout(t);
    }, []);

    const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

    return (
        <AnimatePresence>
            {show && (
                <motion.div className="fixed inset-0 z-40 flex items-center justify-center bg-transparent pointer-events-none" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`w-48 h-48 rounded-3xl ${inset} bg-white/70 backdrop-blur-sm flex items-center justify-center`}
                    >
                        <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 1.2, repeat: Infinity }} className={`w-28 h-28 rounded-full ${extrude} bg-white/70 backdrop-blur-sm flex items-center justify-center`}>
                            <motion.span className="text-red-700 font-bold text-2xl">JG</motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}