"use client";

import React from 'react';
import { GraduationCap, Building, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
    const features = [
        { title: 'World-Class Faculty', description: 'Learn from the best educators and industry leaders.', icon: <GraduationCap className="text-blue-600" /> },
        { title: 'State-of-the-Art Campus', description: 'Experience a modern campus with cutting-edge facilities.', icon: <Building className="text-blue-600" /> },
        { title: 'Global Opportunities', description: 'Access international programs and partnerships.', icon: <Globe className="text-blue-600" /> },
    ];

    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose JG University?</h2>
                <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-6 bg-white/70 backdrop-blur-sm rounded-3xl shadow-[0_10px_30px_rgba(15,23,42,0.08)] hover:shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)] transition-all duration-300"
                            variants={item}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;