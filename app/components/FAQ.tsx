"use client";
import { useState } from "react";
import { FaPlus, FaMinus, FaQuestionCircle, FaLongArrowAltRight } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the minimum age to start Karate?",
      answer: "We accept students starting from the age of 5. Our 'Kids Karate' program is specially designed to develop motor skills and discipline in young children."
    },
    {
      question: "Do I need any prior experience to join?",
      answer: "Not at all! We have classes for absolute beginners of all ages. Our Senseis will guide you from the very basics (White Belt) step-by-step."
    },
    {
      question: "What should I wear for my first class?",
      answer: "For your free trial or first class, you can wear comfortable sports clothing (T-shirt and track pants). Once you enroll, you will need to purchase an official Karate Gi (Uniform)."
    },
    {
      question: "How often should I attend training?",
      answer: "For consistent progress and grading eligibility, we recommend attending at least 2 sessions per week. However, we have flexible schedules to suit your lifestyle."
    },
    {
      question: "Is Karate safe for my child?",
      answer: "Yes, safety is our top priority. All sessions are supervised by certified Senseis, and we follow strict WKF (World Karate Federation) safety protocols during training."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-dojo-green/10 text-dojo-green px-4 py-2 rounded-full mb-4">
             <FaQuestionCircle className="text-sm" />
             <span className="text-[10px] font-black uppercase tracking-widest">Common Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-dojo-black uppercase italic tracking-tighter">
            Everything You <span className="text-dojo-green">Need to Know</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-[2rem] transition-all duration-300 ${
                openIndex === index ? "border-dojo-black bg-gray-50" : "border-gray-100 bg-white"
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
              >
                <span className="font-black text-dojo-black uppercase text-sm md:text-base tracking-tight italic">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  openIndex === index ? "bg-dojo-red text-white rotate-180" : "bg-gray-100 text-dojo-black"
                }`}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* Answer with Animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-gray-500 font-medium leading-relaxed text-sm md:text-base border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Call-to-Action */}
        <div className="mt-16 text-center p-10 bg-dojo-green/5 rounded-[2.5rem] border border-dojo-green/10">
           <p className="text-gray-500 font-bold text-sm mb-4">Still have more questions? Don't hesitate to reach out!</p>
           <a 
  href="https://wa.me/94774488092" // Methane oyage number eka danna (94 mulata danna)
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block" // Button eka hariyata pennanna meka danna
>
  <button className="text-dojo-black font-black uppercase text-xs tracking-widest border-b-2 border-dojo-green hover:text-dojo-green transition-colors">
    Contact Sensei Directly
  </button>
</a>
        </div>

      </div>
    </section>
  );
}