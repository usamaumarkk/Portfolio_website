import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
            Hi, I'm <span className="text-primary">Usama Umar</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
            Data Scientist & Machine Learning Engineer
          </h2>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I transform complex data into actionable insights using machine learning, 
          statistical analysis, and data visualization to drive business decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="w-full sm:w-auto">
              View My Work
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
        </div>
        
        <div className="flex justify-center space-x-6 pt-8">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <a href="https://github.com/usamaumarkk" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <a href="https://linkedin.com/in/usamaumarkk/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <a href="mailto:usamaumarkk@gmail.com" target="_blank" rel="noopener noreferrer">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        
        <div className="pt-16">
          <ArrowDown className="h-6 w-6 mx-auto animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}