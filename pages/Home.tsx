
import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';
import { ModularBadge } from '../components/ModularBadge';
import { useGenerator } from '../context/GeneratorContext';
import { getSiteCopy } from '../utils/getSiteCopy';

const Home = () => {
  const { data } = useGenerator();
  const copy = getSiteCopy(data.profession);
  const heroImage = data.photoUrl || 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800';
  const cityLabel = data.city || 'Metro Manila';
  const practiceName = data.practiceName || CLINIC_INFO.name;
  const phoneNumber = data.phone || CLINIC_INFO.phone;

  return (
    <div className="pb-20">
      {/* HERO SECTION */}
      <section className="relative bg-stone-50 overflow-hidden py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <ModularBadge label="Hero Section Module" />
              <h1 className="text-4xl lg:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
                {copy.heroHeadline} <span className="italic serif">{copy.heroValue}</span>.
              </h1>
              <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-xl">
                {copy.heroDescription(data.name, cityLabel)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-salmon-500 text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-600 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  Get in Touch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden luxury-shadow max-w-sm mx-auto lg:max-w-none">
                <img
                  src={heroImage}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-salmon-100/20 -skew-x-12 transform translate-x-1/2 hidden lg:block" />
      </section>

      {/* SERVICES LIST */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ModularBadge label="Services Module" />
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="space-y-8">
          {copy.services.map((service) => (
            <div key={service.id} className="flex gap-6 items-start p-6 rounded-2xl hover:bg-stone-50 transition-all">
              <div className="w-10 h-10 bg-salmon-50 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 size={22} className="text-salmon-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION INFO */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModularBadge label="Location Module" />
          <h2 className="text-4xl font-bold mb-12">{copy.locationLabel}</h2>
          <div className="bg-white rounded-3xl p-10 luxury-shadow border border-stone-100 max-w-2xl">
            <h3 className="serif text-2xl font-bold mb-8 text-stone-900">{practiceName}</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Location</h4>
                  <p className="text-stone-800 font-medium">{data.city ? `${data.city}, Philippines` : CLINIC_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Hours</h4>
                  <p className="text-stone-800 font-medium">{CLINIC_INFO.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Phone</h4>
                  <p className="text-stone-800 font-medium">{phoneNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-salmon-600 to-salmon-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">{copy.ctaHeading}</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            {copy.ctaDescription}
          </p>
          <Link to="/contact" className="bg-white text-salmon-700 px-10 py-5 rounded-full font-bold hover:bg-salmon-50 transition-all inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
