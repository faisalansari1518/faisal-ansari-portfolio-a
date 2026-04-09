import { GraduationCap, Award, ExternalLink } from "lucide-react";

const education = [
  {
    period: "2024 – Present",
    title: "Bachelor of Science",
    institution: "Mumbai University",
    details: "2nd Year • Focus on ML & AI/Data Science",
  },
  {
    period: "2024",
    title: "12th Science",
    institution: "Radcliffe School",
    details: "Completed Higher Secondary Education",
  },
  {
    period: "2022",
    title: "10th",
    institution: "Radcliffe School",
    details: "Completed Secondary School Certificate",
  },
];

const certifications = [
  {
    name: "Advanced Excel & Power Query",
    link: "https://onedrive.live.com/?photosData=%2Fshare%2FF88D2D80C413F6DD%21sa0680436a009419e8a1f7a9676a1ad63%3Fithint%3Dphoto%26e%3DdoOBzF%26migratedtospo%3Dtrue&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy9mODhkMmQ4MGM0MTNmNmRkL0lRQTJCR2lnQ2FDZVFZb2ZlcFoyb2ExakFlTWhQRUlZaWdDdjlOYkNHeU5Bd2ZjP2U9ZG9PQnpG&view=8",
  },
  {
    name: "Power BI Data Analytics",
    link: "https://onedrive.live.com/?viewid=2f04bf88%2Da426%2D45b2%2D8282%2D9ac57db5519f&id=%2Fpersonal%2Ff88d2d80c413f6dd%2FDocuments%2FCertifications%2FPower%20BI%2Epng&parent=%2Fpersonal%2Ff88d2d80c413f6dd%2FDocuments%2FCertifications",
  },
  {
    name: "Python for Data Analysis",
    link: "https://onedrive.live.com/?photosData=%2Fshare%2FF88D2D80C413F6DD%21secf3c39257904606be345fd59c57d22d%3Fithint%3Dphoto%26e%3D18K82c%26migratedtospo%3Dtrue&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy9mODhkMmQ4MGM0MTNmNmRkL0lRQ1N3X1Bza0ZjR1JyNDBYOVdjVjlJdEFXVVRvTE1vdkEyTk5GcDg4SHA2V2NrP2U9MThLODJj&view=8",
  },
  {
    name: "SQL for Data Science",
    link: "https://onedrive.live.com/?photosData=%2Fshare%2FF88D2D80C413F6DD%21s70879678f86a4615aac802872525752a%3Fithint%3Dphoto%26e%3DIb8atz%26migratedtospo%3Dtrue&redeem=aHR0cHM6Ly8xZHJ2Lm1zL2kvYy9mODhkMmQ4MGM0MTNmNmRkL0lRQjRsb2R3YXZnVlJxcklBb2NsSlhVcUFVeEJCRE1jX0JHVFJRd1puX0Q3Q29FP2U9SWI4YXR6&view=8",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4 animate-fade-up-scroll">
          Education & <span className="gradient-text">Certifications</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-fade-up-scroll">
          Academic background and professional development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* 🎓 Education Timeline */}
          <div className="space-y-0">
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2 animate-fade-up-scroll">
              <GraduationCap size={20} className="text-primary" />
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-glass-border space-y-8">
              {education.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative animate-fade-up-scroll"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-primary border-4 border-background" />

                  <div className="glass-card p-5 hover:scale-[1.03] transition-transform duration-300">
                    <p className="text-xs text-primary font-medium mb-1">{item.period}</p>
                    <h4 className="font-heading font-semibold text-base">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.institution}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🏆 Certifications */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 flex items-center gap-2 animate-fade-up-scroll">
              <Award size={20} className="text-accent" />
              Certifications
            </h3>

            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 flex items-center justify-between gap-4 group hover:border-accent/40 transition-all duration-300 animate-fade-up-scroll hover:scale-[1.05]"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex items-center gap-4">
                    
                    {/* ICON */}
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                      <Award size={18} className="text-accent" />
                    </div>

                    {/* TEXT */}
                    <span className="font-medium text-sm group-hover:text-accent transition-colors">
                      {cert.name}
                    </span>
                  </div>

                  {/* LINK ICON */}
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
