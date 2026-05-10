// --- 1. Interfaces ---
export interface Session {
  day: string;
  time: string;
  focus: string;
}

export interface Dojo {
  id: number;
  name: string;
  senseiName: string;
  senseiId: string;
  address: string;
  phone: string;
  displayPhone: string;
  mapLink: string;
  sessions: Session[];
  features: string[];
  image: string;
}

export interface Sensei {
  name: string;
  rank: string;
  role: string;
  whatsapp: string;
  bio: string;
  image: string;
  experience: string;
  qualifications: string[];
  additionalCerts: string[];
  specializations: string[];
}

// --- 2. Sensei Details ---
export const senseiDetails: Record<string, Sensei> = {
    "s-c-herath": {
    name: "Shihan S C Herath",
    rank: "6th Dan Black Belt",
    role: "Chief Instructor",
    experience: "35+ Years",
    whatsapp: "94766059600",
    image: "/coaches/shihan-herath.jpg",
    bio: "Mastering the mind is as important as mastering the body. My mission is to forge resilient spirits through the authentic path of Shotokan Karate.",
    qualifications: [
      "Former National Team Coach",
      "WKF Certified International Referee",
      "SLKF Executive Committee Member",
      "Chief Instructor of Seishinwakai Sri Lanka"
    ],
    additionalCerts: [
      "Advanced Sports Science Diploma",
      "First Aid & Injury Management Certified",
      "Physical Fitness Specialist"
    ],
    specializations: ["Elite Kumite Tactics", "Advanced Kata Mastery", "Mental Conditioning"]
  },
  "pavindu-livera": {
    name: "Sensei Pavindu Livera",
    rank: "Black Belt",
    role: "Senior Instructor",
    experience: "10+ Years",
    whatsapp: "94766059600",
    image: "/sensei-pavindu.jpg",
    bio: "Expert in modern tournament Kumite tactics and focused on elite athlete development programs.",
    qualifications: [
      "National Kumite Gold Medalist",
      "District Karate Champion",
      "Qualified Sports Instructor"
    ],
    additionalCerts: [
      "Youth Leadership Training",
      "Functional Strength Coach",
      "Sports Nutrition Basic Certification"
    ],
    specializations: ["Tournament Preparation", "Kids Karate Foundation", "Speed & Agility"]
  },
  "rohan-de-silva": {
    name: "Sensei Rohan de Silva",
    rank: "5th Dan Black Belt",
    role: "Chief Instructor",
    experience: "25+ Years",
    whatsapp: "94766059600", // නිවැරදි අංකය ඇතුළත් කරන්න
    image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=1974&auto=format&fit=crop",
    bio: "Over 25 years of experience in Shotokan Karate. National team coach and WKF certified referee.",
    qualifications: [
      "National Team Coach",
      "WKF Certified Referee",
      "Senior Technical Advisor"
    ],
    additionalCerts: [
      "WKF Certified Coach",
      "Advanced Sports Coaching Diploma"
    ],
    specializations: ["Kumite Tactics", "Professional Coaching", "Refereeing"]
  },
  "amal-perera": {
    name: "Sensei Amal Perera",
    rank: "3rd Dan Black Belt",
    role: "Senior Instructor",
    experience: "10+ Years",
    whatsapp: "94766059600",
    image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?q=80&w=1974&auto=format&fit=crop",
    bio: "Specializes in Kumite tactics and youth development programs with 10+ years of coaching.",
    qualifications: [
      "South Asian Bronze Medalist",
      "Former National Athlete"
    ],
    additionalCerts: [
      "Fitness Specialist Certification",
      "Youth Development Program Lead"
    ],
    specializations: ["Kumite Tactics", "Youth Development", "Physical Fitness"]
  },
  "nuwan-perera": {
    name: "Sensei Nuwan Perera",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "5+ Years",
    whatsapp: "94766059600",
    image: "https://images.unsplash.com/photo-1509564324749-47088719ecda?q=80&w=2070&auto=format&fit=crop",
    bio: "Expert in Kids karate and foundation movements. Dedicated to building the next generation.",
    qualifications: [
      "District Champion",
      "Qualified Foundation Instructor"
    ],
    additionalCerts: [
      "First Aid Certified",
      "Kids Behavioral Training"
    ],
    specializations: ["Kids Karate", "Basic Foundation", "Kata Specialist"]
  },
};

// --- 3. Dojo Details ---
export const dojos: Dojo[] = [
  {
    id: 1,
    name: "Hombo Dojo - Piliyandala",
    senseiName: "Shihan S C Herath",
    senseiId: "s-c-herath",
    address: "123 Galle Road, Piliyandala",
    phone: "+94766059600",
    displayPhone: "+94 76 605 9600",
    mapLink: "https://maps.google.com/...",
    sessions: [
      { day: "Monday", time: "4:00 PM - 6:00 PM", focus: "Kumite" },
      { day: "Wednesday", time: "4:30 PM - 6:30 PM", focus: "Kata" },
      { day: "Friday", time: "4:00 PM - 6:00 PM", focus: "Physical" }
    ],
    features: ["Kids & Adults", "Tournament Training", "Black Belt Coaching"],
    image: "/Hero-Image.jpg"
  },
  {
    id: 2,
    name: "YMCA Branch - Moratuwa",
    senseiName: "Sensei Pavindu Livera",
    senseiId: "pavindu-livera",
    address: "New Galle Road, Moratuwa",
    phone: "+94766059600",
    displayPhone: "+94 76 605 9600",
    mapLink: "https://maps.google.com/...",
    sessions: [
      { day: "Thursday", time: "4:00 PM - 6:00 PM", focus: "Kata" },
      { day: "Saturday", time: "7:30 AM - 9:00 AM", focus: "Kumite" }
    ],
    features: ["Kids Specialized", "Self Defense", "Physical Fitness"],
    image: "/Hero-Image.jpg"
  }
  // තව Dojos අවශ්‍ය පරිදි මෙතැනට එක් කරන්න...
];