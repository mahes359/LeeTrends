import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 500, suffix: "+", label: "Happy Brides & Clients" },
  { end: 8, suffix: "+", label: "Years of Heritage" },
  { end: 1000, suffix: "+", label: "Bespoke Creations" },
  { end: 100, suffix: "%", label: "Handcrafted Custom Fit" },
];

function AnimatedNumber({ inView, end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / 50;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 50);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <>{count}{suffix}</>;
}

function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-br from-rose-800 via-rose-700 to-rose-900 relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.25) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-lg flex flex-col items-center text-center text-white hover:bg-white/15 transition-all duration-300 group"
            >
              <p
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-tight group-hover:scale-105 transition-transform duration-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <AnimatedNumber inView={inView} end={s.end} suffix={s.suffix} />
              </p>
              <div className="w-8 h-0.5 bg-rose-300/80 my-4 rounded-full group-hover:w-12 transition-all duration-300" />
              <p className="text-rose-100 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
