// app/sensei/[id]/page.tsx
import { 
  FaWhatsapp, FaAward, FaCertificate, 
  FaCheckCircle, FaStar, FaUserNinja,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { senseiDetails } from "@/constants/instructors";


export default async function SenseiProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const sensei = senseiDetails[id];
  if (!sensei) return <div className="py-20 text-center font-bold text-red-600">Sensei Not Found</div>;

  const whatsappUrl = `https://wa.me/${sensei.whatsapp}?text=${encodeURIComponent("Oss Sensei, I'm interested in joining your classes.")}`;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* 1. Header/Hero Area */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            {/* Image */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 shrink-0">
              <Image 
                src={sensei.image} 
                alt={sensei.name} 
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg"
                priority
              />
              <div className="absolute bottom-2 right-2 bg-red-600 text-white p-3 rounded-full shadow-md">
                <FaUserNinja />
              </div>
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left space-y-4">
              <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                {sensei.rank}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">{sensei.name}</h1>
              <p className="text-lg text-gray-600 font-medium">{sensei.role} • {sensei.experience} Experience</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all"
                >
                  <FaWhatsapp /> Contact on WhatsApp
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: About & Bio */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">About the Instructor</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {sensei.bio}
              </p>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">Professional Qualifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {sensei.qualifications.map((q, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium">
                      <FaCheckCircle className="text-green-500 mt-1 shrink-0" /> {q}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar info */}
          <div className="space-y-8">
            {/* Specializations */}
            <section className="bg-black text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Mastery Areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {sensei.specializations.map((s, i) => (
                  <span key={i} className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider border border-zinc-700">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaAward className="text-red-600" /> Accreditations
              </h2>
              <ul className="space-y-4">
                {sensei.additionalCerts.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <FaCertificate className="text-blue-500 mt-1 shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </main>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-6 mt-16 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Japan Karate Do Shotokan Ryu Seishinwakai, Sri Lanka.</p>
      </div>

    </div>
  );
}