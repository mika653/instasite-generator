
import React, { useState } from 'react';
import { User, Mail, Phone, MessageSquare, MapPin, Clock, CheckCircle } from 'lucide-react';
import { ModularBadge } from '../components/ModularBadge';
import { CLINIC_INFO } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-salmon-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-salmon-500" />
          </div>
          <h2 className="text-3xl font-bold mb-2">Message Sent</h2>
          <p className="text-stone-500 max-w-sm mx-auto">Thank you, {name}. We'll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ModularBadge label="Contact Module" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
      <p className="text-xl text-stone-500 mb-16 max-w-2xl">
        Have a question or want to schedule a visit? Fill out the form below and our team will respond promptly.
      </p>

      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2">
          <div className="bg-white rounded-3xl luxury-shadow p-10 border border-stone-100">
            <div className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                <input
                  type="tel"
                  placeholder="Mobile Number (+63)"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-stone-400" size={18} />
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all"
                />
              </div>
              <p className="text-xs text-stone-400">
                By submitting, you agree to our data privacy policy in compliance with the Philippines Data Privacy Act of 2012.
              </p>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!name}
                className="bg-salmon-500 text-white px-8 py-4 rounded-full font-bold hover:bg-salmon-600 disabled:opacity-30 transition-all w-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Address</h4>
              <p className="text-stone-800 font-medium text-sm">{CLINIC_INFO.address}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Phone</h4>
              <p className="text-stone-800 font-medium text-sm">{CLINIC_INFO.phone}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-salmon-50 p-2 rounded-lg h-fit text-salmon-400">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-stone-400 mb-1">Hours</h4>
              <p className="text-stone-800 font-medium text-sm">{CLINIC_INFO.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
