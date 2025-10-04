import { Button } from "@/components/ui/button";

export default function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
          Ready to Transform Your Digital Marketing?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Get a free strategy session with our experts to explore how integrated marketing and technology solutions can grow your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            data-testid="button-cta-strategy"
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
          >
            Schedule Free Strategy Session
          </Button>
          <Button 
            data-testid="button-cta-case-studies"
            size="lg" 
            variant="outline" 
            className="backdrop-blur-sm bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
