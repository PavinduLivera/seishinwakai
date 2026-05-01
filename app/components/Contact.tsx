"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaClock, FaEnvelope, FaPaperPlane, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function ContactForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Check if keys are loaded (Meka console eke check karanna puluwan)
    if(!serviceId || !templateId || !publicKey) {
       alert("API Keys are missing!");
       setLoading(false);
       return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then((result) => {
        alert("Message Sent Successfully!");
        form.current.reset();
        setLoading(false);
    }, (error) => {
        console.log("EmailJS Error:", error); // Meka check karanna error eka mokadda kiyala
        alert("Something went wrong. Check console for details.");
        setLoading(false);
    });
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header Section */}
      <PageHeader 
        title="Get In" 
        highlight="Touch" 
        subtitle="Train with the best in Panadura"
        bgImage="https://images.unsplash.com/photo-1555597673-b21d5c935865"
        opacity="opacity-10"
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info & Action Cards */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-black text-dojo-black uppercase italic mb-4">Contact Information</h2>
              <p className="text-gray-500 font-medium">Have questions about our classes or grading? Reach out to us directly through any of these channels.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <a href="https://wa.me/94712345678" target="_blank" className="p-6 bg-green-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all group">
                <FaWhatsapp className="text-3xl text-[#25D366] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-black text-dojo-black uppercase text-sm">WhatsApp</h3>
                <p className="text-xs text-gray-500 font-bold mt-1">+94 71 234 5678</p>
              </a>

              {/* Phone Card */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <FaPhoneAlt className="text-2xl text-dojo-red mb-4" />
                <h3 className="font-black text-dojo-black uppercase text-sm">Call Us</h3>
                <p className="text-xs text-gray-500 font-bold mt-1">+94 38 222 4455</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="bg-dojo-black p-4 rounded-xl text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Address</p>
                  <p className="font-bold text-dojo-black">info@karatedojo.lk</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-dojo-green p-4 rounded-xl text-white">
                  <FaClock />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Office Hours</p>
                  <p className="font-bold text-dojo-black">Mon - Sat: 8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Inquiry Form */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative">
            <div className="absolute -top-4 -right-4 bg-dojo-red text-white px-6 py-2 rounded-xl font-black text-xs uppercase tracking-widest rotate-6">
              Quick Inquiry
            </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400">Your Name</label>
              <input name="from_name" required type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-dojo-green outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400">Phone Number</label>
              <input name="from_phone" required type="text" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-dojo-green outline-none" />
            </div>
          </div>
      
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400">Select Dojo</label>
            <select name="dojo_name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none">
              <option>Main Dojo - Panadura</option>
              <option>City Branch - Moratuwa</option>
            </select>
          </div>
      
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-400">Message</label>
            <textarea name="message" rows="4" required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none"></textarea>
          </div>
      
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-dojo-black hover:bg-dojo-green text-white py-5 rounded-xl font-black text-sm uppercase tracking-[0.2em] transition-all shadow-lg active:scale-95 disabled:opacity-50"
          >
            {loading ? "SENDING..." : "SEND MESSAGE"} <FaPaperPlane className="inline ml-2" />
          </button>
        </form>
        </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-20 rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white relative h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d386.68750836160183!2d79.92599236969768!3d6.7986439585895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24fc098855135%3A0x93b67c31dc5270ab!2sCombat%20Fitness!5e0!3m2!1sen!2slk!4v1777566930879!5m2!1sen!2slk" 
            className="w-full h-full border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}