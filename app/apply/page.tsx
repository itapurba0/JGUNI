"use client";

import React, { useState } from 'react';
import programmes from '../../data/cleanedData.json';

const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

export default function ApplyPage() {
    const featured = (programmes as { programs: string[] }[]).slice(0, 4).flatMap((s) => s.programs.slice(0, 2));
    const [form, setForm] = useState({ name: '', email: '', program: '', message: '' });
    const [status, setStatus] = useState<string | null>(null);

    function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target as HTMLInputElement;
        setForm((s) => ({ ...s, [name]: value }));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        try {
            const body = { name: form.name, email: form.email, message: `Apply: ${form.program}\n\n${form.message}` };
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
            const json = await res.json();
            if (json.ok) {
                setStatus('ok');
                setForm({ name: '', email: '', program: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    return (
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
            <div className={`p-6 rounded-3xl ${extrude} bg-white/80 backdrop-blur-sm`}>
                <h1 className="text-3xl font-bold mb-2 text-slate-800">Apply to JG University</h1>
                <p className="text-slate-600 mb-6">Start your application — applications are reviewed on a rolling basis for the 2026 intake.</p>

                <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                    <input name="email" value={form.email} onChange={onChange} placeholder="Email" className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />

                    <select name="program" value={form.program} onChange={onChange} className={`w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`}>
                        <option value="">Select programme (optional)</option>
                        {featured.map((p: string, i: number) => (
                            <option key={i} value={p}>{p}</option>
                        ))}
                    </select>

                    <div />

                    <textarea name="message" value={form.message} onChange={onChange} placeholder="Statement of purpose / message" className={`md:col-span-2 w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm ${inset} h-36`} />

                    <div className="md:col-span-2 flex items-center justify-between">
                        <div>
                            <button type="submit" className={`px-5 py-3 rounded-2xl bg-white/80 backdrop-blur-sm ${extrude} text-red-700 hover:${inset}`}>Submit Application</button>
                        </div>
                        <div className="text-sm text-slate-600">{status === 'sending' ? 'Sending…' : status === 'ok' ? 'Application sent!' : status === 'error' ? 'Error — try again' : null}</div>
                    </div>
                </form>
            </div>

            <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-4 text-slate-800">Required documents</h2>
                <ul className="list-disc list-inside text-slate-700">
                    <li>Completed application form</li>
                    <li>Certified copies of transcripts</li>
                    <li>Statement of purpose / motivation letter</li>
                    <li>Two letters of recommendation (where applicable)</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-800">Popular Programmes</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {featured.map((p: string, i: number) => (
                        <li key={i} className={`p-4 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`}>{p}</li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
