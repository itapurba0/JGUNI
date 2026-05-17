"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import campus from '../../data/campus_images.json';



const extrude = "shadow-[9px_9px_16px_rgba(209,217,230,0.8),-9px_-9px_16px_rgba(255,255,255,0.8)]";
const inset = "shadow-[inset_6px_6px_10px_rgba(209,217,230,0.8),inset_-6px_-6px_10px_rgba(255,255,255,0.8)]";

export default function CollaborationsPage() {
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
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: form.name, email: form.email, message: `Collaboration enquiry:\n\n${form.message}` }) });
            const json = await res.json();
            if (json.ok) { setStatus('ok'); setForm({ name: '', email: '', message: '' }); } else setStatus('error');
        } catch { setStatus('error'); }
    }

    return (
        <main className="min-h-screen bg-transparent">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800">Study in India and International Students</h1>

                <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="md:col-span-2 prose prose-slate">
                        <h2 className="text-2xl font-semibold">JG and Carleton University</h2>
                        <p>
                            Carleton University is a comprehensive university located in the Capital of Canada, Ottawa, Ontario. It offers 65
                            programs in areas as diverse as public affairs, journalism, film studies, engineering, high technology and
                            international studies. Carleton University has more than 2,800 professors and staff members and 28,000 students.
                            Carleton&apos;s creative, interdisciplinary, and global approach to research has led to many significant discoveries and
                            creative works in science and technology, business, governance, public policy, and the arts. The Canada-India Centre for
                            Excellence (CICE) at Carleton University is partnering with JGUNI to offer CICE joint certificates to students.
                        </p>
                    </div>

                    <div className="flex items-start justify-center">
                        <div className={`w-56 h-40 rounded-3xl p-4 ${extrude} bg-white/80 backdrop-blur-sm flex items-center justify-center overflow-hidden`}>
                            <Image src={campus[0].image} alt="Campus" width={220} height={140} className="object-cover rounded-2xl" />
                        </div>
                    </div>
                </section>

                <section className="mt-12 text-center">
                    <h3 className="text-xl font-semibold">Training courses will be from multiple domains</h3>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <FeatureCard title="Cyber Security" color="bg-yellow-100">
                            <svg className="w-12 h-12 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </FeatureCard>

                        <FeatureCard title="Artificial Intelligence & Machine Learning" color="bg-blue-50">
                            <svg className="w-12 h-12 text-sky-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </FeatureCard>

                        <FeatureCard title="HealthTech" color="bg-green-50">
                            <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M7 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </FeatureCard>

                        <FeatureCard title="Fintech" color="bg-violet-50">
                            <svg className="w-12 h-12 text-violet-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M6 20h12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            </svg>
                        </FeatureCard>

                        <FeatureCard title="Global Entrepreneurship" color="bg-red-50">
                            <svg className="w-12 h-12 text-red-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 3l2 5h5l-4 3 1 6-5-3-5 3 1-6-4-3h5l2-5z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" />
                            </svg>
                        </FeatureCard>

                        <FeatureCard title="InfoTech Management" color="bg-indigo-50">
                            <svg className="w-12 h-12 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </FeatureCard>

                        <div className="md:col-span-3 flex justify-center">
                            <FeatureCard title="Data Science and Business Analytics" color="bg-sky-50" wide>
                                <svg className="w-12 h-12 text-sky-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <circle cx="7" cy="14" r="2" stroke="currentColor" strokeWidth="1.2" />
                                    <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.2" />
                                    <circle cx="17" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
                                </svg>
                            </FeatureCard>
                        </div>
                    </div>

                    <p className="mt-10 text-sm text-slate-600">The world is getting increasingly smaller as new technologies emerge, and educational institutions must keep up with the pace. We plan to initiate a student exchange programme at JGUNI to enhance and enrich your educational experience.</p>
                </section>

                <div className={`mt-10 max-w-xl mx-auto  rounded-3xl p-6 bg-white/80 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(222, 232, 251, 0.08)] ${extrude}`}> 
                    <h3 className="text-lg font-semibold text-slate-800">Enquire about collaboration</h3>
                    <form onSubmit={onSubmit} className="mt-4 space-y-3">
                        <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset}`} />
                        <textarea name="message" value={form.message} onChange={onChange} placeholder="Message / proposal" className={`w-full px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${inset} h-28`} />
                        <div className="flex items-center justify-between">
                            <button type="submit" className={`px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${extrude} text-red-700`}>Send enquiry</button>
                            <div className="text-sm text-slate-600">{status === 'sending' ? 'Sending…' : status === 'ok' ? 'Sent' : status === 'error' ? 'Error' : null}</div>
                        </div>
                    </form>
                </div>

                <div className="mt-10">
                    <Link href="/" className="text-sm text-red-700">← Back to Home</Link>
                </div>
            </div>
        </main>
    );
}

function FeatureCard({ title, children, color = '', wide = false }: { title: string; children: React.ReactNode; color?: string; wide?: boolean }) {
    return (
        <div className={`${wide ? 'col-span-1 sm:col-span-2 md:col-span-1' : ''} flex flex-col items-center text-center`}>
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${color} ${inset} bg-white/80 backdrop-blur-sm`}>{children}</div>
            <div className="mt-3 text-sm font-medium text-slate-800">{title}</div>
        </div>
    );
}
