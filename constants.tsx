
import React from 'react';
import { Service } from './types';

export const DOCTOR_NAME = "Dr. Maria Santos, MD";
export const DOCTOR_TITLE = "Consultant Physician | Internal Medicine";

export const CLINIC_INFO = {
  name: "St. Luke's Medical Center",
  address: "Room 402, Medical Arts Building, Global City, Taguig",
  phone: "+63 2 8789 7700",
  hours: "Mon - Fri: 9:00 AM - 5:00 PM",
};

export const SERVICES: Service[] = [
  {
    id: "consultation",
    title: "General Consultation",
    description: "Comprehensive medical evaluations for acute and chronic conditions, ensuring tailored treatment plans for every patient.",
    icon: "Stethoscope"
  },
  {
    id: "checkup",
    title: "Executive Health Check",
    description: "Preventative screenings and diagnostics designed for busy professionals to maintain peak physical health.",
    icon: "ClipboardCheck"
  },
  {
    id: "hmo",
    title: "Insurance Coordination",
    description: "Seamless processing for all major Filipino HMOs (Maxicare, Intellicare, Medicard) and international insurance.",
    icon: "ShieldCheck"
  }
];
