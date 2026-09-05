import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  badgeText?: string;
  onCtaClick?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  ctaText,
  badgeText,
  onCtaClick
}) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#1E3A8A] text-white p-6 shadow-md border border-slate-700/50">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 rounded-full bg-amber-400/10 blur-2xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col gap-3">
        {badgeText && (
          <div className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badgeText}</span>
          </div>
        )}

        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-slate-200 text-sm leading-relaxed max-w-xl">
          {subtitle}
        </p>

        {ctaText && onCtaClick && (
          <div className="pt-2">
            <button
              id="hero-banner-cta-btn"
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A192F] font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export const HeroBannerSlider: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  const slides = [
    {
      title: 'Find Your Next Car in the USA',
      subtitle: 'Compare millions of new & used listings from Edmunds, CarsDirect, TrueCar, CarGurus & more.',
      ctaText: 'Browse Used Cars',
      badgeText: 'Smart Search',
      route: 'buy_cars'
    },
    {
      title: 'Calculate Auto Loan Payments',
      subtitle: 'Accurate monthly estimates, sales tax calculations, and loan amortization breakdown.',
      ctaText: 'Open Loan Calculator',
      badgeText: 'Finance Tool',
      route: 'calculator_detail/loan'
    },
    {
      title: 'Check VIN History & Recalls',
      subtitle: 'Official NMVTIS records, accident reports, odometer checks & NHTSA recall alerts.',
      ctaText: 'Decode VIN Now',
      badgeText: 'Safety First',
      route: 'vehicle_history'
    },
    {
      title: 'What Is Your Car Worth?',
      subtitle: 'Get instant True Market Value (TMV®) and instant cash offers from top US buyers.',
      ctaText: 'Value Your Car',
      badgeText: 'Free Valuation',
      route: 'value_car'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative group">
      <HeroBanner
        title={currentSlide.title}
        subtitle={currentSlide.subtitle}
        ctaText={currentSlide.ctaText}
        badgeText={currentSlide.badgeText}
        onCtaClick={() => onNavigate(currentSlide.route)}
      />

      {/* Slide Indicators */}
      <div className="absolute bottom-3 right-5 flex items-center gap-1.5 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
