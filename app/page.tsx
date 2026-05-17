"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import AboutStats from "./components/AboutStats";
import ProgramsGrid from "./components/ProgramsGrid";
import Testimonials from "./components/Testimonials";
import LoadingScreen from "./components/LoadingScreen";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="min-h-screen w-full bg-transparent">
      <LoadingScreen />
      <main className="pt-20">
        <HeroSection />
        <AboutStats />
        <ProgramsGrid />
        <Testimonials />
      </main>
    </div>
  );
}
