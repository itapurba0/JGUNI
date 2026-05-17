import React from "react";
import Link from "next/link";
import CampusGallery from "../components/CampusGallery";

export const metadata = { title: "Campus — JG University" };

export default function CampusPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold">Campus</h1>
                <p className="mt-4 text-slate-600">Our modern campus blends green spaces, dedicated labs, and collaborative learning environments to support student success.</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Facilities</h3>
                        <p className="text-sm text-slate-600 mt-2">State-of-the-art labs, maker spaces, libraries and dedicated study lounges.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Student Life</h3>
                        <p className="text-sm text-slate-600 mt-2">Clubs, cultural events, sports and community engagement opportunities throughout the year.</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]">
                        <h3 className="font-semibold">Accommodation & Support</h3>
                        <p className="text-sm text-slate-600 mt-2">On-campus and nearby accommodation options, student services and international student support.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <CampusGallery />
                </div>

                <div className="mt-8">
                    <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
