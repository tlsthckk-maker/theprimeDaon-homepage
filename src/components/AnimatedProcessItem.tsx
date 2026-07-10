'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface StepData {
  title: string;
  desc: string;
  detail: string[];
  image: string;
}

interface AnimatedProcessItemProps {
  step: StepData;
  index: number;
}

export default function AnimatedProcessItem({ step, index }: AnimatedProcessItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-[50px]');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const isEven = index % 2 === 1; // 0-indexed, so 1, 3 are even (2nd, 4th item)
  const stepNumber = `STEP 0${index + 1}`;

  return (
    <div
      ref={itemRef}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-32 opacity-0 translate-y-[50px] transition-all duration-1000 ease-out ${
        isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 w-full relative rounded-xl overflow-hidden h-[350px] lg:h-[500px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] group">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover brightness-80 transition-all duration-500 group-hover:brightness-100 group-hover:scale-105"
        />
      </div>
      
      <div className="flex-1 w-full">
        <span className="text-sm text-[#8b7355] font-bold tracking-[3px] mb-4 block">
          {stepNumber}
        </span>
        <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white">
          {step.title}
        </h3>
        <p className="text-base lg:text-lg text-gray-400 leading-relaxed font-light break-keep mb-8">
          {step.desc}
        </p>
        <ul className="mt-8 space-y-3">
          {step.detail.map((item, i) => (
            <li key={i} className="text-[15px] text-[#8b7355] font-medium flex items-start gap-2">
              <span className="text-xl leading-none mt-[-2px]">&bull;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
