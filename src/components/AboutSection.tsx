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
            Siyalele Projects is a <strong>100% black-owned, youth-led company</strong> established in 2023 with a vision to drive innovation, empowerment, and sustainable business solutions across the mining and engineering sectors.
          </p>
          <p className="font-inter text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Our leadership team consists of <strong>50% black female and 50% black male directors</strong>, bringing diverse perspectives and expertise to deliver exceptional value to our clients while promoting transformation in the industry.
          </p>
          <p className="font-inter text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            We focus on delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction at every level of our operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Company
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                We focus on delivering reliable mining, engineering, and consulting services while driving sustainability, empowerment, and client satisfaction through innovative solutions and exceptional service delivery.
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
                    <h4 className="font-semibold text-foreground">2023 – Company Establishment</h4>
                    <p className="text-sm text-muted-foreground">Founded as 100% black-owned business</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2023 – Rapid Growth</h4>
                    <p className="text-sm text-muted-foreground">Expanded service offerings and client base</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-accent rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">2024 – Strategic Partnerships</h4>
                    <p className="text-sm text-muted-foreground">Built strong industry relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-primary rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Future – Continued Expansion</h4>
                    <p className="text-sm text-muted-foreground">Scaling operations across South Africa</p>
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
                  <p className="font-semibold text-foreground">2023/000257/07</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">CSD Verification</p>
                  <p className="font-semibold text-foreground">MAAA1487648</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Eskom Vendor</p>
                  <p className="font-semibold text-foreground">11094569</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Tax Clearance</p>
                  <p className="font-semibold text-foreground">9279622253</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">VAT Number</p>
                  <p className="font-semibold text-foreground">4410317988</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Banking</p>
                  <p className="font-semibold text-foreground">ABSA Business Account</p>
                </div>
              </div>
            </div>

            {/* Vision & Mission */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Vision & Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Guiding principles that drive our commitment to excellence and innovation
              </p>
            </div>

            <div>
              <h4 className="font-poppins text-xl font-semibold text-primary mb-3">
                Our Vision
              </h4>
              <blockquote className="font-inter text-muted-foreground leading-relaxed mb-6 italic border-l-4 border-accent pl-4">
                "To be the company of choice to major clients and a leading provider of innovative solutions while consistently delivering exceptional value."
              </blockquote>
            </div>

            <div>
              <h4 className="font-poppins text-xl font-semibold text-primary mb-3">
                Our Mission
              </h4>
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
                      Visionary leader driving strategic growth and operational excellence. Committed to innovation and sustainable business development.
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-2">Key Expertise:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Business Leadership</li>
                        <li>• Strategic Planning</li>
                        <li>• Industry Expertise</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary">
                  <CardContent className="p-6">
                    <h4 className="font-poppins text-xl font-semibold text-primary mb-2">
                      Siphesihle Gumede – Director
                    </h4>
                    <p className="font-inter text-muted-foreground mb-4">
                      Experienced professional focused on client relationships and service delivery excellence. Passionate about transformation and empowerment.
                    </p>
                    <div>
                      <p className="font-semibold text-sm text-foreground mb-2">Key Expertise:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Client Relations</li>
                        <li>• Service Excellence</li>
                        <li>• Business Development</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6">
                  <h4 className="font-poppins text-lg font-semibold text-primary mb-4">
                    Leadership Commitment
                  </h4>
                  <p className="font-inter text-muted-foreground mb-4">
                    Our leadership team embodies <strong>youthful energy, resilience, and unwavering commitment</strong> to client growth and success. Together, we drive innovation while maintaining the highest standards of service delivery and business ethics.
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