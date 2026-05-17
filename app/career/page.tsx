"use client";

import React, { useState } from "react";
import Link from "next/link";

const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

export default function CareerPage() {
    const [form, setForm] = useState({ name: "", email: "", contact: "", message: "" });
    const [status, setStatus] = useState<string | null>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target as HTMLInputElement;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: form.name, email: form.email, message: `Career Application\nContact: ${form.contact}\n\n${form.message}` }) });
            const json = await res.json();
            if (json.ok) { setStatus('ok'); setForm({ name: "", email: "", contact: "", message: "" }); } else setStatus('error');
        } catch { setStatus('error'); }
    }

    return (
        <main className="min-h-screen bg-transparent">
            <header className="relative" style={{ height: 260 }}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-slate-800 text-3xl md:text-4xl font-bold">Career Form</h1>
                </div>
            </header>

            <section className="py-12">
                <div className="max-w-2xl mx-auto px-4">
                    <div className={`p-6 rounded-3xl ${extrude} bg-white/80 backdrop-blur-sm -mt-16`}>
                        <h2 className="text-center text-xl font-semibold text-slate-800">Join Our Team!</h2>

                        <form onSubmit={onSubmit} className="mt-6 space-y-4">
                            <input name="name" value={form.name} onChange={onChange} placeholder="Full Name" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                            <input name="email" value={form.email} onChange={onChange} placeholder="Email" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                            <input name="contact" value={form.contact} onChange={onChange} placeholder="Contact Number" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                            <textarea name="message" value={form.message} onChange={onChange} placeholder="Write your message here" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset} h-24`} />

                            <div className="flex items-center gap-4">
                                <div className="text-green-600 font-mono bg-green-50 px-3 py-1 rounded">BGMU7</div>
                                <input placeholder="Enter captcha code" className={`rounded-2xl px-3 py-2 flex-1 bg-white/80 backdrop-blur-sm ${inset}`} />
                            </div>

                            <div>
                                <button type="submit" className={`w-full px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${extrude} text-red-700`}>Submit</button>
                            </div>
                            <div className="text-sm text-slate-600">{status === 'sending' ? 'Sending…' : status === 'ok' ? 'Application sent!' : status === 'error' ? 'Error — try again' : null}</div>
                        </form>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6">
                <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
            </div>
        </main>
    );
}
