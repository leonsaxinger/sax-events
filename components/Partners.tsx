"use client";

import { partners } from "@/data/site";
import PartnerItem from "./PartnerItem";
import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow mb-8 justify-center text-bubble">Unsere Partner</p>
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:gap-x-14">
            {partners.map((p) => (
              <PartnerItem key={p.name} name={p.name} logo={p.logo} mode={p.mode} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
