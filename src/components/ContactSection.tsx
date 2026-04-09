import { useState } from "react";
import { Send, Mail, Linkedin, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your EmailJS values
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY";

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I will get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Have a project in mind or want to collaborate? Let's connect!
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-muted/50 border-glass-border focus:border-primary"
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-muted/50 border-glass-border focus:border-primary"
            />

            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-muted/50 border-glass-border focus:border-primary resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all neon-glow flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="space-y-6 flex flex-col justify-center">
            {[
              {
                icon: Mail,
                label: "faisal.alam1588@gmail.com",
                href: "mailto:faisal.alam1588@gmail.com",
              },
              {
                icon: Linkedin,
                label: "LinkedIn Profile",
                href: "https://www.linkedin.com/in/faisal-ansari01/",
              },
              { icon: MapPin, label: "Mumbai, India" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-5 flex items-center gap-4 group hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(0,255,150,0.4)]">
                  <item.icon size={20} className="text-primary" />
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm">{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
