import { Shield, BookOpen, Users, Award, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Master everything from basic security principles to advanced threat detection and incident response."
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry veterans with real-world experience in cybersecurity and ethical hacking."
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Prepare for top certifications like CISSP, CEH, Security+, and more with our targeted training."
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with 24/7 access to course materials and virtual lab environments."
  },
  {
    icon: Zap,
    title: "Hands-on Labs",
    description: "Practice on real-world scenarios in our secure, virtual lab environment with live simulations."
  },
  {
    icon: Shield,
    title: "Job Guarantee",
    description: "95% of our graduates land cybersecurity roles within 6 months, or we'll refund your tuition."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Our
            <span className="bg-gradient-cyber bg-clip-text text-transparent"> Cybersecurity </span>
            Course?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide the most comprehensive and practical cybersecurity training to help you build a successful career in this high-demand field.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow-accent transition-all duration-300 border-border/50 hover:border-cyber-blue/50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-cyber rounded-full flex items-center justify-center group-hover:animate-glow-pulse">
                  <feature.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;