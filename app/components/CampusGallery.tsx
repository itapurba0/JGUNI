"use client";

import React from 'react';
import { motion } from 'framer-motion';
import campusImages from '../../data/campus_images.json';

const CampusGallery = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Campus Highlights</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {campusImages.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              className="overflow-hidden rounded-3xl bg-white/70 backdrop-blur-sm shadow-[inset_0_2px_6px_rgba(15,23,42,0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <img src={item.image} alt={`campus-${idx}`} className="w-full h-48 object-cover rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;
