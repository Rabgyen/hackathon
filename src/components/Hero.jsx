import { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";
import Threads from "./Threads";

const Hero = () => {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = heroRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="relative">
      <div style={{ width: "100%", height: 700, position: "relative" }}>
        {isVisible ? (
          <Threads
            className="absolute inset-0"
            color={[0.0, 0.36, 0.56]}
            amplitude={0.95}
            distance={0.55}
            enableMouseInteraction={false}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,92,143,0.12),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f3faff_100%)]" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-5xl space-y-4">
          <ShinyText
            text="Uniglobe IT Club"
            speed={2}
            delay={0}
            color="#005c8f"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            <span className="bg-linear-to-r from-[#005c8f] via-[#2f89b8] to-[#77bddc] bg-clip-text text-transparent">
              We are
            </span>{" "}
            the Hackathon everyone&apos;s been{" "}
            <span className="bg-linear-to-r from-[#005c8f] via-[#3c98c2] to-[#a6d9eb] bg-clip-text text-transparent">
              waiting for.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-sm font-medium text-slate-600 sm:text-base md:text-lg">
            Experience the first edition Uniglobe Hackathon and CodeFest now.
          </p>

          <a
            href="https://forms.gle/Fz9ay18V86axXXx58"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto rounded-xl bg-[#005c8f] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#005c8f]/20 transition hover:bg-[#004d78] sm:px-7 sm:py-3.5 sm:text-base"
          >
            Register now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
