"use client";
import { 
  FaFacebook, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaInstagram, 
  FaYoutube, 
  FaUserNinja,
  FaClock 
} from "react-icons/fa";
import Link from "next/link"; // Next.js Link use karanna navigation walata

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dojo-black text-white pt-16 pb-8 border-t-4 border-dojo-green relative overflow-hidden">
      {/* Background Subtle Logo Overlay */}
      {/* <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[20rem] -rotate-12 pointer-events-none">
        <FaUserNinja />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Branding & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="bg-white p-1.5 rounded text-dojo-red text-2xl transition-transform group-hover:rotate-12">
                <FaUserNinja />
              </div>
              <h2 className="font-black text-2xl tracking-tighter uppercase">
                Seishinwakai <span className="text-dojo-green">Dojo</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering lives through traditional and sport Karate in Panadura. Build your character with the discipline of Seishinwakai.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1UFY58CwQh/" target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-3 rounded-full hover:bg-[#1877F2] transition-all hover:-translate-y-1">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all hover:-translate-y-1">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="bg-zinc-800 p-3 rounded-full hover:bg-[#FF0000] transition-all hover:-translate-y-1">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* 2. Quick Navigation */}
          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-dojo-green pl-3 uppercase tracking-wide italic">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Legacy', path: '/about' },
                { name: 'Our Achievements', path: '/achievements' },
                { name: 'Training Dojos', path: '/dojos' },
                { name: 'Contact Sensei', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="hover:text-dojo-red flex items-center gap-2 transition-colors group text-sm font-bold">
                    <FaArrowRight className="text-[10px] text-dojo-green group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Opening Hours & Locations */}
          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-dojo-green pl-3 uppercase tracking-wide italic">Training Centers</h3>
            <div className="space-y-4 text-gray-400 text-sm">
              
              <ul className="space-y-3 pt-2">
                <li className="flex gap-3 items-start group cursor-default">
                  <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium group-hover:text-white transition-colors">Hombo Dojo, Piliyandala</span>
                </li>
                <li className="flex gap-3 items-start group cursor-default">
                  <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium group-hover:text-white transition-colors">YMCA Branch, Moratuwa</span>
                </li>
                <li className="flex gap-3 items-start group cursor-default">
                  <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium group-hover:text-white transition-colors">City Branch, Dehiwala</span>
                </li>
                <li className="flex gap-3 items-start group cursor-default">
                  <FaMapMarkerAlt className="text-dojo-red mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium group-hover:text-white transition-colors">City Branch, Mt. Lavinia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Contact & Accreditation */}
          <div>
            <h3 className="text-lg font-black mb-6 border-l-4 border-dojo-green pl-3 uppercase tracking-wide italic">Get Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="tel:+94774488092" className="flex items-center gap-3 font-bold hover:text-white transition-colors">
                  <div className="bg-dojo-green/10 p-2 rounded-lg text-dojo-green">
                    <FaPhoneAlt />
                  </div>
                  +94 77 448 8092
                </a>
              </li>
              <li>
                <a href="mailto:info@karatedojo.lk" className="flex items-center gap-3 font-bold hover:text-white transition-colors">
                  <div className="bg-dojo-green/10 p-2 rounded-lg text-dojo-green">
                    <FaEnvelope />
                  </div>
                  seishinwakai@gmail.com
                </a>
              </li>
            </ul>
            
            {/* Accreditation Badge */}
            <div className="mt-8 p-4 bg-zinc-900 rounded-2xl border border-zinc-800 relative group overflow-hidden">
               <div className="absolute inset-0 bg-dojo-green/5 translate-y-full group-hover:translate-y-0 transition-transform"></div>
               <p className="relative z-10 text-[10px] uppercase font-black text-dojo-green mb-1 tracking-widest">Affiliated Member</p>
               <p className="relative z-10 text-xs font-black text-white uppercase italic">Sri Lanka Karate-Do Federation</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase font-black tracking-[0.2em] text-gray-500">
          <p className="text-center md:text-left">
            © {currentYear} <span className="text-dojo-green">Seishinwakai</span> Sri Lanka.
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}