"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";
const navButton = `rounded-full px-4 py-2 bg-white text-sm font-medium text-slate-700 ${extrude} transition-all duration-200 ease-out hover:${inset} hover:-translate-y-0.5 active:${inset} active:translate-y-0`;
const mobileNavButton = `rounded-2xl px-3 py-3 bg-white text-sm font-medium text-slate-700 ${extrude} transition-all duration-200 ease-out hover:${inset} hover:-translate-y-0.5 active:${inset} active:translate-y-0`;

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-4 z-60 px-4 xl:px-8 pointer-events-none">
            <nav className={`pointer-events-auto max-w-7xl mx-auto bg-white rounded-3xl py-3 px-4 flex items-center justify-between ${extrude}`}>
                <div className="flex items-center gap-4">
                    <div className="text-red-700 font-extrabold text-lg">JG University</div>
                    <ul className="hidden xl:flex items-center gap-3 text-sm text-gray-700">
                        <li><Link href="/" className={navButton}>Home</Link></li>
                        <li><Link href="/programmes" className={navButton}>Programmes</Link></li>
                        <li><Link href="/campus" className={navButton}>Campus</Link></li>
                        <li><Link href="/career" className={navButton}>Career</Link></li>
                        <li><Link href="/industry-linkage" className={navButton}>Industry</Link></li>
                        <li><Link href="/collaborations" className={navButton}>Collaborations</Link></li>
                        <li><Link href="/about" className={navButton}>About</Link></li>
                        <li><Link href="/research" className={navButton}>Research</Link></li>
                        <li><Link href="/contact" className={navButton}>Contact</Link></li>
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    <div className="xl:hidden">
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen((v) => !v)}
                            className={`p-2 rounded-full bg-white text-gray-700 transition hover:${inset} active:${inset}`}
                        >
                            {open ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>

                    <motion.div whileTap={{ scale: 0.98 }} className="hidden xl:block">
                        <ApplyPill />
                    </motion.div>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="pointer-events-none mt-3 max-w-7xl mx-auto px-4 xl:px-8"
                    >
                        <div className={`pointer-events-auto bg-white rounded-2xl p-4 ${extrude} xl:hidden flex flex-col gap-2`}>
                            <Link href="/" onClick={() => setOpen(false)} className={mobileNavButton}>Home</Link>
                            <Link href="/programmes" onClick={() => setOpen(false)} className={mobileNavButton}>Programmes</Link>
                            <Link href="/campus" onClick={() => setOpen(false)} className={mobileNavButton}>Campus</Link>
                            <Link href="/career" onClick={() => setOpen(false)} className={mobileNavButton}>Career</Link>
                            <Link href="/industry-linkage" onClick={() => setOpen(false)} className={mobileNavButton}>Industry</Link>
                            <Link href="/collaborations" onClick={() => setOpen(false)} className={mobileNavButton}>Collaborations</Link>
                            <Link href="/about" onClick={() => setOpen(false)} className={mobileNavButton}>About</Link>
                            <Link href="/research" onClick={() => setOpen(false)} className={mobileNavButton}>Research</Link>
                            <Link href="/contact" onClick={() => setOpen(false)} className={mobileNavButton}>Contact</Link>
                            <div className="pt-2">
                                <ApplyPill onNavigate={() => setOpen(false)} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

function ApplyPill({ onNavigate }: { onNavigate?: () => void }) {
    const extrudeLocal = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    const insetLocal = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";
    return (
        <Link href="/apply" onClick={onNavigate} className={`rounded-full px-4 py-2 text-red-700 bg-white ${extrudeLocal} hover:${insetLocal} active:${insetLocal} transition-shadow duration-150`}>Apply Now</Link>
    );
}