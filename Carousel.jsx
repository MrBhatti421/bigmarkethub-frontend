'use client';

import { useEffect, useState } from 'react';

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  const current = slides[index];

  return (
    <div className="relative">
      <div
        className={`h-56 sm:h-72 rounded-2xl flex items-center justify-center text-4xl sm:text-6xl font-black tracking-tight ${current.className}`}
      >
        {current.label}
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black transition"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:text-black transition"
      >
        →
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-8 bg-primary' : 'w-4 bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
