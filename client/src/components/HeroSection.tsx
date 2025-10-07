import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/Digital_marketing_agency_hero_f41f03c7.png";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import  supabase  from '@/supabaseClient';


export default function HeroSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    selected_service: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.selected_service.trim()) {
      toast({
        title: "⚠️ Missing Information",
        description: "Please fill out all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    const { data, error } = await supabase
      .from('get_free_strategy_hero_element')
      .insert([
        { fullName: formData.fullName, email: formData.email, selected_service: formData.selected_service }
      ]);

    if (error) {
      toast({
        title: "❌ Error! Try again",
        description: "An error occurred while submitting your information.",
      });
      console.error('Error inserting data:', error.message);
    } else {
      console.log('Data inserted successfully:', data);
      toast({
        title: "✅ Thank You! Your information has been submitted successfully.",
        description: "We will get back to you as soon as possible.",
      });
      setFormData({ fullName: '', email: '', selected_service: '' }); 
    }
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
                data-testid="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-background"
              />
              <Input
                data-testid="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background"
              />
            </div>
            <Select value={formData.selected_service} onValueChange={(value) => setFormData({ ...formData, selected_service: value })}>
              <SelectTrigger data-testid="selected_service" className="bg-background">
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
              >
                Get Free Strategy Session
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
            🎯 My <strong className="text-primary">Goal</strong> is to help you <strong className="text-green-500">grow your business and Succeed </strong>in your digital marketing journey
          </p>
        </Card>
      </div>
    </section>
  );
}
