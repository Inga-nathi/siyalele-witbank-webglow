import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createServiceWhatsAppLink } from "@/lib/whatsapp";

const Services = () => {
  const serviceCategories = [
    {
      id: "mining-construction",
      title: "Mining & Construction Supply",
      icon: "⛏️",
      description: "Comprehensive supply solutions for mining operations and construction projects across South Africa.",
      services: [
        {
          category: "Safety & PPE",
          items: ["PPE & Safety Gear", "Hard Hats & Protective Equipment", "High-Visibility Clothing", "Safety Harnesses"]
        },
        {
          category: "Materials & Tools",
          items: ["Construction Materials", "Engineering Tools", "Electrical & Mechanical Spares", "Consumables"]
        }
      ]
    },
    {
      id: "engineering-maintenance",
      title: "General Engineering & Maintenance",
      icon: "🔧",
      description: "Expert engineering solutions and maintenance services for industrial and commercial operations.",
      services: [
        {
          category: "Installation & Maintenance",
          items: ["Equipment Installation & Maintenance", "Structural Engineering Solutions", "Electrical & Mechanical Repairs", "Civil Works & Support"]
        },
        {
          category: "Specialized Services",
          items: ["Fabrication Services", "Boiler Making", "Welding & Metal Work", "Industrial Repairs"]
        }
      ]
    },
    {
      id: "hr-slp-consultation",
      title: "HR Consultation & Social Labour Plan (SLP) Services",
      icon: "👥",
      description: "Professional HR consultation and Social Labour Plan (SLP) development for mining and industrial companies.",
      services: [
        {
          category: "HR Solutions",
          items: ["Expert HR Solutions", "Employment Equity Plans", "Workplace Skills Development", "HR Policy Development"]
        },
        {
          category: "Social Labour Plan (SLP)",
          items: ["Social Labour Plan Development", "SLP Implementation", "Community Development Programs", "Transformation Advisory"]
        }
      ]
    },
    {
      id: "environmental-management",
      title: "Environmental Management",
      icon: "🌱",
      description: "Comprehensive environmental management and remediation services for sustainable operations.",
      services: [
        {
          category: "Waste & Pollution Control",
          items: ["Waste Management", "Pollution Control Management", "Siltrap Management", "Environmental Remediation"]
        },
        {
          category: "Specialized Equipment Services",
          items: ["Vacuum Truck Services", "Dredging", "Trench Cleaning", "Normal Plant Cleaning", "De-sludging of Dams", "High Pressure Machine Services"]
        },
        {
          category: "Environmental Restoration",
          items: ["Removal of Alien Species", "Tree Felling", "Land Rehabilitation", "Erosion Control"]
        }
      ]
    },
    {
      id: "catering-conferencing",
      title: "Contract Catering & Conferencing Equipment",
      icon: "🍽️",
      description: "Professional catering services and modern conferencing equipment solutions for corporate events.",
      services: [
        {
          category: "Catering Services",
          items: ["Catering Services", "Professional Catering Support", "Event Catering", "Corporate Dining Solutions"]
        },
        {
          category: "Equipment & Technology",
          items: ["Office & Conferencing Equipment", "Audio-Visual Solutions", "Modern Office Equipment", "Presentation Systems"]
        }
      ]
    },
    {
      id: "video-conferencing",
      title: "Video Conferencing Solutions",
      icon: "💻",
      description: "Reliable video conferencing solutions for corporate communications and remote collaboration.",
      services: [
        {
          category: "Technology Solutions",
          items: ["Hardware & Software Solutions", "Business Communication Support", "Online Training Platforms", "Remote Collaboration Tools"]
        }
      ]
    },
    {
      id: "fencing-solutions",  
      title: "Fencing Solutions",
      icon: "🔒",
      description: "Comprehensive fencing services including supply, installation, and maintenance for security needs.",
      services: [
        {
          category: "Fencing Types",
          items: ["Electric Fencing", "Palisade Fencing", "Razor Wire Fencing", "Chain Link Fencing"]
        },
        {
          category: "Security Systems",
          items: ["Security Solutions", "Access Control", "Perimeter Security", "Fencing Maintenance"]
        }
      ]
    },
    {
      id: "supply-delivery",
      title: "Supply & Delivery",
      icon: "🚛",
      description: "Complete supply and delivery solutions for construction materials, office needs, spares, tools, and consumables.",
      services: [
        {
          category: "Materials & Supplies",
          items: ["Construction Materials", "Engineering Consumables", "Office Supplies & Stationery", "Industrial Spares"]
        },
        {
          category: "Logistics",
          items: ["Delivery Services", "Supply Chain Management", "Warehousing", "Procurement Solutions"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="font-inter text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive solutions for mining, engineering, and business consulting needs across South Africa
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {serviceCategories.map((category) => (
              <Card key={category.id} className="border-2 border-secondary hover:border-accent/50 transition-all duration-300 hover:shadow-construction group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{category.icon}</div>
                    <CardTitle className="font-poppins text-2xl text-primary group-hover:text-accent transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                  <p className="font-inter text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.services.map((service, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-primary mb-3">{service.category}</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-center text-sm text-foreground">
                            <svg className="w-3 h-3 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-border">
                    <Button variant="outline" className="w-full" asChild>
                      <a 
                        href={createServiceWhatsAppLink(category.title)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        📱 Request via WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-inter text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and get a customized solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/#contact">Request Quote</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a 
                href={createServiceWhatsAppLink("I would like to schedule a consultation")} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;