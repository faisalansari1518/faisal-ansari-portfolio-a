import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-medium text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Data Analyst
        </p>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Hi, I'm{" "}
          <span className="gradient-text">Faisal Ansari</span>
        </h1>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Transforming raw data into actionable insights through powerful visualizations, dashboards, and analytical solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all neon-glow"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-glass-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <a href="#about" className="inline-block mt-16 animate-float text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
