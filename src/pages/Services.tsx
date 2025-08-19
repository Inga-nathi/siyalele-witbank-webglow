import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Users, Wrench, Truck, Shield, HardHat } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "contact-centre",
      title: "Contact Centre & Conferencing Equipment",
      icon: <Phone className="w-8 h-8" />,
      description: "Professional audio and communication solutions for modern business environments, featuring cutting-edge technology for seamless collaboration.",
      services: [
        {
          category: "Headsets & Accessories",
          items: [
            "Headsets (Wired & Wireless) - Poly, Yealink, Jabra",
            "Noise-Cancelling Headphones",
            "USB & Bluetooth Headsets", 
            "Y-Cables & Audio Splitters",
            "Ear Cushions & Spare Parts"
          ]
        },
        {
          category: "Conference Speakers & Audio Systems",
          items: [
            "USB/Bluetooth Conference Speakers",
            "Speakerphones with Echo Cancellation",
            "Multi-Microphone Systems",
            "Room Soundbars",
            "Wireless Audio Solutions"
          ]
        },
        {
          category: "Video Conferencing Solutions", 
          items: [
            "Conference Room Cameras",
            "4K Video Conferencing Systems",
            "Portable Webcams"
          ]
        }
      ]
    },
    {
      id: "consultation",
      title: "Consultation & HR Services",
      icon: <Users className="w-8 h-8" />,
      description: "Expert consultation services for social labour, HR policies, and comprehensive business compliance needs.",
      services: [
        {
          category: "HR Consultation Services",
          items: [
            "Social Labour Drafting & Consultation",
            "HR Policies Drafting & Review", 
            "HR Disciplinary Facilitation",
            "HR Training Programs",
            "Business Auditing Services"
          ]
        }
      ]
    },
    {
      id: "engineering",
      title: "General Engineering & Maintenance",
      icon: <Wrench className="w-8 h-8" />,
      description: "Comprehensive engineering solutions delivered by qualified personnel for industrial and commercial maintenance needs.",
      services: [
        {
          category: "Engineering & Maintenance Services",
          items: [
            "Maintenance (Boiler making, Electrical and Fitting - Qualified personnel)",
            "Electrical work and supply",
            "Mechanical work and supply of parts",
            "Boiler making and Fabrication of structures"
          ]
        }
      ]
    },
    {
      id: "supply-delivery",
      title: "Supply & Delivery Services", 
      icon: <Truck className="w-8 h-8" />,
      description: "Complete supply chain solutions for construction, engineering, and office requirements with reliable delivery services.",
      services: [
        {
          category: "Supply & Delivery",
          items: [
            "Supply of construction material and machinery",
            "Engineering components & Parts",
            "Consumables",
            "Office material and stationery", 
            "Printed clothing",
            "Machine Hire (Construction & Mining)"
          ]
        }
      ]
    },
    {
      id: "fencing",
      title: "Fencing Solutions",
      icon: <Shield className="w-8 h-8" />,
      description: "Professional fencing installation and maintenance for comprehensive security and boundary requirements.",
      services: [
        {
          category: "Fencing Services",
          items: [
            "Barbed wire fencing",
            "Chain link fencing",
            "Electric Fencing"
          ]
        }
      ]
    },
    {
      id: "construction-mining",
      title: "Construction & Mining Equipment",
      icon: <HardHat className="w-8 h-8" />,
      description: "Specialized equipment hire and supply for mining and construction projects with technical support.",
      services: [
        {
          category: "Equipment & Machinery",
          items: [
            "Heavy Construction Machinery",
            "Mining Equipment Hire",
            "Construction Tools & Equipment",
            "Technical Support & Maintenance"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-hero-gradient py-16 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-poppins text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="font-inter text-xl text-white/90 max-w-3xl">
            Comprehensive solutions across engineering, construction, HR, and technology sectors, delivered by qualified professionals in the Witbank region.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {serviceCategories.map((category, index) => (
              <Card key={category.id} className="border-2 border-secondary hover:border-accent/50 transition-all duration-300 hover:shadow-construction">
                <CardHeader className="bg-secondary/20 rounded-t-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-accent">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="font-poppins text-3xl text-primary mb-2">
                        {category.title}
                      </CardTitle>
                      <p className="font-inter text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="space-y-4">
                        <Badge variant="outline" className="text-primary border-accent">
                          {service.category}
                        </Badge>
                        <ul className="space-y-2">
                          {service.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start text-sm text-foreground">
                              <svg className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl font-bold text-primary mb-6">
            Need a Custom Solution?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8">
            Our experienced team can develop tailored solutions to meet your specific business requirements. Contact us for a detailed consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="professional" size="xl">
              Request Quote
            </Button>
            <Button variant="outline" size="xl">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;