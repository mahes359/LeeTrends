import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 500, suffix: "+", label: "Happy Clients" },
  { end: 8, suffix: "+", label: "Years of Excellence" },
  { end: 1000, suffix: "+", label: "Designs Created" },
  { end: 100, suffix: "%", label: "Custom Made" },
];

function AnimatedNumber({ inView, end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end]);

  return <>{count}{suffix}</>;
}

function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-rose-700">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <p
                className="text-6xl md:text-7xl font-bold leading-none"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                <AnimatedNumber inView={inView} end={s.end} suffix={s.suffix} />
              </p>
              <div className="w-8 h-px bg-rose-300 my-4" />
              <p className="text-rose-200 text-xs tracking-[0.4em] uppercase font-medium">
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
