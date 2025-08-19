import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Contact Centre & Conferencing Equipment",
      description: "Professional audio and communication solutions for modern business environments.",
      features: ["Headsets & Accessories", "Conference Speakers", "Video Conferencing", "Wireless Solutions"],
      icon: "📞"
    },
    {
      title: "Consultation & HR Services", 
      description: "Expert consultation services for social labour, HR policies, and business compliance needs.",
      features: ["Social Labour Drafting", "HR Policies Review", "Training & Facilitation", "Business Auditing"],
      icon: "👥"
    },
    {
      title: "General Engineering & Maintenance",
      description: "Comprehensive engineering solutions with qualified personnel for industrial and commercial needs.",
      features: ["Boiler Making", "Electrical Work", "Mechanical Services", "Structural Fabrication"],
      icon: "🔧"
    },
    {
      title: "Supply & Delivery Services",
      description: "Complete supply chain solutions for construction, engineering, and office requirements.",
      features: ["Construction Materials", "Engineering Components", "Office Supplies", "Machine Hire"],
      icon: "🚛"
    },
    {
      title: "Fencing Solutions",
      description: "Professional fencing installation and maintenance for security and boundary requirements.",
      features: ["Barbed Wire Fencing", "Chain Link Fencing", "Electric Fencing", "Security Solutions"],
      icon: "🔒"
    },
    {
      title: "Mining & Construction Equipment",
      description: "Specialized equipment hire and supply for mining and construction projects.",
      features: ["Heavy Machinery", "Construction Tools", "Mining Equipment", "Technical Support"],
      icon: "🏗️"
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
            We offer comprehensive solutions across engineering, construction, technology, and consultation services tailored to meet the diverse needs of our Witbank community and beyond.
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
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground">
                      <svg className="w-4 h-4 text-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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