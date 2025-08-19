import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-leadership.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-earth-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            About Siyalele Projects
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2023, we are a locally-owned construction company serving Witbank and the greater Mpumalanga region with integrity, expertise, and commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Story
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Established on 9 January 2023, Siyalele Projects began with a vision to deliver exceptional construction and maintenance services to our local community. As a VAT-registered private company, we combine professional standards with the personal touch of a family-owned business.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Leadership Team
              </h3>
              <div className="space-y-4">
                <div className="bg-white/60 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Peaceworth Siyabulela Gumede</h4>
                  <p className="text-sm text-muted-foreground">Director</p>
                </div>
                <div className="bg-white/60 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-primary">Sphesihle Chantel Gumede</h4>
                  <p className="text-sm text-muted-foreground">Alternate Director</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Vision
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                To be the leading construction and maintenance company in Mpumalanga, recognized for delivering innovative solutions, exceptional quality, and unmatched customer service while contributing to the growth and development of our local communities.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Mission
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed mb-6">
                To provide comprehensive construction, maintenance, and engineering services that exceed client expectations through skilled craftsmanship, reliable partnerships, and commitment to safety and sustainability. We empower local communities by creating employment opportunities and supporting economic growth in the Witbank region.
              </p>
            </div>

            <div>
              <h3 className="font-poppins text-2xl font-semibold text-primary mb-4">
                Our Values
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Quality</h4>
                    <p className="text-sm text-muted-foreground">Excellence in every project</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Trust</h4>
                    <p className="text-sm text-muted-foreground">Reliable partnerships</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Local</h4>
                    <p className="text-sm text-muted-foreground">Community focused</p>
                  </CardContent>
                </Card>
                <Card className="border-accent/20">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-accent mb-2">Professional</h4>
                    <p className="text-sm text-muted-foreground">Industry standards</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="Siyalele Projects team discussing construction plans"
              className="w-full h-auto rounded-xl shadow-construction"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;