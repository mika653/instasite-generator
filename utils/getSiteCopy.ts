
interface SiteCopy {
  heroHeadline: string;
  heroDescription: (name: string, city: string) => string;
  heroValue: string;
  locationLabel: string;
  contactSubtitle: string;
  ctaHeading: string;
  ctaDescription: string;
  aboutBio: (name: string, shortName: string) => string;
  services: { id: string; title: string; description: string }[];
}

type Category = 'medical' | 'legal' | 'creative' | 'education' | 'wellness' | 'tech' | 'finance' | 'generic';

const KEYWORDS: Record<Category, string[]> = {
  medical: ['doctor', 'physician', 'dentist', 'dermatologist', 'surgeon', 'pediatrician', 'cardiologist', 'internist', 'ob-gyn', 'obgyn', 'gynecologist', 'ophthalmologist', 'optometrist', 'orthodontist', 'nurse', 'therapist', 'chiropractor', 'psychiatrist', 'neurologist', 'radiologist', 'urologist', 'ent', 'pulmonologist', 'nephrologist', 'gastroenterologist', 'oncologist', 'endocrinologist', 'rheumatologist', 'veterinarian', 'vet', 'midwife', 'dietitian', 'nutritionist', 'pharmacist'],
  legal: ['lawyer', 'attorney', 'paralegal', 'notary', 'legal', 'counsel', 'solicitor', 'barrister', 'mediator', 'arbiter'],
  creative: ['designer', 'art director', 'creative director', 'photographer', 'videographer', 'filmmaker', 'illustrator', 'artist', 'animator', 'graphic', 'architect', 'interior designer', 'stylist', 'makeup artist', 'content creator', 'writer', 'author', 'copywriter', 'editor'],
  education: ['teacher', 'professor', 'tutor', 'instructor', 'lecturer', 'educator', 'coach', 'trainer', 'mentor', 'academic'],
  wellness: ['yoga', 'pilates', 'fitness', 'personal trainer', 'life coach', 'wellness', 'spa', 'massage', 'acupuncturist', 'naturopath', 'holistic', 'meditation'],
  tech: ['developer', 'engineer', 'programmer', 'consultant', 'it ', 'software', 'data', 'cybersecurity', 'web developer', 'devops'],
  finance: ['accountant', 'cpa', 'financial', 'bookkeeper', 'auditor', 'tax', 'investment', 'broker', 'planner', 'advisor'],
  generic: [],
};

function detectCategory(profession: string): Category {
  const lower = profession.toLowerCase();
  for (const [category, keywords] of Object.entries(KEYWORDS) as [Category, string[]][]) {
    if (category === 'generic') continue;
    if (keywords.some(kw => lower.includes(kw))) return category;
  }
  return 'generic';
}

