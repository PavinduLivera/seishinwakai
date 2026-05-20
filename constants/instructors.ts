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
    name: "Shihan Samuel Chaminda Herath",
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
      "Founder & Chief Instructor of Japan Karate Do Shotokan Ryu Seishinwakai Association",
    "5th Dan Black Belt Holder",
    "Former Chief Instructor of Japan Karate Do Shotokan Ryu Toryukai Association (2012 - 2025)",
    "Former Captain of Sri Lanka Air Force Karate Team",
    "Coach and Instructor for KDU, CSC Army Unit, Visakha Vidyalaya, Devi Balika Vidyalaya, and St. John's College"

    ],
    additionalCerts: [
      "Specialized Military Combat Instructor",
      "Specialized Hand-to-Hand Combat Program Designer for Elite Special Airborne Force"

    ],
    specializations: ["Elite Kumite Tactics", "Advanced Kata Mastery", "Mental Conditioning", "Traditional Shotokan", "Hand-to-Hand Combat", "Elite Tournament Prep", "High Performance Coaching"],
    achievements: [  
      "Junior National Karate Team Representative - 2004",
      "Junior National Champion (2005 - 2008)",
      "Junior South Asian Open Karate Championship 2007 - Silver Medalist (Kumite)",
      "Represented Sri Lanka at the Asian Karate Championship 2008",
      "Senior National Karate Team Representative (2009 - 2018)",
      "National Champion in -60kg, -67kg, and -75kg Kumite Events",
      "National Open Kata Champion",
      "Captain of Sri Lanka Air Force Karate Team (2008 - 2019)",
      "Produced Numerous National and International Level Athletes",
      "Founder of Japan Karate Do Shotokan Ryu Seishinwakai Association - 2025"
      ]
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
      "Assistant Chief Instructor at Japan Karate Do Shotokan Ryu Seishinwakai Association",
    "4th Dan (Yondan) Black Belt Holder under Japan Karate Toryukai Association",
    "Qualified Fitness Trainer certified by Lanka Institute of Fitness",
    "Experienced Karate Instructor for International Schools in Sri Lanka",
    "Accomplished National Level Athlete",

    ],
    additionalCerts: [
      "Certified Fitness Trainer (Lanka Institute of Fitness)",
      "Athlete Conditioning Specialist"
    ],
    specializations: ["Traditional Shotokan", "Kids & Youth Development", "Physical Fitness & Conditioning"],
    achievements: [  
      "Over 25 Years of Karate Experience",
    "Trained Students from Numerous International Schools in Sri Lanka",
    "Developed National-Level Karate Athletes",
    "Successfully Guided Students in Various Karate Championships",
    "Recognized for Leadership and Contribution to Martial Arts Education"
      ]
  },

  "samuel-chathura-madushanka-herath": {
  name: "Sensei Samuel Chathura Madushanka Herath",
  rank: "3rd Dan Black Belt",
  role: "Uva Province Chief Instructor",
  experience: "12+ Years",
  whatsapp: "947XXXXXXXX", // Add correct number
  image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  bio: "Sensei Samuel Chathura Madushanka Herath is a highly dedicated karate athlete and instructor serving as the Uva Province Chief Instructor of the Japan Karate Seishinwakai Association. Since beginning his karate journey in 2013, he has achieved remarkable success through discipline, commitment, and continuous training at both national and international levels.",
  fullStory: [
      "Samuel Chathura Madushanka Herath is a talented and dedicated karate athlete and instructor who currently serves as the Uva Province Chief Instructor of the Japan Karate Seishinwakai Association. His journey in karate began in 2013, and through hard work, discipline, and commitment, he quickly established himself as one of the most promising athletes in the sport.",
      "From 2015 to 2018, he achieved remarkable success in the Kumite event, becoming champion consecutively in 2015, 2016, 2017, and 2018. His outstanding performances brought him recognition at both national and international levels.",
      "In 2017, he proudly represented Sri Lanka at the South Asian Karate Championship held in Sri Lanka, where he secured second place and won a silver medal for the country. This achievement marked an important milestone in his karate career and highlighted his dedication to excellence in martial arts.",
      "During the same year, he was given the valuable opportunity to participate in an intensive three-month karate training program in Osaka, Japan. Through continuous training and international exposure, he further developed his technical knowledge, discipline, and understanding of traditional and competitive karate at a highly advanced level. This experience greatly strengthened his skills and contributed significantly to his growth as both an athlete and instructor.",
      "Between 2015 and 2018, Samuel represented the Sri Lanka Junior National Karate Team, competing in numerous national and international tournaments. During this period, he gained recognition as a highly skilled and competitive athlete with great potential for the future.",
      "At present, he is a 3rd Dan Black Belt karate instructor, actively training and mentoring young students with discipline, determination, and professional guidance. Under his leadership, many students are developing into highly competitive athletes and demonstrating outstanding performances in various tournaments.",
      "Beyond competition, his mission is to inspire the younger generation through karate by promoting discipline, self-confidence, respect, and both physical and mental strength. Samuel Chathura Madushanka Herath remains committed to developing future champions who can bring pride and recognition to Sri Lanka on the international stage.",
      ""
    ],
  qualifications: [
    "Uva Province Chief Instructor at Japan Karate Seishinwakai Association",
    "3rd Dan Black Belt Holder",
    "Sri Lanka Junior National Karate Team Representative (2015 - 2018)",
    "Participant in a 3-Month Intensive Karate Training Program in Osaka, Japan (2017)"
  ],
  additionalCerts: [
    "South Asian Karate Championship 2017 - Silver Medalist"
  ],
  specializations: [
    "Kumite",
    "Traditional Karate Training",
    "Youth Karate Development",
    "Competitive Karate Coaching",
    "Discipline and Self-Defense Training"
  ],
  achievements: [
    "Kumite Champion - 2015, 2016, 2017, 2018",
    "South Asian Karate Championship 2017 - Silver Medalist",
    "Represented Sri Lanka Junior National Karate Team from 2015 to 2018",
    "Completed Advanced Karate Training Program in Osaka, Japan (2017)"
  ]
},

