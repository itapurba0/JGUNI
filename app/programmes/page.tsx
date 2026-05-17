"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import programmes from '../../data/cleanedData.json';
import { makeSlug } from '../../lib/slugify';

type SchoolBlock = { school: string; programs: string[] };
type FlatItem = { school: string; program: string };

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
};

export default function ProgrammesPage() {
    const [q, setQ] = useState('');

    const flat = useMemo(() => {
        return programmes.flatMap((s: SchoolBlock) => s.programs.map((p: string) => ({ school: s.school, program: p } as FlatItem)));
    }, []);

    const filtered = useMemo(() => {
        const norm = q.trim().toLowerCase();
        if (!norm) return flat;
        return flat.filter((x: FlatItem) => x.program.toLowerCase().includes(norm) || x.school.toLowerCase().includes(norm));
    }, [flat, q]);

    const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

    return (
        <div className="bg-transparent py-8">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2 text-slate-800">Programmes</h1>
                        <p className="text-slate-600">Explore our undergraduate and postgraduate programmes across disciplines.</p>
                    </div>

                    <div className="w-full md:w-96">
                        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search programmes or schools..." className={`w-full rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm ${inset}`} />
                    </div>
                </div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={listVariants} className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((item: FlatItem, i: number) => {
                        const slug = makeSlug(item.school, item.program);
                        return (
                            <Link href={`/programmes/${slug}`} key={i} className="no-underline">
                                <motion.article variants={itemVariants} whileHover={{ scale: 1.02 }} className={`p-5 bg-white/80 backdrop-blur-sm rounded-3xl ${extrude} hover:${inset} active:${inset} transition-shadow duration-150`}>
                                    <div className="text-sm text-slate-500">{item.school}</div>
                                    <h3 className="mt-2 text-md font-medium text-slate-800">{item.program}</h3>
                                </motion.article>
                            </Link>
                        );
                    })}
                </motion.div>

                {filtered.length === 0 && <div className="mt-8 text-center text-slate-500">No programmes matched your search.</div>}
            </main>
        </div>
    );
}