const COPY: Record<Category, SiteCopy> = {
  medical: {
    heroHeadline: 'Trusted medical care, built on',
    heroValue: 'compassion',
    heroDescription: (name, city) => `${name} provides patient-centric healthcare in ${city}. Professional care you can trust.`,
    locationLabel: 'Visit Our Clinic',
    contactSubtitle: 'Have a question or want to schedule a visit? Fill out the form below and our team will respond promptly.',
    ctaHeading: 'Ready to book your visit?',
    ctaDescription: 'Get in touch with our clinic today. We\'re here to help with your healthcare needs.',
    aboutBio: (name, shortName) => `${name} is a dedicated medical professional committed to providing exceptional patient care. With years of clinical experience and a passion for wellness, ${shortName} brings a patient-first approach to every consultation.`,
    services: [
      { id: 'consultation', title: 'General Consultation', description: 'Comprehensive medical evaluations for acute and chronic conditions, with tailored treatment plans for every patient.' },
      { id: 'checkup', title: 'Preventive Health Screening', description: 'Proactive screenings and diagnostics designed to detect potential health concerns early and maintain optimal well-being.' },
      { id: 'coordination', title: 'Care Coordination', description: 'Seamless coordination with specialists, labs, and insurance providers to ensure continuity of your healthcare journey.' },
    ],
  },
  legal: {
    heroHeadline: 'Trusted legal counsel, built on',
    heroValue: 'integrity',
    heroDescription: (name, city) => `${name} provides strategic legal services in ${city}. Professional representation you can rely on.`,
    locationLabel: 'Visit Our Office',
    contactSubtitle: 'Have a legal matter to discuss? Fill out the form below and our office will get back to you promptly.',
    ctaHeading: 'Ready to discuss your case?',
    ctaDescription: 'Schedule a consultation today. We\'re here to protect your rights and interests.',
    aboutBio: (name, shortName) => `${name} is a dedicated legal professional committed to delivering sound counsel and vigorous representation. With years of practice and a passion for justice, ${shortName} brings a client-first approach to every case.`,
    services: [
      { id: 'consultation', title: 'Legal Consultation', description: 'In-depth case analysis and strategic advice tailored to your unique legal situation and objectives.' },
      { id: 'representation', title: 'Case Representation', description: 'Professional advocacy in negotiations, mediations, and court proceedings to protect your interests.' },
      { id: 'documentation', title: 'Document Preparation', description: 'Precise drafting and review of contracts, agreements, and legal documents to safeguard your rights.' },
    ],
  },
  creative: {
    heroHeadline: 'Exceptional creative work, driven by',
    heroValue: 'vision',
    heroDescription: (name, city) => `${name} delivers distinctive creative solutions in ${city}. Bringing ideas to life with precision and artistry.`,
    locationLabel: 'Visit Our Studio',
    contactSubtitle: 'Have a project in mind? Fill out the form below and let\'s start a conversation.',
    ctaHeading: 'Ready to start a project?',
    ctaDescription: 'Let\'s bring your vision to life. Reach out to discuss your next creative endeavor.',
    aboutBio: (name, shortName) => `${name} is a passionate creative professional dedicated to crafting meaningful, impactful work. With a keen eye for detail and years of experience, ${shortName} brings a collaborative, concept-driven approach to every project.`,
    services: [
      { id: 'strategy', title: 'Creative Strategy', description: 'Concept development and brand direction that aligns your visual identity with your goals and audience.' },
      { id: 'production', title: 'Design & Production', description: 'End-to-end execution from initial concepts through polished deliverables, on time and on brand.' },
      { id: 'consulting', title: 'Creative Consulting', description: 'Expert guidance on branding, visual systems, and creative direction to elevate your presence.' },
    ],
  },
  education: {
    heroHeadline: 'Transformative education, rooted in',
    heroValue: 'dedication',
    heroDescription: (name, city) => `${name} provides personalized learning experiences in ${city}. Empowering students to reach their full potential.`,
    locationLabel: 'Visit Our Learning Center',
    contactSubtitle: 'Interested in learning more? Fill out the form below and we\'ll get back to you.',
    ctaHeading: 'Ready to start learning?',
    ctaDescription: 'Take the first step toward your goals. Get in touch to explore how we can help.',
    aboutBio: (name, shortName) => `${name} is a passionate educator committed to unlocking every student's potential. With years of teaching experience and a focus on personalized learning, ${shortName} brings an encouraging, results-driven approach to the classroom.`,
    services: [
      { id: 'tutoring', title: 'Personalized Instruction', description: 'One-on-one and small group sessions tailored to individual learning styles, pace, and goals.' },
      { id: 'curriculum', title: 'Curriculum Development', description: 'Custom lesson plans and learning materials designed to engage students and accelerate progress.' },
      { id: 'assessment', title: 'Progress Assessment', description: 'Regular evaluations and feedback to track development, identify strengths, and address areas for growth.' },
    ],
  },
  wellness: {
    heroHeadline: 'Holistic wellness, guided by',
    heroValue: 'balance',
    heroDescription: (name, city) => `${name} offers personalized wellness programs in ${city}. Helping you achieve balance, strength, and well-being.`,
    locationLabel: 'Visit Our Studio',
    contactSubtitle: 'Ready to invest in your well-being? Fill out the form below and let\'s get started.',
    ctaHeading: 'Ready to start your journey?',
    ctaDescription: 'Take the first step toward a healthier you. Reach out to book your session today.',
    aboutBio: (name, shortName) => `${name} is a dedicated wellness professional committed to helping clients achieve balance and vitality. With a holistic approach and years of experience, ${shortName} creates personalized programs that nurture both body and mind.`,
    services: [
      { id: 'assessment', title: 'Wellness Assessment', description: 'A comprehensive evaluation of your current health, lifestyle, and goals to build a personalized plan.' },
      { id: 'programs', title: 'Custom Programs', description: 'Tailored sessions and routines designed around your unique needs, schedule, and objectives.' },
      { id: 'guidance', title: 'Ongoing Guidance', description: 'Continuous support and adjustments to keep you motivated, accountable, and progressing.' },
    ],
  },
  tech: {
    heroHeadline: 'Innovative solutions, powered by',
    heroValue: 'expertise',
    heroDescription: (name, city) => `${name} delivers cutting-edge technology solutions in ${city}. Turning complex challenges into elegant results.`,
    locationLabel: 'Our Office',
    contactSubtitle: 'Have a project or challenge? Fill out the form below and let\'s discuss solutions.',
    ctaHeading: 'Ready to build something great?',
    ctaDescription: 'Let\'s talk about your next project. Reach out to get started.',
    aboutBio: (name, shortName) => `${name} is a skilled technology professional dedicated to building robust, scalable solutions. With deep technical knowledge and a focus on real-world impact, ${shortName} brings a detail-oriented, collaborative approach to every engagement.`,
    services: [
      { id: 'consulting', title: 'Technical Consulting', description: 'Expert analysis and recommendations to help you make informed decisions about your technology stack and strategy.' },
      { id: 'development', title: 'Custom Development', description: 'End-to-end design and implementation of software, systems, and integrations tailored to your needs.' },
      { id: 'support', title: 'Ongoing Support', description: 'Reliable maintenance, optimization, and troubleshooting to keep your systems running smoothly.' },
    ],
  },
  finance: {
    heroHeadline: 'Sound financial guidance, grounded in',
    heroValue: 'trust',
    heroDescription: (name, city) => `${name} provides expert financial services in ${city}. Clear, honest advice to help you grow and protect your wealth.`,
    locationLabel: 'Visit Our Office',
    contactSubtitle: 'Have a financial question? Fill out the form below and our team will respond promptly.',
    ctaHeading: 'Ready to plan your future?',
    ctaDescription: 'Take control of your finances. Schedule a consultation today.',
    aboutBio: (name, shortName) => `${name} is a dedicated financial professional committed to helping clients achieve their goals with clarity and confidence. With years of experience and a detail-driven approach, ${shortName} provides tailored advice for every stage of life.`,
    services: [
      { id: 'planning', title: 'Financial Planning', description: 'Comprehensive assessments and strategies to help you set, track, and achieve your financial goals.' },
      { id: 'compliance', title: 'Tax & Compliance', description: 'Accurate preparation, filing, and advisory services to keep you compliant and optimized.' },
      { id: 'advisory', title: 'Business Advisory', description: 'Strategic guidance on cash flow, growth planning, and financial decision-making for your business.' },
    ],
  },
  generic: {
    heroHeadline: 'Professional excellence, built on',
    heroValue: 'trust',
    heroDescription: (name, city) => `${name} provides premium professional services in ${city}. Dedicated expertise you can count on.`,
    locationLabel: 'Visit Us',
    contactSubtitle: 'Have a question or want to work together? Fill out the form below and we\'ll get back to you.',
    ctaHeading: 'Ready to get started?',
    ctaDescription: 'Reach out today. We\'re here to help you achieve your goals.',
    aboutBio: (name, shortName) => `${name} is a dedicated professional committed to delivering exceptional results. With years of experience and a passion for excellence, ${shortName} brings a client-first approach to every engagement.`,
    services: [
      { id: 'consultation', title: 'Initial Consultation', description: 'A thorough discussion of your needs, goals, and expectations to build a clear path forward together.' },
      { id: 'execution', title: 'Service Delivery', description: 'Professional execution tailored to your unique requirements, with attention to detail at every step.' },
      { id: 'support', title: 'Ongoing Support', description: 'Continued guidance and follow-through to ensure lasting results and your complete satisfaction.' },
    ],
  },
};

export function getSiteCopy(profession: string): SiteCopy {
  const category = detectCategory(profession);
  return COPY[category];
}
