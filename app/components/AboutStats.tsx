"use client";

import React from 'react';
import campus from '../../data/campus_images.json';
import Image from 'next/image';

const wellInset = "shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]";
const frameExtrude = "shadow-[0_10px_30px_rgba(15,23,42,0.08)]";

export default function AboutStats() {
    const stats = [
        { label: 'Students', value: '28,000' },
        { label: 'Faculty', value: '2,800' },
        { label: 'Programs', value: '65' },
    ];

    return (
        <section className="bg-transparent py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`p-6 rounded-3xl ${frameExtrude} bg-white/80 backdrop-blur-sm`}>
                    <div className={`rounded-3xl p-3 ${wellInset} bg-white/80 backdrop-blur-sm`}>
                        <div className="relative h-56 w-full rounded-3xl overflow-hidden">
                            <Image src={campus[0].image} alt="campus" fill sizes="(max-width: 768px) 100vw, 50vw" unoptimized className="object-cover" />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-800">About JG University</h2>
                    <p className="mt-3 text-slate-600">A modern, industry-aligned university offering interdisciplinary programmes and hands-on learning.</p>

                    <div className="mt-6 flex gap-4">
                        {stats.map((s) => (
                            <div key={s.label} className={`flex-1 p-4 rounded-2xl ${wellInset} bg-white/80 backdrop-blur-sm text-center`}>
                                <div className="text-red-700 font-bold text-xl">{s.value}</div>
                                <div className="text-sm text-slate-600">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