"rashmi-sadunimali-kulathunga": {
  name: "Sensei Rashmi Sadunimali Kulathunga",
  rank: "3rd Dan Black Belt",
  role: "Senior Karate Instructor",
  experience: "13+ Years",
  whatsapp: "94702688945", // Add correct number
  image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  bio: "Sensei Rashmi Sadunimali Kulathunga is a highly accomplished karate athlete and Senior Instructor of the Japan Karate Seishinwakai Association. Since starting her karate journey in 2012, she has demonstrated exceptional dedication, discipline, and leadership in both national and international karate arenas.",
  fullStory: [
      "Rashmi Sadunimali Kulathunga is a highly dedicated and accomplished karate athlete and senior instructor of the Japan Karate Seishinwakai Association. Since beginning her karate journey in 2012, she has demonstrated exceptional commitment, discipline, and determination, earning recognition as one of the outstanding female karate practitioners in Sri Lanka.",
      "Through years of continuous training and competitive excellence, Rashmi successfully achieved her 1st Dan Black Belt in 2018 and advanced to the prestigious 3rd Dan Black Belt in 2025, reflecting her technical expertise, experience, and dedication to the art of karate.",
      "Since 2015, she has continuously represented the Sri Lankan National Karate Pool, showcasing her skills and commitment at national-level competitions and training programs. In addition, during 2024 and 2025, she has been actively involved in the High Performance Team training program, further enhancing her competitive abilities and professional development in karate.",
      "Her achievements in national competitions have been remarkable. At the 2024 National Karate Championship, she won the Gold Medal in the -50kg Kumite event, demonstrating outstanding fighting skills and competitive spirit. Furthermore, at the 2025 National Sports Festival, she secured another Gold Medal in the Team Kata event, adding another prestigious achievement to her karate career.",
      "Rashmi’s dedication and service to the sport have also been recognized through several honors and awards. She received the Defence Service Colors Awards during the periods of 2016/2017, 2018/2019, 2022/2023, and 2024/2025, highlighting her consistent performance and contribution to karate over the years.",
      "In recognition of her exceptional talent and achievements in martial arts, she was also honored with the special “Golden Eagle Award” for Karate in 2022, a proud milestone that reflects her excellence and influence within the karate community.",
      "As a Senior Karate Instructor of the Japan Karate Seishinwakai Association, Rashmi Sadunimali Kulathunga continues to inspire and mentor the younger generation by promoting discipline, confidence, respect, and perseverance through karate. Her passion for teaching and commitment to developing future athletes have made her a respected figure in the martial arts field, while her achievements continue to bring pride and recognition to Sri Lanka."
    ],
  qualifications: [
    "Senior Instructor at Japan Karate Seishinwakai Association",
    "3rd Dan Black Belt Holder",
    "Sri Lanka National Karate Pool Representative since 2015",
    "Member of the High Performance Team (2024/2025)"
  ],
  additionalCerts: [
    "Defence Service Colors Award (2016/2017), (2018/2019), (2022/2023), (2024/2025)",
    "Golden Eagle Award for Karate - 2022"
  ],
  specializations: [
    "Kumite",
    "Team Kata",
    "Advanced Karate Training",
    "Women's Karate Coaching",
    "Youth Athlete Development"
  ],
  achievements: [
    "National Karate Championship 2024 (-50kg Kumite) - Gold Medalist",
    "National Sports Festival 2025 (Team Kata) - Gold Medalist",
    "Continuous Representation of Sri Lanka National Karate Pool since 2015",
    "High Performance Karate Training Program Participant (2024/2025)"
  ]
},

