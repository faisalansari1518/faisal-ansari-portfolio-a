import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Car Sales Dashboard",
    description:
      "Built an interactive Power BI dashboard tracking car sales KPIs including YTD/MTD sales, average price analysis, and regional performance. Used DAX measures for dynamic calculations and revenue tracking.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    color: "from-primary/20 to-accent/10",
  },
  {
    title: "Hospital Emergency Room Data",
    description:
      "Analyzed hospital ER data using Excel and SQL to create pivot reports on patient wait times, department utilization, and customer behaviour patterns. Delivered actionable insights to improve operations.",
    tools: ["Excel", "SQL", "Pivot Tables"],
    color: "from-accent/20 to-primary/10",
  },
  {
    title: "Python Data Analysis Project",
    description:
      "Performed exploratory data analysis using Pandas and Matplotlib to identify trends, generate statistical summaries, and create compelling visualizations for business reporting.",
    tools: ["Python", "Pandas", "Matplotlib"],
    color: "from-primary/15 to-accent/15",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Real-world data projects showcasing analytical and visualization expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300"
            >
              {/* Top gradient strip */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="text-xs border-glass-border text-muted-foreground"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2 font-medium">
                  View Details <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
