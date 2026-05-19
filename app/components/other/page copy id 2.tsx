import { 
  FaWhatsapp, FaAward, FaCertificate, 
  FaCheckCircle, FaStar, FaUserNinja, FaBookOpen
} from "react-icons/fa";
import Image from "next/image";
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
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            {/* Image Container with Mobile Safeguards */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 shrink-0 shadow-md rounded-full">
              <Image 
                src={sensei.image} 
                alt={sensei.name} 
                fill
                sizes="(max-width: 768px) 176px, 224px"
                className="rounded-full object-cover object-top border-4 border-white shadow-inner"
                priority
              />
              <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 bg-red-600 text-white p-2.5 md:p-3 rounded-full shadow-md text-xs md:text-sm">
                <FaUserNinja />
              </div>
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left space-y-3">
              <div className="inline-block bg-red-50 text-red-600 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                {sensei.rank}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">{sensei.name}</h1>
              <p className="text-base md:text-lg text-gray-600 font-medium">{sensei.role} • {sensei.experience} Experience</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-sm text-sm"
                >
                  <FaWhatsapp className="text-base" /> Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: About & Full Story & Bio (Takes 8 Columns on Desktop) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Full Biography / Martial Arts Journey */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3 flex items-center gap-2">
                <FaBookOpen className="text-red-600 text-base" /> About the Instructor
              </h2>
              
              {/* මෙතැනදී fullStory එක Array එකක් විදියට තියෙනවා නම් ඡේද වෙන් වෙන්ව පෙන්වනවා, නැත්නම් bio එක fallback එකක් විදියට ගන්නවා */}
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                {sensei.fullStory && sensei.fullStory.length > 0 ? (
                  sensei.fullStory.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{sensei.bio}</p>
                )}
              </div>
            </section>

            {/* Qualifications */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-3">Professional Qualifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sensei.qualifications.map((q, i) => (
                  <div key={i} className="flex gap-3 text-sm text-gray-600 font-semibold bg-gray-50 p-3 rounded-xl border border-gray-100/50">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" /> <span>{q}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar Info (Takes 4 Columns on Desktop) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Specializations */}
            <section className="bg-zinc-900 text-white p-6 md:p-8 rounded-2xl shadow-md">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FaStar className="text-yellow-400" /> Mastery Areas
              </h2>
              <div className="flex flex-wrap gap-2">
                {sensei.specializations.map((s, i) => (
                  <span key={i} className="bg-zinc-800 text-zinc-300 px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border border-zinc-700/50">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaAward className="text-red-600" /> Accreditations
              </h2>
              <ul className="space-y-3">
                {sensei.additionalCerts.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 font-medium">
                    <FaCertificate className="text-blue-500 mt-0.5 shrink-0" /> <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </main>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-16 text-center text-gray-400 text-xs font-medium">
        <p>© {new Date().getFullYear()} Japan Karate Do Shotokan Ryu Seishinwakai, Sri Lanka.</p>
      </div>

    </div>
  );
}