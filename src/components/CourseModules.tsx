import { CheckCircle, Lock, Network, Search, AlertTriangle, Code, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import securityEducation from "@/assets/security-education.jpg";
import securityTraining from "@/assets/security-training.jpg";

const modules = [
  {
    title: "Cybersecurity Fundamentals",
    duration: "4 weeks",
    level: "Beginner",
    icon: Shield,
    image: securityEducation,
    topics: ["Security Principles", "Risk Assessment", "Security Policies", "Compliance Frameworks"]
  },
  {
    title: "Network Security",
    duration: "6 weeks", 
    level: "Intermediate",
    icon: Network,
    image: securityTraining,
    topics: ["Firewalls & IDS", "VPN Technologies", "Network Monitoring", "Wireless Security"]
  },
  {
    title: "Ethical Hacking",
    duration: "8 weeks",
    level: "Advanced",
    icon: Search,
    image: securityEducation,
    topics: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering", "Web App Security"]
  },
  {
    title: "Incident Response",
    duration: "5 weeks",
    level: "Intermediate",
    icon: AlertTriangle,
    image: securityTraining,
    topics: ["Digital Forensics", "Malware Analysis", "Crisis Management", "Recovery Procedures"]
  },
  {
    title: "Secure Coding",
    duration: "6 weeks",
    level: "Intermediate",
    icon: Code,
    image: securityEducation,
    topics: ["OWASP Top 10", "Code Review", "Secure Development", "API Security"]
  },
  {
    title: "Cryptography",
    duration: "4 weeks",
    level: "Advanced",
    icon: Lock,
    image: securityTraining,
    topics: ["Encryption Algorithms", "PKI Infrastructure", "Digital Signatures", "Blockchain Security"]
  }
];

const CourseModules = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Course
            <span className="bg-gradient-cyber bg-clip-text text-transparent"> Modules </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive curriculum covers all aspects of cybersecurity, from fundamentals to advanced techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="group hover:shadow-glow-accent transition-all duration-300 border-border/50 hover:border-cyber-green/50 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-cyber-blue text-background">
                  {module.level}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-cyber rounded-lg flex items-center justify-center">
                    <module.icon className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{module.duration}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyber-green flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;