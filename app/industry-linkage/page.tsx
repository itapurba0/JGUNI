"use client";

import React, { useState } from "react";
import Link from "next/link";



const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

export default function IndustryLinkagePage() {
    const partners = [
        { name: 'Example Corp', focus: 'Internships & Applied Research' },
        { name: 'Tech Labs', focus: 'Joint R&D and student projects' },
        { name: 'Fin Innovate', focus: 'Fintech collaborations and hackathons' },
    ];

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target as HTMLInputElement;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: form.name, email: form.email, message: `Industry linkage enquiry:\n\n${form.message}` }) });
            const json = await res.json();
            if (json.ok) { setStatus('ok'); setForm({ name: '', email: '', message: '' }); } else setStatus('error');
        } catch (err) { setStatus('error'); console.error(err); }
    }

    return (
        <main className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-slate-800">Industry Linkage</h1>
                <p className="mt-4 text-slate-600">Our industry links provide students with internships, project placements and pathways into employment. We co-create curriculum with partners and run industry mentorship programmes.</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {partners.map((p) => (
                        <div key={p.name} className={`p-6 rounded-3xl bg-white/80 backdrop-blur-sm ${inset}`}>
                            <div className="font-semibold text-slate-800">{p.name}</div>
                            <div className="text-sm text-slate-600 mt-2">{p.focus}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 max-w-xl">
                    <h3 className="text-lg font-semibold text-slate-800">Partner with us</h3>
                    <form onSubmit={onSubmit} className="mt-4 space-y-3">
                        <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                        <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your organisation" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset} h-28`} />
                        <div className="flex items-center justify-between">
                            <button type="submit" className={`px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${extrude} text-red-700`}>Send enquiry</button>
                            <div className="text-sm text-slate-600">{status === 'sending' ? 'Sending…' : status === 'ok' ? 'Sent' : status === 'error' ? 'Error' : null}</div>
                        </div>
                    </form>
                </div>

                <div className="mt-8">
                    <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}
