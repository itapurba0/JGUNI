import React from "react";
import Link from "next/link";

export const metadata = { title: "Discover Us — JG University" };

export default function DiscoverPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold">Discover Us</h1>
                <p className="mt-4 text-slate-600">Learn about our vision, mission, values, rankings and accreditations. JG University focuses on industry-aligned education and international partnerships.</p>

                <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Our Vision</h3>
                        <p className="text-sm text-slate-600 mt-2">To be a leading global university that empowers learners to solve real-world challenges.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Rankings & Accreditations</h3>
                        <p className="text-sm text-slate-600 mt-2">Accredited regionally and recognized for applied research and industry collaboration.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Global Partners</h3>
                        <p className="text-sm text-slate-600 mt-2">Strategic partnerships with universities and research centres across North America, Europe and Asia.</p>
                    </div>
                </section>

                <div className="mt-8">
                    <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
