import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyber-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-glow-cyber">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-cyber rounded-full flex items-center justify-center animate-glow-pulse">
                  <Shield className="w-10 h-10 text-background" />
                </div>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to Become a
                <span className="bg-gradient-cyber bg-clip-text text-transparent"> Cybersecurity Expert</span>?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who have launched their cybersecurity careers with our comprehensive training program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                  Enroll Now - $299/month
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                  Free Trial - 7 Days
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div>✅ 30-Day Money Back</div>
                <div>✅ Lifetime Access</div>
                <div>✅ Job Placement Support</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;