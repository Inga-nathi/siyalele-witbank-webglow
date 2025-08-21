import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-construction.jpg";
import siyaleleLogo from "@/assets/siyalele-logo.png";
import { createWhatsAppLink } from "@/lib/whatsapp";

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
        <div className="mb-8 animate-fade-in">
          <img 
            src={siyaleleLogo} 
            alt="Siyalele Projects Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 drop-shadow-2xl hover-scale animate-pulse bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/20"
          />
        </div>
        <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Innovative Mining & Engineering Solutions, <span className="text-cyan-400">Delivered with Excellence</span>
        </h1>
        
        <p className="font-inter text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Your trusted partner for mining supply, engineering maintenance, and professional consulting services across South Africa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="xl" className="min-w-48" asChild>
            <a href="#contact">
              Get A Quote
            </a>
          </Button>
          <Button variant="outline" size="xl" className="min-w-48 bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
            <a href="#services">
              Our Services
            </a>
          </Button>
        </div>
        
        {/* Credibility Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm font-medium">
            💼 100% Black-Owned
            <span className="block text-xs">Certified Business</span>
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm font-medium">
            🌟 Youth-Led Company
            <span className="block text-xs">50% Female Directors</span>
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 text-sm font-medium">
            ✅ CSD Verified
            <span className="block text-xs">MAAA1487648</span>
          </Badge>
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