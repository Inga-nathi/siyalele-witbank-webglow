const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins text-2xl font-bold mb-4">Siyalele Projects</h3>
            <p className="font-inter text-primary-foreground/80 mb-4">
              Professional construction and maintenance services in Witbank, Mpumalanga.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/70">
                <span className="font-medium">Established:</span> 9 January 2023
              </p>
              <p className="text-primary-foreground/70">
                <span className="font-medium">VAT No:</span> 9279622253
              </p>
              <p className="text-primary-foreground/70">
                <span className="font-medium">Registration:</span> Private Company
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#quote" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Request Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 font-inter text-sm">
              <div className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className="text-primary-foreground/80">
                  Monet Street, Ben Fleur<br />
                  Witbank, Mpumalanga 3364
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-primary-foreground/80">Contact via form above</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-sm text-primary-foreground/70">
              © 2024 Siyalele Projects. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/70">
                Directors: P.S. Gumede • S.C. Gumede
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/60 text-center font-inter">
              VAT Registered Company • Registration Number: 9279622253 • 
              Serving Witbank and surrounding areas in Mpumalanga Province
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;