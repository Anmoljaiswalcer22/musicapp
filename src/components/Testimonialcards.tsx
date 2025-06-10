'use client'
import React from 'react';
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      '"Before discovering this platform, we struggled to manage releases across multiple channels. Now, everything feels intuitive and artist-friendly. It’s like having a personal manager who’s always on time and never drops the beat."',
    name: "Carlos Mendes",
    title: "Indie Artist, SoulWaves",
  },
  {
    quote:
      '"What sets this music service apart is not just the tech—it’s the heart. Every tool feels built with the artist’s vision in mind. Our album launch reached more people than we imagined possible."',
    name: "Neha Sharma",
    title: "Lead Vocalist, The Velvet Echoes",
  },
  {
    quote:
      '"In a world where algorithms often dictate creativity, this platform gave us the freedom to explore, experiment, and express. We’re no longer just uploading tracks—we are curating experiences."',
    name: "David Kim",
    title: "Composer & Sound Designer, Studio Sonic",
  },
  {
    quote:
      '"I’ve been part of the music industry for over a decade, and very few services feel as artist-first as this one. From visual branding to analytics, it’s helped us grow in every direction."',
    name: "Fatima Noor",
    title: "Artist Manager, Skybound Talent",
  },
  {
    quote:
      '"When we were just getting started, we needed more than just hosting — we needed mentorship, structure, and tools we could trust. This service delivered all that and more. We are proud to have it as part of our journey."',
    name: "Tyler James",
    title: "Co-founder, Phoenix Tracks",
  },
  {
    quote:
      '"For any band looking to scale their presence without sacrificing creative control, this is the place. Our fans noticed the difference immediately in both quality and consistency."',
    name: "Ishaan Verma",
    title: "Drummer, The Northern Line",
  },
];

function Testimonialcard() {
  return (
    <div className="relative flex w-full items-center justify-center bg-white dark:bg-black py-12 sm:py-22 md:py-30 lg:py-45">
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:30px_30px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Card Content */}
      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
          What Artists Are Saying
        </h2>
        <div className="text-base sm:text-lg md:text-xl">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default Testimonialcard;
