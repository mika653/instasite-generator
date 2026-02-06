
import React, { useState, useRef } from 'react';
import { User, Camera, ArrowRight, Briefcase, Building2, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { useGenerator } from '../context/GeneratorContext';

const IntakeForm = () => {
  const { submitForm } = useGenerator();
  const [name, setName] = useState('');
  const [profession, setProfession] = useState('');
  const [practiceName, setPracticeName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhotoFile(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    submitForm({
      name: name.trim(),
      photoFile,
      profession: profession.trim(),
      practiceName: practiceName.trim(),
      phone: phone.trim(),
      city: city.trim(),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <span className="insta-badge text-[11px] font-bold text-salmon-500 border-salmon-300 mb-4 inline-block">
            InstaSite™ Demo Generator
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            See your site in seconds
          </h1>
          <p className="text-stone-500 leading-relaxed">
            Fill in your details to preview a personalized InstaSite built just for you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl luxury-shadow p-8 sm:p-10 border border-stone-100">
          {/* Photo Upload */}
          <div className="flex justify-center mb-8">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="relative w-28 h-28 rounded-full border-2 border-dashed border-stone-200 hover:border-salmon-400 transition-colors flex items-center justify-center overflow-hidden group"
            >
              {photoPreview ? (
                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center gap-1 text-stone-400 group-hover:text-salmon-500 transition-colors">
                  <Camera size={24} />
                  <span className="text-[11px] font-medium">Add Photo</span>
                </div>
              )}
              {photoPreview && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera size={20} className="text-white" />
                </div>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>
          <p className="text-center text-xs text-stone-400 -mt-4 mb-8">Optional — best with a portrait photo</p>

          <div className="space-y-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="Your full name (e.g. Dr. Juan Reyes)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all text-stone-800"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </div>

            {/* Profession */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="Profession (e.g. Dermatologist, Dentist)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all text-stone-800"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </div>

            {/* Practice Name */}
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="Practice name (e.g. Reyes Dental Clinic)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all text-stone-800"
                value={practiceName}
                onChange={(e) => setPracticeName(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="tel"
                placeholder="Phone number (e.g. +63 917 123 4567)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all text-stone-800"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* City */}
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                type="text"
                placeholder="City or area (e.g. Makati City)"
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-stone-200 focus:border-salmon-500 outline-none transition-all text-stone-800"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full bg-salmon-500 text-white py-4 rounded-full font-bold hover:bg-salmon-600 disabled:opacity-30 transition-all flex items-center justify-center gap-2 group mt-6"
          >
            Let Me Visualize It
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* Disclaimer */}
        <div className="flex items-start gap-2 mt-6 px-2">
          <ShieldCheck size={14} className="text-stone-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-stone-400 leading-relaxed">
            Your information is never stored, collected, or sent to any server. Everything runs locally in your browser and disappears when you close this page.
          </p>
        </div>

        <p className="text-center text-xs text-stone-400 mt-4">
          Powered by <span className="font-semibold">DFB Digital</span> — No account required
        </p>
      </div>
    </div>
  );
};

export default IntakeForm;
