import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "2024 – Present",
    title: "B.Com (Bachelor of Commerce)",
    institution: "Mumbai University",
    details: "2nd Year • Focus on ML & AI/Data Science",
  },
  {
    period: "2022 – 2024",
    title: "12th Science",
    institution: "Radcliffe School",
    details: "Completed Higher Secondary Education",
  },
  {
    period: "2022",
    title: "10th (SSC)",
    institution: "Radcliffe School",
    details: "Secondary School Certificate",
  },
];

const certifications = [
  "Advanced Excel & Power Query",
  "Power BI Data Analytics",
  "Python for Data Analysis",
  "SQL for Data Science",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Education & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Academic background and professional development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Timeline */}
          <div className="space-y-0">
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>
            <div className="relative pl-8 border-l-2 border-glass-border space-y-8">
              {education.map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="glass-card p-5">
                    <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                    <h4 className="font-heading font-semibold text-base">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={cert}
                  className="glass-card p-5 flex items-center gap-4 group hover:border-accent/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Award size={18} className="text-accent" />
                  </div>
                  <span className="font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
