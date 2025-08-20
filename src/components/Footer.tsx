import { createWhatsAppLink } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-poppins text-2xl font-bold mb-4">Siyalele Projects (PTY) LTD</h3>
            <p className="font-inter text-primary-foreground/80 mb-4">
              Your trusted partner for innovative mining, engineering, supply, and consulting solutions across South Africa. Delivering excellence and innovation with every project.
            </p>
            <div className="mb-4">
              <a 
                href={createWhatsAppLink("Hello! I would like to inquire about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                📱 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#leadership" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Directors
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
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
                  Miroh at Aurora | 16 @ Birchwood, Aston Manor, Kempton Park, Johannesburg, 1620, South Africa
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-primary-foreground/80">Email: Siyalele.mr7@gmail.com</p>
              </div>

              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-primary-foreground/80">Phone: +27 72 217 6184</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-sm text-primary-foreground/70">
              © 2025 Siyalele Projects (PTY) LTD. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary-foreground/70">
                Registration: 2022/609469/07
              </span>
              <span className="text-primary-foreground/70">
                CSD: MAAN0476474
              </span>
              <span className="text-primary-foreground/70">
                Tax: 4470735086  
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;