"shashini-kaushalya-kulathunga": {
  name: "Sensei Shashini Kaushalya Kulathunga",
  rank: "3rd Dan Black Belt",
  role: "Senior Karate Instructor",
  experience: "23+ Years",
  whatsapp: "94703985449", // Add correct number
  image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  bio: "Sensei Shashini Kaushalya Kulathunga is a highly skilled karate athlete and Senior Instructor of the Japan Karate Seishinwakai Association. She began her karate journey in 2002 under the Japan Karate Association and has built an outstanding career through dedication, discipline, and continuous achievement at national and international levels.",
  fullStory: [
      "Shashini Kaushalya Kulathunga is a highly dedicated and accomplished karate athlete and Senior Instructor of the Japan Karate Seishinwakai Association. She began her karate journey in 2002 under the Japan Karate Association and, through years of dedication, discipline, and perseverance, has established herself as one of the outstanding female karate practitioners in Sri Lanka.",
      "Through continuous training and competitive excellence, Shashini successfully achieved her 1st Dan Black Belt in 2018 and advanced to the prestigious 3rd Dan Black Belt in 2025, reflecting her technical expertise, leadership, and commitment to the art of karate.",
      "Since 2015, she has continuously represented the Sri Lankan National Karate Pool, demonstrating her talent and dedication in numerous national and international competitions. In addition, during 2024, 2025, and 2026, she has been actively involved in the High Performance Team training program, further strengthening her competitive and professional karate career.",
      "One of her most significant international achievements came at the 8th South Asian Karate Championship 2024 held in Bhutan, where she earned 3rd Place in the -61kg Kumite event and secured 2nd Place in the Team Kumite event, proudly bringing recognition to Sri Lanka on the South Asian stage.",
      "Shashini’s dedication and outstanding service to karate have also been recognized through several prestigious honors and awards. She received the Defence Service Colors Awards during the periods of 2016/2017, 2018/2019, 2022/2023, and 2024/2025, highlighting her consistent contribution and performance in the sport over the years.",
      "In recognition of her exceptional achievements and commitment to martial arts, she was honored with the Air Force Commander Felicitation Award in 2024. She also received the prestigious Golden Eagle Award in 2024, further reflecting her excellence and influence within the karate community.",
      "As a Senior Karate Instructor of the Japan Karate Seishinwakai Association, Shashini Kaushalya Kulathunga continues to inspire and mentor the younger generation by promoting discipline, confidence, respect, and perseverance through karate. Her passion for teaching and dedication to developing future athletes have made her a respected figure in the martial arts field, while her achievements continue to bring pride and recognition to Sri Lanka.",
    ],
  qualifications: [
    "Senior Instructor at Japan Karate Seishinwakai Association",
    "3rd Dan Black Belt Holder",
    "Sri Lanka National Karate Pool Representative since 2015",
    "Member of the High Performance Team (2024/2025/2026)"
  ],
  additionalCerts: [
    "Defence Service Colors Award (2016/2017), (2018/2019), (2022/2023), (2024/2025)",
    "Air Force Commander Felicitation Award - 2024",
    "Golden Eagle Award - 2024"
  ],
  specializations: [
    "Kumite",
    "Team Kumite",
    "Advanced Karate Training",
    "Women's Karate Coaching",
    "High Performance Athlete Development"
  ],
  achievements: [
    "8th South Asian Karate Championship 2024 - Bhutan (-61kg Kumite) - Bronze Medalist",
    "8th South Asian Karate Championship 2024 - Bhutan (Team Kumite) - Silver Medalist",
    "Continuous Representation of Sri Lanka National Karate Pool since 2015",
    "High Performance Karate Training Program Participant (2024/2025/2026)"
  ]
},


  "pavindu-livera": {
    name: "Sensei Pavindu Livera",
    rank: "2nd Dan Black Belt",
    role: "Junior Instructor",
    experience: "10+ Years",
    whatsapp: "94766059600",
    image: "/coaches/sensei-pavindu.jpg",
    bio: "Expert in modern tournament Kumite tactics and focused on elite athlete development programs.",
    fullStory: [

    ],
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
    whatsapp: "94701074489", // නිවැරදි අංකය ඇතුළත් කරන්න
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
    phone: "+94779188042",
    displayPhone: "+94 77 918 8042",
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