import programmes from '../../../data/cleanedData.json';
import { makeSlug } from '../../../lib/slugify';
import Link from 'next/link';

export default function ProgramDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const flat = programmes.flatMap((s: any) => s.programs.map((p: string) => ({ school: s.school, program: p })));
    const found = flat.find((x: any) => makeSlug(x.school, x.program) === slug);

    if (!found) {
        return (
            <main className="max-w-3xl mx-auto px-4 py-20 bg-transparent">
                <h2 className="text-2xl font-semibold">Program not found</h2>
                <p className="mt-4 text-slate-600">We couldn't locate the requested programme.</p>
                <Link href="/programmes" className="mt-6 inline-block text-blue-600">Back to programmes</Link>
            </main>
        );
    }

    return (
        <main className="max-w-4xl mx-auto px-4 py-20 bg-transparent">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <div className="text-sm text-slate-500">{found.school}</div>
                <h1 className="text-3xl font-bold mt-2">{found.program}</h1>
                <p className="mt-4 text-slate-600">This overview provides admissions criteria, curriculum highlights, career outcomes and contact points for the <strong>{found.program}</strong> offered by the <em>{found.school}</em>.</p>

                <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/70 backdrop-blur-sm rounded">
                        <h3 className="font-medium">Duration & Mode</h3>
                        <p className="text-sm text-slate-600">Typical duration: 1–4 years depending on level. Modes: On-campus, Blended, or Online for select programmes.</p>
                    </div>
                    <div className="p-4 bg-white/70 backdrop-blur-sm rounded">
                        <h3 className="font-medium">Admission</h3>
                        <p className="text-sm text-slate-600">Admission requires certified transcripts, a statement of purpose and references. Specific entry tests or interviews apply for some schools.</p>
                    </div>
                </section>

                <section className="mt-6">
                    <h3 className="font-semibold">Career Paths</h3>
                    <p className="text-sm text-slate-600">Graduates typically pursue roles aligned with the programme — industry placements, research roles, or entrepreneurial ventures. Check the programme's brochure for detailed job titles.</p>
                </section>

                <Link href="/programmes" className="mt-6 inline-block text-blue-600">← Back to programmes</Link>
            </div>
        </main>
    );
}
