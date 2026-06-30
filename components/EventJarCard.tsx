"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "./Icons";

export type Jar = {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  tags: string[];
  href: string;
  available: boolean;
  cta?: string;
  video?: string;
  poster?: string;
  coverGradient?: string;
  accent?: string;
};

export default function EventJarCard({
  jar,
  feature = false,
}: {
  jar: Jar;
  feature?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const accent = jar.accent ?? "#E0218A";

  // Only play the loop while the card is on screen (saves battery/data).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const Inner = (
    <article
      className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] ${
        feature ? "min-h-[34rem] lg:min-h-[40rem]" : "min-h-[26rem]"
      }`}
    >
      {/* Media background */}
      <div className="absolute inset-0">
        {jar.video ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            muted
            loop
            playsInline
            preload="metadata"
            poster={jar.poster}
          >
            <source src={jar.video} type="video/mp4" />
          </video>
        ) : jar.poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jar.poster}
            alt={jar.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ background: jar.coverGradient || "linear-gradient(to bottom right, #1B1B1F, #0A0A0B)" }}
          />
        )}
      </div>

      {/* Readability gradient + subtle brand tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
      <div
        className="absolute inset-0 opacity-25"
        style={{ background: `linear-gradient(to top, ${accent}, transparent 55%)` }}
      />

      {/* Content */}
      <div className="relative p-8 sm:p-10">
        {jar.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={jar.logo}
            alt={jar.name}
            className={`mb-3 w-auto object-contain object-left drop-shadow-xl ${
              feature ? "h-20 sm:h-28" : "h-14"
            }`}
          />
        ) : (
          <h3 className="font-display text-5xl uppercase tracking-tight sm:text-6xl">
            {jar.name}
          </h3>
        )}

        <p className="text-lg font-bold uppercase tracking-wide" style={{ color: accent }}>
          {jar.tagline}
        </p>
        <p className="mt-3 max-w-md text-chalk-muted">{jar.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {jar.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Explicit CTA button */}
        <span
          className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-transform duration-200 group-hover:-translate-y-0.5"
          style={{ backgroundColor: accent }}
        >
          {jar.cta ?? `${jar.name} ansehen`}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>

      {/* Hover ring */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-2 group-hover:ring-white/40"
      />
    </article>
  );

  return jar.href.startsWith("/") && !jar.href.startsWith("/#") ? (
    <Link href={jar.href} className="block cursor-pointer">
      {Inner}
    </Link>
  ) : (
    <a href={jar.href} className="block cursor-pointer">
      {Inner}
    </a>
  );
}
