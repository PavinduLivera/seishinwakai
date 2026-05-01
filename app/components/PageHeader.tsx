interface PageHeaderProps {
  title: string;
  highlight: string;
  subtitle: string;
  bgImage: string;
  opacity?: string;
}

export default function PageHeader({ 
  title, 
  highlight, 
  subtitle, 
  bgImage, 
  opacity = "opacity-20" 
}: PageHeaderProps) {
  return (
    <section className="bg-dojo-black py-24 text-center text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className={`absolute inset-0 ${opacity} bg-cover bg-center transition-transform duration-1000 hover:scale-105`}
        style={{ backgroundImage: `url("${bgImage}")` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          {title} <span className="text-dojo-green">{highlight}</span>
        </h1>
        
        {/* Decorative Line */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <div className="h-[2px] w-8 bg-dojo-red"></div>
          <p className="text-dojo-red tracking-[0.3em] font-black text-[10px] md:text-xs uppercase">
            {subtitle}
          </p>
          <div className="h-[2px] w-8 bg-dojo-red"></div>
        </div>
      </div>
    </section>
  );
}