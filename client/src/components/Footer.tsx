import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import supabase from "@/supabaseClient";

export default function Footer() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.email.trim()) {
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
        { email: formData.email }
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
      setFormData({ email: '' }); 
    }
  };

  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4">TestoraLabs</h3>
            <p className="text-background/70 text-sm mb-4">
              Full-spectrum digital marketing solutions to power your business growth.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/eneahs/" className="hover-elevate p-2" data-testid="link-social-linkedin">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/enyoh9" className="hover-elevate p-2" data-testid="link-social-twitter">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/eneahysa10" className="hover-elevate p-2" data-testid="link-social-facebook">
                <SiFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/testoralabs" className="hover-elevate p-2" data-testid="link-social-instagram">
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background" data-testid="link-service-web">Web Development</a></li>
              <li><a href="#" className="hover:text-background" data-testid="link-service-ads">Google & Facebook Ads</a></li>
              <li><a href="#" className="hover:text-background" data-testid="link-service-social">Social Media</a></li>
              <li><a href="#" className="hover:text-background" data-testid="link-service-qa">QA Testing</a></li>
              <li><a href="#" className="hover:text-background" data-testid="link-service-rpa">RPA Automation</a></li>
              <li><a href="#" className="hover:text-background" data-testid="link-service-ai">AI Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start">
                <Mail className="w-4 h-4 mr-2 mt-0.5" />
                <a href="mailto:eneahysa49@gmail.com" className="hover:text-background" data-testid="link-email">
                  freelancer-enea@testoralabs.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 mr-2 mt-0.5" />
                <a href="#" className="hover:text-background" data-testid="link-phone">
                  No phone number available
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>Tirane, Albania</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-background/70 mb-4">
              Get the latest marketing insights delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                data-testid="input-newsletter-email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/10 border-background/30 text-background placeholder:text-background/50"
              />
              <Button 
                data-testid="button-newsletter-submit"
                type="submit" 
                size="sm"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>&copy; 2025 TestoraLabs. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-background" data-testid="link-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
