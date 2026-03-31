import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, image, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
    >
      <Link
        to={link}
        className="group relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-[#64CEFB]/50 transition-all duration-500 block"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
        onMouseMove={(e) => {
          const card = e.currentTarget;
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Overlay with gradient animation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
          
          {/* Glassmorphism shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#64CEFB]/20 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 group-hover:text-[#64CEFB] transition-colors duration-300"
          >
            {title}
          </motion.h3>
          <div className="flex items-center gap-2 text-white/80 group-hover:text-[#64CEFB] transition-colors duration-300">
            <span className="text-sm md:text-base">Learn more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Corner glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#64CEFB]/0 group-hover:bg-[#64CEFB]/20 blur-3xl transition-all duration-500 rounded-full"></div>
      </Link>
    </motion.div>
  );
};

const ServiceCardsGrid = () => {
  const services = [
  {
    title: 'Website Development',
    image:
    'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    link: '/services/web-development'
  },
  {
    title: 'Paid Ads',
    image:
    'https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg',
    link: '/services/paid-ads'
  },
  {
    title: 'SEO / Ranking',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    link: '/services/seo-ranking'
  },
  {
    title: 'Custom Dashboards',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
    link: '/services/dashboards'
  }];


  return (
    <section className="bg-black pt-0 pb-96">
      <div className="max-w-7xl !-my-[300px] !pl-[16px] !pr-[16px] md:!px-6 lg:!px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) =>
          <ServiceCard
            key={index}
            index={index}
            title={service.title}
            image={service.image}
            link={service.link} />

          )}
        </div>
      </div>
    </section>);

};

export default ServiceCardsGrid;