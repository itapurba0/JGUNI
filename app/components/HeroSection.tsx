"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import campus from '../../data/campus_images.json';

export default function HeroSection() {
    const heroStats = [
        { value: "35+", label: "programmes" },
        { value: "100%", label: "industry-aligned curriculum" },
        { value: "24/7", label: "student support" },
    ];

    const container = {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const child = { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } };

    const campusImage = campus[0]?.image;

    return (
        <section
            aria-label="Hero"
            className="relative overflow-hidden bg-slate-950 text-white"
        >
            <div className="absolute inset-0">
                {campusImage ? (
                    <Image
                        src={campusImage}
                        alt="JG University campus"
                        fill
                        priority
                        loading="eager"
                        sizes="100vw"
                        unoptimized
                        className="object-cover"
                    />
                ) : null}
            </div>
            <div className="absolute inset-0 bg-slate-950/65" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.38),transparent_50%)]" />

            <motion.div
                className="relative z-10 w-full"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
                    <div className="max-w-2xl">
                        <motion.span
                            variants={child}
                            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-white/90 shadow-lg backdrop-blur"
                            aria-hidden
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 2.4, repeat: Infinity }}
                        >
                            Admissions Open 2026
                        </motion.span>

                        <motion.h1
                            variants={child}
                            className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
                        >
                            Excellence by Choice
                        </motion.h1>

                        <motion.p
                            variants={child}
                            className="mt-5 text-lg leading-8 text-slate-200 sm:text-xl"
                        >
                            A modern university fostering leadership, research, and industry collaboration.
                        </motion.p>

                        <motion.div variants={child} className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <Link
                                href="/apply"
                                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-3 font-medium text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="/programmes"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/15"
                            >
                                Explore Programmes
                            </Link>
                        </motion.div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-0 lg:grid-cols-1">
                        {heroStats.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                            >
                                <p className="text-3xl font-semibold text-white">{item.value}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-200">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* TODO: swap the hero image to a responsive source set once the image pipeline is in place. */}
            {/* TODO: revisit the CTA copy after admissions copy is finalized for the year. */}
        </section>
    );
}