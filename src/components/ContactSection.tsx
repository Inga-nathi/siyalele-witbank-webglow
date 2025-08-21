import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { createWhatsAppLink } from "@/lib/whatsapp";

const ContactSection = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check for service parameter in URL
    const urlParams = new URLSearchParams(location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [location]);

  const services = [
    "Mining & Construction Supply",
    "General Engineering & Maintenance", 
    "HR Consultation & Social Labour Plan (SLP) Services",
    "Environmental Management",
    "Contract Catering & Conferencing Equipment",
    "Fencing & Security Solutions",
    "Consultation",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Quote Request - ${formData.service || 'General Inquiry'}`;
    const emailBody = `
New Quote Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Service: ${formData.service}

Project Details:
${formData.message}

Please respond to this quote request as soon as possible.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:siyalele.mr7@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Quote Request Prepared!",
      description: "Your email client should open with the quote request. Please send the email to complete your request.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-earth-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Get Your Quote
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Get a detailed quote for our professional mining, engineering, and consulting solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-construction">
            <CardHeader>
              <CardTitle className="font-poppins text-2xl text-primary">
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Required *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
                    <SelectTrigger className="focus:ring-accent focus:border-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus:ring-accent focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please provide details about your project, timeline, budget range, and any specific requirements..."
                    className="focus:ring-accent focus:border-accent resize-none"
                  />
                </div>

                <Button type="submit" variant="professional" size="lg" className="w-full">
                  Request Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-construction">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-primary">
                  Our Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Address:</p>
                    <p className="font-inter text-muted-foreground">
                      Miroh at Aurora | 16 @ Birchwood<br />
                      Aston Manor, Kempton Park<br />
                      Johannesburg, 1620<br />
                      South Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Phone Numbers:</p>
                    <p className="font-inter text-muted-foreground">+27 72 217 6184</p>
                    <p className="font-inter text-muted-foreground">+27 65 072 9925</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Email Address:</p>
                    <p className="font-inter text-muted-foreground">Siyalele.mr7@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary">Certifications:</p>
                    <p className="font-inter text-muted-foreground">Eskom Vendor: 11094569</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="hero" className="w-full" asChild>
                    <a 
                      href={createWhatsAppLink("Hello! I would like to discuss a project with your team.")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      📱 Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-construction">
              <CardHeader>
                <CardTitle className="font-poppins text-2xl text-primary">
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-primary">Mon – Fri:</span>
                  <span className="text-muted-foreground">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-primary">Saturdays:</span>
                  <span className="text-muted-foreground">8:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-primary">Sunday:</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    Quick Contact: Call +27 72 217 6184
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Email: Siyalele.mr7@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Simplified Map Placeholder */}
            <Card className="shadow-construction">
              <CardContent className="p-6">
                <div className="bg-secondary/30 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-primary font-medium">Kempton Park / Johannesburg</p>
                    <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;