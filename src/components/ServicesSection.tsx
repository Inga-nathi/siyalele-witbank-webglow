import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createServiceWhatsAppLink } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Mining & Construction Supply",
      description: "Comprehensive supply solutions for mining operations and construction projects.",
      features: ["PPE & Safety Gear", "Construction Materials", "Engineering Tools", "Electrical & Mechanical Spares"],
      icon: "⛏️"
    },
    {
      title: "General Engineering & Maintenance", 
      description: "Expert engineering solutions and maintenance services for industrial operations.",
      features: ["Equipment Installation & Maintenance", "Structural Engineering Solutions", "Electrical & Mechanical Repairs", "Civil Works & Support"],
      icon: "🔧"
    },
    {
      title: "HR Consultation & Social Labour Plan (SLP) Services",
      description: "Professional HR consultation and Social Labour Plan (SLP) development services.",
      features: ["Expert HR Solutions", "Social Labour Plan Development", "Employment Equity Plans", "Workplace Skills Development"],
      icon: "👥"
    },
    {
      title: "Environmental Management",
      description: "Comprehensive environmental management and remediation services.",
      features: ["Waste Management", "Pollution Control Management", "Siltrap Management", "Vacuum Truck Services"],
      icon: "🌱"
    },
    {
      title: "Contract Catering & Conferencing Equipment",
      description: "Professional catering services and modern conferencing equipment solutions.",
      features: ["Catering Services", "Office & Conferencing Equipment", "Audio-Visual Solutions", "Professional Catering Support"],
      icon: "🍽️"
    },
    {
      title: "Fencing & Security Solutions",
      description: "Complete fencing installation and security system implementation.",
      features: ["Electric Fencing", "Palisade Fencing", "Razor Wire Fencing", "Security Solutions"],
      icon: "🔒"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for mining, engineering, and business consulting needs across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-secondary hover:border-accent/50 transition-all duration-300 hover:shadow-construction group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl">{service.icon}</div>
                  <CardTitle className="font-poppins text-2xl text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <a 
                    href={createServiceWhatsAppLink(service.title)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    📱 Request via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-secondary/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="font-inter text-muted-foreground mb-6">
              Contact us today for a free consultation and detailed quote for your construction or maintenance needs.
            </p>
            <Button variant="professional" size="xl" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;