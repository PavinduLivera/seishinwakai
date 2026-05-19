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
  fullStory?: string[];
  image: string;
  experience: string;
  achievements: string[];
  qualifications: string[];
  additionalCerts: string[];
  specializations: string[];
}

// --- 2. Sensei Details ---
export const senseiDetails: Record<string, Sensei> = {
    "s-c-herath": {
    name: "Shihan S C Herath",
    rank: "5th Dan Black Belt",
    role: "Founder & Chief Instructor",
    experience: "25+ Years",
    whatsapp: "94779188042",
    image: "/coaches/shihan-herath.jpg",
    bio: "Welcome to Seishinwakai. Our foundation is built upon decades of discipline, competitive excellence, and a profound dedication to the art of Shotokan Karate.",
    fullStory: [
      "The journey began in 1999 with the prestigious Japan Karate Association (JKA). Displaying early promise and dedication, our founder achieved his Black Belt 1st Dan in 2005, followed by his 2nd Dan in 2007. Between 1999 and 2012, he served as a dedicated player, instructor, and branch member under the JKA banner, laying a rock-solid foundation in traditional Shotokan techniques.",
      "His competitive career is marked by extraordinary success on both national and international stages. Selected for the Junior National Karate Team in 2004, he dominated the arena as the Junior National Champion consecutively from 2005 to 2008. In 2007, he brought glory to Sri Lanka by winning the Silver Medal in the Kumite event at the Junior South Asian Open Karate Championship in India. The following year, he represented the nation at the 2008 Asian Karate Championship.",
      "Parallel to his civilian achievements, he served in the Sri Lanka Air Force from 2008 to 2019, where he proudly captained the Air Force Karate Team. During his final two years of service, his vast technical expertise was called upon to design a highly specialized 'Hand-to-Hand Combat' course for the Elite Special Airborne Force.",
      "As an educator, his impact on the next generation of martial artists is immeasurable. He has served as a respected coach for numerous prestigious institutions, including the General Sir John Kotelawala Defence University (KDU), the CSC Army Unit, Visakha Vidyalaya, Devi Balika Vidyalaya, and St. John's College.",
      "Driven by a vision to cultivate the true spirit of Shotokan Karate, he founded the Japan Karate Do Shotokan Ryu Seishinwakai Association in 2025. Today, as the Founder and Chief Instructor, he continues to share his lifelong expertise, shaping the minds and bodies of the next generation of karatekas."
    ],
    qualifications: [
      "Junior National Champion (2005 - 2008)",
      "Junior South Asian Open Silver Medalist (2007)",
      "Former Air Force Karate Team Captain",
      "Hand-to-Hand Combat Course Designer for Special Airborne Force"
    ],
    additionalCerts: [
      "WKF Certified Coach",
      "Specialized Military Combat Instructor"
    ],
    specializations: ["Elite Kumite Tactics", "Advanced Kata Mastery", "Mental Conditioning", "Traditional Shotokan", "Hand-to-Hand Combat", "Elite Tournament Prep"],
    achievements: [    ]
  },

  "thilini-kulathunga": {
    name: "Sensei P. Thilini Priyangani Kulathunga",
    rank: "4th Dan Black Belt",
    role: "Assistant Chief Instructor",
    experience: "25+ Years", 
    whatsapp: "94771514526", 
    image: "/coaches/sensei-thilini.jpg", 
    bio: "Serving as the Assistant Chief Instructor, bringing with her years of dedication, competitive experience, and professional expertise in both Karate and fitness training.",
    fullStory: [
      "P. Thilini Priyangani Kulathunga serves as the Assistant Chief Instructor of the Japan Karate Do Shotokan Ryu Seishinwakai Association, bringing with her years of dedication, competitive experience, and professional expertise in both Karate and fitness training.",
      "Her journey in Karate began in the year 2000 under the Japan Karate Association (JKA), where she developed a strong foundation in traditional Shotokan Karate through discipline, commitment, and continuous training. From an early stage, she actively participated in national-level Karate championships and established herself as a talented and accomplished athlete.",
      "Through years of dedication and technical excellence, she achieved the prestigious rank of 4th Dan (Yondan) under the Japan Karate Toryukai Association, reflecting her advanced knowledge, leadership, and contribution to the martial art.",
      "As an experienced instructor, she has trained students from numerous international schools across Sri Lanka, playing a significant role in developing skilled Karate athletes and nurturing discipline, confidence, and sportsmanship among young practitioners. Many of her students have successfully competed in various tournaments and demonstrated outstanding performances in the field of Karate.",
      "In addition to her martial arts achievements, she is also a registered and qualified Fitness Trainer certified by the Lanka Institute of Fitness. Her expertise in physical fitness and athlete conditioning further strengthens her ability to guide students toward both physical excellence and personal development."
    ],
    qualifications: [
      "4th Dan (Yondan) - Japan Karate Toryukai",
      "Experienced International Schools Coach",
      "Accomplished National Level Athlete"
    ],
    additionalCerts: [
      "Certified Fitness Trainer (Lanka Institute of Fitness)",
      "Athlete Conditioning Specialist"
    ],
    specializations: ["Traditional Shotokan", "Kids & Youth Development", "Physical Fitness & Conditioning"],
    achievements: [    ]
  },


  "pavindu-livera": {
    name: "Sensei Pavindu Livera",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "10+ Years",
    whatsapp: "94766059600",
    image: "/coaches/sensei-pavindu.jpg",
    bio: "Expert in modern tournament Kumite tactics and focused on elite athlete development programs.",
    qualifications: [
      "SLKF Certified Coach",
      "School Karate Association Certified Coach",
      "SLKF Kumite Judge (B)"
    ],
    additionalCerts: [
      "Youth Leadership Training",
      "Functional Strength Coach",
    ],
    specializations: ["Tournament Preparation", "Kids Karate Foundation", "Speed & Agility"],
    achievements: [
      "All Island Senior School Championship 2019 Under 21 Kumite -55Kg: Gold Medalist"
    ]
  },

  "tharidu-eranda": {
    name: "Sensei Tharidu Eranda",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "10+ Years",
    whatsapp: "947XXXXXXXX", // නිවැරදි අංකය ඇතුළත් කරන්න
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", // නිවැරදි Image URL එක ඇතුළත් කරන්න
    bio: "Over 10 years of experience in Shotokan Karate. SLKF coach",
    qualifications: [
      "SLKF Certified Coach"
    ],
    additionalCerts: [],
    specializations: ["Kumite", "Kata", "Junior Training"] ,
    achievements: [    ]
  },

  "olan-bermil": {
    name: "Sensei S Olan Bermil Fernando",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "10+ Years",
    whatsapp: "94789901480", // නිවැරදි අංකය ඇතුළත් කරන්න
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png", 
    bio: "Over 10 years of experience in Shotokan Karate.",
    qualifications: [
      "Instructor at Seishinwakai Dojo Piliyandala"
    ],
    additionalCerts: [],
    specializations: ["Kumite Tactics", "Kata", "Junior Training"], // අවශ්‍ය පරිදි වෙනස් කරගන්න
    achievements: [
      "49th National Sports Festival -60Kg Kumite Gold Medalist",
      "All Island School Games 2025 Under 21 Kumite -67Kg: Gold Medalist"
    ]
  },

  "sandula-sewmin": {
    name: "Sensei Sandula Sewmin Fonseka",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "7+ Years",
    whatsapp: "94743544108", // නිවැරදි අංකය ඇතුළත් කරන්න
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    bio: "Over 7 years of experience in Shotokan Karate. Instructor at Seishinwakai Dojo Piliyandala.",
    qualifications: [
      "Instructor at Seishinwakai Dojo Piliyandala"
    ],
    additionalCerts: [],
    specializations: ["Kumite Tactics", "Kata Training", "Junior Training"], // අවශ්‍ය පරිදි වෙනස් කරගන්න
    achievements: [
      "South Asian Karate Championship 2023 (Kumite) - Bronze Medalist",
      "Sri Lanka School's Senior Karate Championship 2022 (Kumite) - Gold Medalist",
      "School Games (Western Province) (Kumite) - Gold Medalist",
      "Sri Lanka Schools Karate (Kata) Championship 2021 - Gold Medalist"
    ]
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
    mapLink: "https://maps.app.goo.gl/WWatjJQidTrdjrLx8?g_st=ic",
    sessions: [
      { day: "Monday", time: "4:00 PM - 6:30 PM", focus: "Kata" },
      { day: "Tuesday", time: "4:00 PM - 6:30 PM", focus: "Kids Kata" },
      { day: "Wednesday", time: "4:00 PM - 6:30 PM", focus: "Kumite" },
      { day: "Thursday", time: "4:00 PM - 6:30 PM", focus: "Kids Kumite" },
      { day: "Friday", time: "4:00 PM - 6:30 PM", focus: "Kata" },
      { day: "Saturday", time: "2:00 PM - 4:00 PM", focus: "Kids Kumite" },
      { day: "Saturday", time: "4:00 PM - 6:30 PM", focus: "Kumite" },
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
    mapLink: "https://maps.app.goo.gl/14mRgbp2YYwnqi6F6?g_st=ic",
    sessions: [
      { day: "Thursday", time: "4:00 PM - 6:00 PM", focus: "Kata" },
      { day: "Saturday", time: "7:30 AM - 9:00 AM", focus: "Kumite" }
    ],
    features: ["Kids Specialized", "Physical Fitness"],
    image: "/Hero-Image.jpg"
  },
  {
    id: 3,
    name: "Dehiwala Dojo",
    senseiName: "Sensei Tharidu Eranda",
    senseiId: "tharidu-eranda",
    address: "Kawdana Road, Dehiwala",
    phone: "+94701074489",
    displayPhone: "+94 70 107 4489",
    mapLink: "https://maps.app.goo.gl/wYkRcEfEGpPzzVss8",
    sessions: [
      { day: "Tuesday", time: "4:00 PM - 6:00 PM", focus: "Kata" },
      { day: "Saturday", time: "1:30 PM - 3:00 PM", focus: "Kumite" }
    ],
    features: ["Kids Specialized", "Self Defense", "Physical Fitness"],
    image: "/Hero-Image.jpg"
  }
  // තව Dojos අවශ්‍ය පරිදි මෙතැනට එක් කරන්න...
];