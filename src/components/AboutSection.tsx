import { Mail, MapPin, Phone, Linkedin } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Passionate about turning complex datasets into clear, compelling stories.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              I'm a <span className="text-primary font-semibold">Data Analyst</span>  with a deep passion for data visualization, dashboard development, and uncovering business insights.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              With hands-on experience in <span className="text-primary">Excel</span>, <span className="text-primary">SQL</span>, <span className="text-primary">Power BI</span>, and <span className="text-primary">Python</span>, I specialize in creating interactive dashboards, performing data cleaning & transformation, and delivering actionable reports that drive decision-making.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Currently, I'm actively exploring Machine Learning and AI/Data Science to expand my analytical toolkit.
            </p>
          </div>

          <div className="glass-card p-8 space-y-6">
            <h3 className="font-heading font-semibold text-lg text-foreground">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "faisal.alam1588@gmail.com", href: "mailto:faisal.alam1588@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9920118935", href: "tel:+91 9920118935" },
                { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/faisal-ansari01/", href: "https://www.linkedin.com/in/faisal-ansari01/" },
                { icon: MapPin, label: "Location", value: "Navi Mumbai, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
