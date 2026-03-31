import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, image, link }) => {
  return (
    <Link
      to={link}
      className="group relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 hover:border-[#64CEFB]/50 transition-all duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-2 group-hover:text-[#64CEFB] transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-white/80 group-hover:text-[#64CEFB] transition-colors duration-300">
          <span className="text-sm md:text-base">Learn more</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

const ServiceCardsGrid = () => {
  const services = [
    {
      title: 'Website Development',
      image:
        'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
      link: '/services/web-development',
    },
    {
      title: 'Paid Ads',
      image:
        'https://images.pexels.com/photos/6476805/pexels-photo-6476805.jpeg',
      link: '/services/paid-ads',
    },
    {
      title: 'SEO / Ranking',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
      link: '/services/seo-ranking',
    },
    {
      title: 'Custom Dashboards',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b',
      link: '/services/dashboards',
    },
  ];

  return (
    <section className="bg-black py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsGrid;
