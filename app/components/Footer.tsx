"use client";

import React from 'react';

const extrude = "shadow-[0_10px_30px_rgba(15,23,42,0.08)]";
const insetTrough = "shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]";

export default function Footer() {
    return (
        <footer className="bg-transparent py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <div className="text-red-700 font-bold">JG University</div>
                    <div className="text-sm text-slate-600 mt-2">Industry-aligned learning & research.</div>
                </div>

                <div>
                    <div className="font-semibold mb-2">Programs</div>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>Undergraduate</li>
                        <li>Postgraduate</li>
                        <li>Continuing Ed</li>
                    </ul>
                </div>

                <div>
                    <div className="font-semibold mb-2">Resources</div>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>Admissions</li>
                        <li>Research</li>
                        <li>Careers</li>
                    </ul>
                </div>

                <div>
                    <div className="font-semibold mb-2">Subscribe</div>
                    <div className="flex gap-2">
                        <input placeholder="you@company.com" className={`flex-1 rounded-2xl px-4 py-2 bg-white/80 backdrop-blur-sm ${insetTrough}`} />
                        <button className={`px-4 py-2 rounded-2xl bg-white/80 backdrop-blur-sm ${extrude} hover:${insetTrough} active:${insetTrough} text-red-700`}>Join</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
// "use client";

// import React from "react";
// import Link from "next/link";

// export default function Footer() {
//     return (
//         <footer className="bg-slate-900 text-slate-300 py-12">
//             <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* Address / Contact */}
//                     <div>
//                         <h4 className="text-white font-semibold">Contact</h4>
//                         <address className="not-italic mt-2 text-sm text-slate-400">
//                             JG University<br />
//                             123 University Ave<br />
//                             City, State ZIP<br />
//                             <a href="tel:+1234567890" className="block mt-2 text-slate-300 hover:text-white">+1 (234) 567-890</a>
//                             <a href="mailto:info@jguni.edu" className="block mt-1 text-slate-300 hover:text-white">info@jguni.edu</a>
//                         </address>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h4 className="text-white font-semibold">Quick Links</h4>
//                         <ul className="mt-2 space-y-2 text-sm">
//                             <li><Link href="/programmes" className="hover:text-white">Programmes</Link></li>
//                             <li><Link href="/apply" className="hover:text-white">Apply Now</Link></li>
//                             <li><Link href="/about" className="hover:text-white">About</Link></li>
//                             <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
//                         </ul>
//                     </div>

//                     {/* Academics */}
//                     <div>
//                         <h4 className="text-white font-semibold">Academics</h4>
//                         <ul className="mt-2 space-y-2 text-sm">
//                             <li><Link href="/undergraduate" className="hover:text-white">Undergraduate</Link></li>
//                             <li><Link href="/postgraduate" className="hover:text-white">Postgraduate</Link></li>
//                             <li><Link href="/research" className="hover:text-white">Research</Link></li>
//                             <li><Link href="/continuing-ed" className="hover:text-white">Continuing Ed</Link></li>
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h4 className="text-white font-semibold">Newsletter</h4>
//                         <p className="mt-2 text-sm text-slate-400">Get admissions updates and campus news.</p>

//                         <form className="mt-3 flex gap-2" onSubmit={(e) => e.preventDefault()}>
//                             <label htmlFor="footer-email" className="sr-only">Email</label>
//                             <input id="footer-email" type="email" placeholder="Email address" className="w-full px-3 py-2 rounded-lg bg-slate-800 text-slate-200 placeholder:text-slate-400" />
//                             <button type="submit" className="px-4 py-2 bg-red-700 text-white rounded-lg">Subscribe</button>
//                         </form>
//                     </div>
//                 </div>

//                 <div className="mt-8 text-center text-sm text-slate-500">
//                     © {new Date().getFullYear()} JG University. All rights reserved.
//                 </div>
//             </div>
//         </footer>
//     );
// }