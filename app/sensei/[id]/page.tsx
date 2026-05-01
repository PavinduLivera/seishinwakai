// app/sensei/[id]/page.tsx
import { FaWhatsapp, FaAward, FaMedal, FaCertificate } from "react-icons/fa";
import Image from "next/image"; // Better for Next.js

// 1. Define the Sensei Type so TypeScript knows the structure
interface Sensei {
  name: string;
  rank: string;
  whatsapp: string;
  bio: string;
  image: string;
  experience?: string;
  achievements?: string[];
}

export default async function SenseiProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // 2. Explicitly type the object as Record<string, Sensei>
  const senseiDetails: Record<string, Sensei> = {
    "s-c-herath": {
      name: "Shihan S C Herath",
      rank: "5th Dan Black Belt",
      experience: "25+ Years",
      achievements: ["National Gold Medalist 2018", "World Karate Federation Certified"],
      bio: "Shihan Herath has dedicated his life to teaching the traditional art of Shotokan Karate...",
      whatsapp: "94766059600",
      image: "/coaches/shihan-herath.jpg"
    },
    "amal-perera": {
      name: "Sensei Amal Perera",
      rank: "3rd Dan Black Belt",
      whatsapp: "94766059600",
      bio: "Expert in Shotokan and children's physical fitness...",
      image: "https://images.unsplash.com/photo-1599459183200-59c7687a0275?q=80&w=1974&auto=format&fit=crop"
    },
    "nuwan-silva": {
      name: "Sensei Nuwan Silva",
      rank: "4th Dan Black Belt",
      whatsapp: "94384567890",
      bio: "Specializes in Kata excellence and grading preparation...",
      image: "https://images.unsplash.com/photo-1544260237-37a2ea59dbdf?q=80&w=2070&auto=format&fit=crop"
    }
  };

  // 3. Now this line won't throw an error
  const sensei = senseiDetails[id];

  if (!sensei) return <div className="py-20 text-center text-2xl font-bold">Sensei Not Found</div>;
    
  const message = `Hello ${sensei.name}, I saw your profile on the Karate Dojo website and I'd like to get more information about the classes.`;
  const whatsappUrl = `https://wa.me/${sensei.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-green-600 rounded-2xl rotate-3"></div>
            {/* Using Next.js Image for better performance and build stability */}
            <div className="relative z-10 w-full h-[400px]">
              <Image 
                src={sensei.image} 
                alt={sensei.name} 
                fill
                className="rounded-2xl border-8 border-white shadow-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-black text-black uppercase">{sensei.name}</h1>
            <p className="bg-red-600 text-white inline-block px-4 py-1 rounded-full font-bold">{sensei.rank}</p>
            
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-green-600 pl-4">
              "{sensei.bio}"
            </p>

            <div className="pt-6">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-black text-white px-8 py-4 rounded-xl font-black transition-all shadow-lg transform hover:-translate-y-1"
              >
                <FaWhatsapp className="text-2xl" /> CONTACT VIA WHATSAPP
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
               <div className="flex items-center gap-2"><FaAward className="text-green-700" /> Professional Coach</div>
               <div className="flex items-center gap-2"><FaMedal className="text-green-700" /> Verified Instructor</div>
               <div className="flex items-center gap-2"><FaCertificate className="text-green-700" /> Licensed Coach</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}