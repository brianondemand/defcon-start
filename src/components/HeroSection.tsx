import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import heroImage from "@/assets/comptiapentest.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D9FF' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-cyber-blue">
              <Shield className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wider uppercase">
                Elite Cybersecurity Training
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Master
              <span className="bg-gradient-cyber bg-clip-text text-transparent">
                {" "}
                Cyber{" "}
              </span>
              <br />
              Security
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Join the next generation of cybersecurity professionals. Learn
              from industry experts and protect the digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group animate-glow-pulse"
              >
                Start Learning Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                View Curriculum
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-cyber-green">500+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-blue">95%</div>
                <div className="text-muted-foreground">Job Placement</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyber-purple">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Cybersecurity Training"
                className="rounded-2xl shadow-glow-cyber w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyber-red/20 to-cyber-green/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
