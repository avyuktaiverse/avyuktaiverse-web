"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  id: string;
  label: string;
}

/**
 * Sticky in-page navigation for long pages. Sits under the site header,
 * scrolls horizontally on phones, and highlights the section in view.
 */
export function SectionNav({ items, ariaLabel }: { items: ReadonlyArray<SectionNavItem>; ariaLabel: string }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label={ariaLabel}
      className="sticky top-16 z-30 border-b border-white/[0.05] backdrop-blur-xl"
      style={{ background: "rgba(12, 10, 29, 0.82)" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ul className="flex items-center gap-1.5 overflow-x-auto py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="flex-shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-sans font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap",
                    isActive
                      ? "border-accent/30 bg-accent/10 text-accent"
                      : "border-white/[0.08] bg-white/[0.02] text-white/55 hover:text-white hover:border-white/20"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
