'use client';

import React, { useEffect, useRef } from 'react';

interface AppleProcessClientProps {
  dict: any;
}

export default function AppleProcessClient({ dict }: AppleProcessClientProps) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.4 } // Show slightly earlier
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      label: "Stage 01",
      title: dict.s1Title,
      desc: dict.s1Desc,
      image: "/cad_step.jpg"
    },
    {
      label: "Stage 02",
      title: dict.s2Title,
      desc: dict.s2Desc,
      image: "/laser_step.jpg"
    },
    {
      label: "Stage 03",
      title: dict.s3Title,
      desc: dict.s3Desc,
      image: "/press_step.jpg"
    },
    {
      label: "Stage 04",
      title: dict.s4Title,
      desc: dict.s4Desc,
      image: "/sewing_step.jpg"
    }
  ];

  return (
    <div className="w-full bg-black">
      <style jsx>{`
        .apple-section {
          position: relative;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .apple-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.1);
          opacity: 0;
          transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.5s ease;
        }
        .apple-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%);
        }
        .apple-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(40px);
          transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 1.2s ease;
          transition-delay: 0.3s;
        }
        
        .apple-section.is-visible .apple-bg {
          transform: scale(1.0);
          opacity: 1;
        }
        .apple-section.is-visible .apple-content {
          opacity: 1;
          transform: translateY(0);
        }

        .step-label {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          color: #8b7355;
          letter-spacing: 0.15em;
          margin-bottom: 1rem;
          display: block;
        }
        .step-title {
          font-size: 3.5rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          word-break: keep-all;
        }
        .step-desc {
          font-size: 1.25rem;
          font-weight: 300;
          color: #ccc;
          line-height: 1.6;
          word-break: keep-all;
        }
        
        @media (max-width: 768px) {
          .step-title { font-size: 2.5rem; }
          .step-desc { font-size: 1.1rem; }
        }
      `}</style>

      {stages.map((stage, index) => (
        <section 
          key={index}
          className="apple-section" 
          ref={(el) => { sectionRefs.current[index] = el; }}
        >
          <div 
            className="apple-bg" 
            style={{ backgroundImage: `url('${stage.image}')` }} 
          />
          <div className="apple-overlay" />
          <div className="apple-content">
            <span className="step-label">{stage.label}</span>
            <h2 className="step-title">{stage.title}</h2>
            <p className="step-desc">{stage.desc}</p>
          </div>
        </section>
      ))}
    </div>
  );
}
