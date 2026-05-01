import Link from "next/link";
import { FaHome, FaSearch, FaUserNinja, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-6">
      <div className="text-center">
        
        {/* Visual Element using FaUserNinja */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[10rem] md:text-[12rem] font-black text-gray-100 leading-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-dojo-black p-6 rounded-full text-dojo-red text-6xl shadow-2xl animate-bounce">
              <FaUserNinja />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-black text-dojo-black uppercase mb-4 tracking-tighter">
          Target <span className="text-dojo-red">Not Found</span>
        </h2>
        
        <div className="flex items-center justify-center gap-2 text-dojo-green font-bold mb-6 uppercase tracking-widest text-sm">
          <FaExclamationTriangle />
          <span>Focus on your path</span>
        </div>

        <p className="text-gray-500 max-w-md mx-auto mb-10 font-medium leading-relaxed">
          In Karate, precision is key. It seems your strike landed outside the mat. This page doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto bg-dojo-black text-white px-10 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-dojo-red transition-all shadow-lg active:scale-95"
          >
            <FaHome /> BACK TO HOME
          </Link>
          
          <Link 
            href="/dojos" 
            className="w-full sm:w-auto border-2 border-dojo-black text-dojo-black px-10 py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-dojo-black hover:text-white transition-all active:scale-95"
          >
            <FaSearch /> FIND A DOJO
          </Link>
        </div>

        {/* Bottom Decorative Belt */}
        <div className="mt-20 flex justify-center items-center">
          <div className="h-2 w-24 bg-dojo-black rounded-l-full"></div>
          <div className="h-4 w-4 bg-dojo-red rotate-45 mx-2"></div>
          <div className="h-2 w-24 bg-dojo-black rounded-r-full"></div>
        </div>
      </div>
    </div>
  );
}