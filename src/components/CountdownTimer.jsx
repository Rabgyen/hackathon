import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2026-08-07T09:00:00+05:45").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isEnded: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  return (
    <section
      className="w-full px-4 py-8 text-slate-800"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-xl font-semibold tracking-[0.2em] text-[#005c8f] uppercase">
          Timer
        </h2>
        <p className="mt-6 mb-6 text-sm font-medium text-slate-500">
          The final countdown to the CodeFest and Hackathon at Uniglobe College.
        </p>
        {timeLeft.isEnded ? (
          <p className="text-sm font-medium text-slate-600">
            The Event has Started! Welcome to Code Fest & Hackathon at Uniglobe
            College.
          </p>
        ) : (
          <>
            <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:text-6xl tabular-nums">
                  {formatNumber(timeLeft.days)}
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                  Days
                </span>
              </div>

              <span className="pb-5 text-2xl font-light text-slate-300 select-none sm:pb-6 sm:text-4xl md:text-5xl">
                :
              </span>

              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:text-6xl tabular-nums">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                  Hours
                </span>
              </div>

              <span className="pb-5 text-2xl font-light text-slate-300 select-none sm:pb-6 sm:text-4xl md:text-5xl">
                :
              </span>

              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:text-6xl tabular-nums">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                  Minutes
                </span>
              </div>

              <span className="pb-5 text-2xl font-light text-slate-300 select-none sm:pb-6 sm:text-4xl md:text-5xl">
                :
              </span>

              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tight text-slate-800 sm:text-5xl md:text-6xl tabular-nums select-none">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                  Seconds
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CountdownTimer;
