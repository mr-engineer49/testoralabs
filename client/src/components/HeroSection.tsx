import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/Digital_marketing_agency_hero_f41f03c7.png";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function HeroSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const submitLead = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/leads", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We'll contact you within 24 hours to discuss your project.",
      });
      setFormData({ name: "", email: "", service: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    submitLead.mutate(formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Maximize Your Digital Marketing ROI
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Full-spectrum digital marketing solutions: Web Development, Google/Facebook Ads, Social Media Management, QA Testing, RPA Automation & AI Integration under one roof.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto p-8 backdrop-blur-md bg-card/95 border-card-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                data-testid="input-hero-name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background"
              />
              <Input
                data-testid="input-hero-email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background"
              />
            </div>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger data-testid="select-hero-service" className="bg-background">
                <SelectValue placeholder="Select Service Interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web-development">Web & Landing Page Development</SelectItem>
                <SelectItem value="google-facebook-ads">Google Ads & Facebook Management</SelectItem>
                <SelectItem value="social-media">Social Media Management</SelectItem>
                <SelectItem value="qa-testing">Software Testing & QA</SelectItem>
                <SelectItem value="rpa-automation">RPA Automation Solutions</SelectItem>
                <SelectItem value="ai-integration">AI Integration Services</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                data-testid="button-hero-submit"
                type="submit" 
                className="flex-1"
                disabled={submitLead.isPending}
              >
                {submitLead.isPending ? "Submitting..." : "Get Free Strategy Session"}
              </Button>
              <Button 
                data-testid="button-hero-view-work"
                type="button" 
                variant="outline" 
                className="flex-1 backdrop-blur-sm bg-background/50"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
              </Button>
            </div>
          </form>
          <p className="text-sm text-muted-foreground mt-6">
            🎯 Trusted by 500+ businesses worldwide
          </p>
        </Card>
      </div>
    </section>
  );
}
