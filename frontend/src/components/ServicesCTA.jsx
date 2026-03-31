import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section className="relative min-h-[80vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center py-16 md:py-24">
        <div className="space-y-8 md:space-y-10">
          {/* Desktop Title */}
          <h2 className="hidden md:block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
            Each Project we Undertake is a
            <br />
            <span className="text-[#64CEFB]">Unique Opportunity.</span>
          </h2>

          {/* Mobile Title */}
          <h2 className="md:hidden text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Each Project, Our Design is
            <br />
            <span className="text-[#64CEFB]">Great.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Ready to take the next step? Join us now and start transforming
            your vision into reality with expert support.
          </p>

          {/* CTA Button */}
          <div className="pt-4 md:pt-6">
            <Link
              to="/qualify"
              className="inline-flex items-center gap-3 bg-[#64CEFB] hover:bg-[#64CEFB]/90 text-black font-bold rounded-full px-8 md:px-12 py-4 md:py-5 transition-all duration-300 hover:scale-105 shadow-xl shadow-[#64CEFB]/25 group"
            >
              <span className="text-base md:text-lg">
                Book FREE Strategy Call
              </span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
