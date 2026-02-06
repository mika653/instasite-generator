
import React from 'react';
import { ModularBadge } from '../components/ModularBadge';
import { useGenerator } from '../context/GeneratorContext';

const extractShortName = (fullName: string) => {
  const parts = fullName.split(' ');
  if (parts.length <= 2) return fullName;
  if (parts[0].endsWith('.')) {
    return `${parts[0]} ${parts[parts.length - 1]}`;
  }
  return `${parts[0]} ${parts[parts.length - 1]}`;
};

const About = () => {
  const { data } = useGenerator();
  const shortName = extractShortName(data.name);
  const profession = data.profession || 'professional services';

  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <ModularBadge label="Professional Profile Module" />
      <h1 className="text-3xl sm:text-5xl font-bold mb-10">About {shortName}</h1>
      <div className="prose prose-stone lg:prose-xl">
        <p className="text-xl text-stone-600 leading-relaxed mb-8">
          {data.name} is a dedicated {profession.toLowerCase()} professional committed to providing exceptional service and care.
          With years of experience and a passion for excellence, {shortName} brings a client-first
          approach to every interaction.
        </p>
        <h3 className="text-2xl font-bold mb-4">Background & Experience</h3>
        <ul className="space-y-4 text-stone-600 mb-10">
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2020</span>
            <span>Advanced professional certification and continuing education</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2015</span>
            <span>Established independent practice with focus on personalized care</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="font-bold text-salmon-600">2010</span>
            <span>Completed professional training and earned licensure</span>
          </li>
        </ul>
        <h3 className="text-2xl font-bold mb-4">Professional Philosophy</h3>
        <p className="text-stone-600 leading-relaxed italic">
          "I believe that the best outcomes come from genuine partnership. My goal is to listen deeply,
          understand thoroughly, and work together with every client to build a sustainable path to success."
        </p>
      </div>
    </div>
  );
};

export default About;
