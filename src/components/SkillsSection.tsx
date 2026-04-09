import { BarChart3, Database, FileSpreadsheet, Code, PieChart } from "lucide-react";

const skills = [
  {
    icon: FileSpreadsheet,
    name: "Excel",
    details: "Pivot Tables, Power Query, VLOOKUP, Conditional Formatting, Data Cleaning",
    level: 90,
  },
  {
    icon: Database,
    name: "SQL",
    details: "Joins, Subqueries, Aggregations, Window Functions, CTEs",
    level: 85,
  },
  {
    icon: BarChart3,
    name: "Power BI",
    details: "DAX, Interactive Dashboards, Data Modeling, KPI Tracking",
    level: 85,
  },
  {
    icon: Code,
    name: "Python",
    details: "Pandas, Matplotlib, Seaborn, NumPy, Data Wrangling",
    level: 75,
  },
  {
    icon: PieChart,
    name: "Data Visualization",
    details: "Tableau, Chart Design, Storytelling with Data, Report Building",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Tools and technologies I use to deliver data-driven solutions.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300 hover:neon-glow"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{skill.details}</p>
              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
