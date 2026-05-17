import React from "react";
import Link from "next/link";

export const metadata = { title: "Admission — JG University" };

export default function AdmissionPage() {
    return (
        <main className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold">Admission</h1>
                <p className="mt-4 text-slate-600">Apply for the 2026 intake. Find eligibility, deadlines and application procedures.</p>

                <div className="mt-8 space-y-4">
                    <Link href="/apply" className="inline-block px-5 py-3 bg-red-700 text-white rounded-2xl">Start Application</Link>
                    <div className="text-sm text-slate-500">Need help? Contact admissions at admissions@jguni.edu</div>
                </div>

                <div className="mt-8">
                    <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
