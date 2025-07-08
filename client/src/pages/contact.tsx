import { useState } from "react";
import AnimatedSection from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection>
            <h2 className="section-title font-black mb-16">
              GET IN
              <br />
              TOUCH
            </h2>
          </AnimatedSection>
          
          <div className="max-w-2xl mx-auto">
            <AnimatedSection delay={0.2}>
              <p className="text-xl mb-12">
                I'm always open to discussing new opportunities, collaborations, 
                or just having a chat about technology and innovation.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <AnimatedSection delay={0.3}>
                <div>
                  <i className="fas fa-envelope text-3xl mb-4"></i>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:rahul.gopi0604@gmail.com"
                    className="text-gray-600 hover:text-black"
                  >
                    rahul.gopi0604@gmail.com
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <div>
                  <i className="fas fa-phone text-3xl mb-4"></i>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+919677230663"
                    className="text-gray-600 hover:text-black"
                  >
                    +91 9677230663
                  </a>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <div>
                  <i className="fab fa-linkedin text-3xl mb-4"></i>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/rahul-g-639926265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black"
                  >
                    Connect with me
                  </a>
                </div>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={0.6}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:border-black"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:border-black"
                    />
                  </div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="focus:border-black"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus:border-black"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-gray-800"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
