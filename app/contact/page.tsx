"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import industry from '../../data/industry_linkages.json';
import campus from '../../data/campus_images.json';
import Image from 'next/image';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });
            const json = await res.json();
            if (json.ok) {
                setStatus('success');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    }

    const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
    const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

    return (
        <main className="bg-transparent py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-3xl font-bold mb-4 text-slate-800">Contact Us</h1>
                <p className="text-slate-600 mb-6">Reach out to our admissions team for enquiries and support. For departmental contacts see the listings on the right.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-slate-800">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} name="name" className={`mt-1 block w-full rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm ${inset}`} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-800">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className={`mt-1 block w-full rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm ${inset}`} type="email" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-800">Message</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" className={`mt-1 block w-full rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm ${inset}`} rows={5} />
                        </div>
                        <button type="submit" disabled={status === 'sending'} className={`px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm ${extrude} hover:${inset} active:${inset} text-red-700`}>{status === 'sending' ? 'Sending…' : 'Send'}</button>

                        {status === 'success' && <div className="text-sm text-green-600">Message sent — thank you!</div>}
                        {status === 'error' && <div className="text-sm text-red-600">There was a problem sending your message.</div>}
                    </form>

                    <aside>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800">Department & Industry Contacts</h3>
                        <div className="space-y-4">
                            {industry.map((p: { image?: string; name: string; role?: string; organization?: string; email?: string }, i: number) => (
                                <motion.div key={i} whileHover={{ scale: 1.02 }} className={`p-4 bg-white/80 backdrop-blur-sm rounded-3xl ${extrude} flex items-center gap-4`}>
                                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                        <Image src={p.image || campus[i % campus.length]?.image || campus[0].image} alt={p.name} fill sizes="48px" unoptimized className="object-cover" />
                                    </div>
                                    <div>
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-sm text-slate-500">{p.role} — {p.organization}</div>
                                        <div className="text-xs text-slate-400">{p.email || 'No email provided'}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
