import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Car Sales Dashboard",
    description:
      "Developed an interactive Power BI dashboard analyzing YTD/MTD sales, pricing trends, and regional performance to support business decisions.",
    tools: ["Power BI", "DAX", "Data Modeling"],
    color: "from-primary/20 to-accent/10",
    link: "https://app.powerbi.com/links/ZrkTyN1ygF?ctid=6702d84a-f50b-4bc5-a5ed-1cb1ee69a70f&pbi_source=linkShare&bookmarkGuid=3318f696-b61c-4a52-87aa-57a5822006a7",
  },
  {
    title: "Hospital Emergency Room Analysis",
    description:
      "Analyzed ER data using Excel and SQL to identify patient wait times, department utilization, and operational bottlenecks.",
    tools: ["Excel", "SQL", "Pivot Tables"],
    color: "from-accent/20 to-primary/10",
    link: "https://onedrive.live.com/:x:/g/personal/f88d2d80c413f6dd/IQD1I-gq5kkYTrjHDQI6hRjtAU-ieiqRep5TWensJZ7AxwU",
  },
  {
    title: "Python Data Analysis Project",
    description:
      "Performed exploratory data analysis using Pandas and Matplotlib to uncover trends and generate actionable insights.",
    tools: ["Python", "Pandas", "Matplotlib"],
    color: "from-primary/15 to-accent/15",
    link: "https://onedrive.live.com/?cid=f88d2d80c413f6dd&id=F88D2D80C413F6DD%21s968742fd9a7c4ad9b21f4444d2b65994",
  },

  // 🔥 NEW PROJECTS ADDED

  {
    title: "Road Accidents Dashboard",
    description:
      "Built a Power BI dashboard analyzing accident trends, severity levels, and location-based patterns to improve road safety insights.",
    tools: ["Power BI", "Data Visualization", "DAX"],
    color: "from-red-500/20 to-orange-400/20",
    link: "https://app.powerbi.com/links/ez-FpjvxyJ?ctid=6702d84a-f50b-4bc5-a5ed-1cb1ee69a70f&pbi_source=linkShare",
  },
  {
    title: "Bank Loan Analysis Report",
    description:
      "Developed a financial dashboard to evaluate loan performance, approval trends, and risk segmentation for better decision-making.",
    tools: ["Power BI", "Finance Analytics", "Data Modeling"],
    color: "from-blue-500/20 to-cyan-400/20",
    link: "https://app.powerbi.com/links/iM8ROAIRdA?ctid=6702d84a-f50b-4bc5-a5ed-1cb1ee69a70f&pbi_source=linkShare",
  },
  {
    title: "Pizza Sales Report",
    description:
      "Analyzed sales data to identify top-selling products, revenue trends, and customer behavior to optimize business performance.",
    tools: ["Power BI", "Sales Analysis", "Data Visualization"],
    color: "from-yellow-400/20 to-red-400/20",
    link: "https://app.powerbi.com/links/DsuAnkyEM0?ctid=6702d84a-f50b-4bc5-a5ed-1cb1ee69a70f&pbi_source=linkShare",
  },
];

// 🎬 Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

        {/* 🔥 Animated Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={item}
              className="glass-card overflow-hidden group 
              transition-all duration-500 transform 
              hover:scale-105 hover:-translate-y-2 
              hover:border-primary/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            >
              {/* Gradient strip */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors duration-300">
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
                      className="text-xs border-glass-border text-muted-foreground 
                      transition-all duration-300 group-hover:border-primary/40"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* 🔥 Animated Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary font-medium mt-2
                  transition-all duration-300 transform
                  hover:translate-x-1 hover:text-primary/80"
                >
                  View Project
                  <ExternalLink
                    size={14}
                    className="transition-transform duration-300 
                    group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
