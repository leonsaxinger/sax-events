import { site } from "@/data/site";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { Instagram as InstagramIcon, ArrowRight } from "./Icons";

// Real event photos shown as an Instagram-style grid (links to the profile).
// TODO: Für einen live aktualisierten Feed später ein Widget (z.B. behold.so)
// mit dem Account verbinden.
const tiles = [
  "/images/p-freaky-1.jpg",
  "/images/p-uni-2.jpg",
  "/images/p-freaky-4.jpg",
  "/images/p-uni-5.jpg",
  "/images/p-freaky-6.jpg",
  "/images/p-uni-3.jpg",
];

export default function Instagram() {
  const url = site.socials.instagram;
  const handle = site.instagramHandle;

  return (
    <section id="instagram" className="relative py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-grape">
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </p>
            <h2 className="font-display text-4xl uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Folge dem Wahnsinn.
            </h2>
            <p className="mt-4 text-lg text-chalk-muted">
              Jede Nacht, jeder Moment, jede Crowd — live auf Instagram.
            </p>
          </div>
          <Magnetic>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-accent px-7 py-4 font-semibold text-white shadow-glow transition-all duration-200 hover:bg-accent-bright hover:shadow-glow-lg"
            >
              <InstagramIcon className="h-5 w-5" />@{handle}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {tiles.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 6) * 0.05}
              className="aspect-square"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`@${handle} auf Instagram`}
                className="group relative block h-full w-full cursor-pointer overflow-hidden rounded-xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="h-7 w-7 text-white" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
