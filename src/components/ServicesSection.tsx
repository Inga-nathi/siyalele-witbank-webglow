import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "General Construction",
      description: "Complete construction solutions from foundation to finishing, delivering quality residential and commercial projects.",
      features: ["New builds", "Renovations", "Extensions", "Commercial projects"]
    },
    {
      title: "Maintenance Services", 
      description: "Comprehensive maintenance and repair services to keep your property in excellent condition year-round.",
      features: ["Property maintenance", "Repairs", "Preventive care", "Emergency services"]
    },
    {
      title: "Project Management",
      description: "Professional project oversight ensuring timely delivery, quality control, and budget management.",
      features: ["Planning & design", "Timeline management", "Quality control", "Budget oversight"]
    },
    {
      title: "Consultation",
      description: "Expert advice and consultation services to help you make informed decisions about your construction needs.",
      features: ["Site assessment", "Cost estimation", "Design consultation", "Compliance guidance"]
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
            We offer comprehensive construction and maintenance services tailored to meet the unique needs of our Witbank community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-secondary hover:border-accent/50 transition-all duration-300 hover:shadow-construction group">
              <CardHeader className="pb-4">
                <CardTitle className="font-poppins text-2xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
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
            <Button variant="professional" size="xl">
              Request Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;