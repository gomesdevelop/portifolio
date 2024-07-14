"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    count: 12,
    title: "Years of experience",
  },
  {
    count: 26,
    title: "Projects completed",
  },
  {
    count: 8,
    title: "Techonologies mastered",
  },
  {
    count: 500,
    title: "Code commits",
  },
];

const Stats: React.FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] max-auto xl:max-w-none">
          {stats.map(({ count, title }, index) => (
            <div
              key={title}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extralight"
              />
              <p
                className={`${
                  title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
