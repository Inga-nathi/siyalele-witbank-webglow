import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamImage from "@/assets/team-leadership.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-earth-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            About Siyalele Projects
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-4xl mx-auto">
            Siyalele Projects is a 100% black-owned, youth-led company established with the vision to transform the mining, engineering, and consulting industries. We are committed to delivering innovative, efficient, and sustainable solutions that meet the evolving needs of our clients. With a strong focus on excellence, empowerment, and innovation, we strive to become a trusted partner for businesses across South Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Company
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                Our expertise spans across multiple industries, providing end-to-end solutions in Mining & Construction Supply, Engineering & Maintenance, Consulting Services, and General Supply. We pride ourselves on our ability to deliver quality services that foster client satisfaction and long-term business growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  💼 100% Black-Owned
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  🌟 Youth-Led
                </Badge>
              </div>
            </div>

            {/* Company Timeline */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Company Timeline
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2022 – Company Establishment</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2023 – Rapid Growth</h4>
                    <p className="text-sm text-muted-foreground">Expanded service offerings with a client base across multiple industries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2024 – Strengthened Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Established long-term supplier and client relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2025 – Scaling Operations</h4>
                    <p className="text-sm text-muted-foreground">Expanded reach across South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Registration */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Certifications & Registration
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Company Registration</p>
                  <p className="font-semibold text-foreground">2022/609469/07</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Tax Clearance</p>
                  <p className="font-semibold text-foreground">Compliant</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">CSD Registered</p>
                  <p className="font-semibold text-foreground">MAAN0476474</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">B-BBEE Status</p>
                  <p className="font-semibold text-foreground">Level 1 Contributor</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">CIDB</p>
                  <p className="font-semibold text-foreground">Grading in process</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Eskom Vendor</p>
                  <p className="font-semibold text-foreground">11094569</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                "To be the company of choice to major clients and a leading provider of innovative solutions while consistently delivering exceptional value."
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                Delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction through innovative solutions and exceptional service delivery.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Core Values
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Excellence</h4>
                    <p className="text-sm text-muted-foreground">Commitment to delivering the highest quality services and solutions</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Innovation</h4>
                    <p className="text-sm text-muted-foreground">Embracing new technologies and creative approaches to problem-solving</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Empowerment</h4>
                    <p className="text-sm text-muted-foreground">Promoting transformation and sustainable business growth</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="space-y-8">
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Siyalele Projects leadership team"
                className="w-full h-64 object-cover rounded-xl shadow-construction"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-6">
                Leadership Team
              </h3>
              <p className="font-inter text-muted-foreground mb-6">
                Meet our dynamic directors committed to driving excellence and transformation
              </p>
              
              <div className="space-y-6">
                <Card className="border-2 border-secondary">
                  <CardContent className="p-6">
                    <h4 className="font-poppins text-xl font-semibold text-primary mb-2">
                      Siyabulela Gumede – Managing Director
                    </h4>
                    <p className="font-inter text-muted-foreground mb-4">
                      Visionary leader driving strategic growth and operational excellence. Committed to sustainable transformation.
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-2">Key Expertise:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Business Strategy</li>
                        <li>• Operations Management</li>
                        <li>• Leadership Development</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary">
                  <CardContent className="p-6">
                    <h4 className="font-poppins text-xl font-semibold text-primary mb-2">
                      Siphesihle Gumede – Operations Director
                    </h4>
                    <p className="font-inter text-muted-foreground mb-4">
                      Experienced professional focused on client relationships and operational excellence. Passionate about delivering impactful solutions.
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-2">Key Expertise:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Client Relationship Management</li>
                        <li>• Business Development</li>
                        <li>• Operations Excellence</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-poppins text-lg font-semibold text-primary mb-4">
                    Leadership Commitment
                  </h4>
                  <p className="font-inter text-muted-foreground mb-4">
                    Our leadership team embodies youthful energy, resilience, and unwavering commitment to clients and partners. Together, we are building a future that is sustainable and inclusive while driving business excellence.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="bg-accent text-white">
                      👩‍💼 50% Female Leadership
                    </Badge>
                    <Badge variant="secondary" className="bg-primary text-white">
                      🚀 Youth-Driven Innovation
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;