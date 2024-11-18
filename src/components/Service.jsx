import React from 'react';

const services = [
  {
    img: '/louis-hansel-XYsMYtoM6dk-unsplash.jpg',
    title: 'Swedish Massage',
    description: 'Gentle and relaxing massage to release tension.',
  },
  {
    img: '/louis-hansel-XYsMYtoM6dk-unsplash.jpg',
    title: 'Deep Tissue Massage',
    description: 'Focused pressure to relieve chronic pain.',
  },
  {
    img:"/louis-hansel-XYsMYtoM6dk-unsplash.jpg",
    title: 'Aromatherapy',
    description: 'Massage with essential oils for stress relief.',
  },
];

const ServicesSection = () => {
  return (
    <div id="services" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center border p-6 rounded-lg">
            <img
              src={service.img}
              alt={service.title}
              className="h-52 w-full object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
