import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg">Usama Umar</h3>
            <p className="text-sm text-muted-foreground">
              Data Scientist passionate about turning complex data into 
              actionable insights that drive business impact.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <div><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></div>
              <div><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></div>
              <div><a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg">Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Machine Learning Consulting</div>
              <div>Data Strategy & Analytics</div>
              <div>Model Development & Deployment</div>
              <div>Technical Speaking & Training</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Usama Umar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}