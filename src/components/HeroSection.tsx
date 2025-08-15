import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Siyalele Projects
        </h1>
        
        <p className="font-inter text-xl md:text-2xl mb-4 font-light max-w-3xl mx-auto">
          Building Excellence in Witbank, Mpumalanga
        </p>
        
        <p className="font-inter text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Professional construction and maintenance services you can trust. 
          Established 2023, locally owned, VAT registered.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="xl" className="min-w-48">
            Get A Quote
          </Button>
          <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20">
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-inter mb-2">Scroll to learn more</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;