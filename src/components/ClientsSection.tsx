import { Card, CardContent } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    { name: "Eskom", sector: "Power & Energy" },
    { name: "2Seam Coal", sector: "Mining" },
    { name: "Banele Mining", sector: "Mining" },
    { name: "Thaqin Holdings PTY LTD", sector: "Holdings" },
    { name: "Child Welfare", sector: "Social Services" }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Clients We've Worked With
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across South Africa's mining, energy, and social development sectors.
          </p>
        </div>

        <Card className="border-2 border-secondary">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="w-full p-6 bg-background rounded-xl border border-border hover:border-accent/50 transition-colors duration-300">
                    <h3 className="font-poppins text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                      {client.name}
                    </h3>
                    <p className="font-inter text-sm text-muted-foreground">
                      {client.sector}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClientsSection;