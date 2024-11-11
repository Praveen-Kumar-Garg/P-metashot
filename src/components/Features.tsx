import { motion } from "framer-motion";
import {
  UserCircle,
  Video,
  Brain,
  Calendar,
  Network,
  BarChart,
} from "lucide-react";

const features = [
  {
    icon: UserCircle,
    title: "Recruiter Productivity Accelerated",
    description: "Automate candidate screening and evaluation",
  },
  {
    icon: Video,
    title: "Live Video Interviews",
    description: "Conduct seamless remote interviews",
  },
  {
    icon: Brain,
    title: "In-Depth Assessments",
    description: "Expert domain-specific evaluations",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Streamline interview coordination",
  },
  {
    icon: Network,
    title: "Easy ATS Integration",
    description: "Connect with your existing systems",
  },
  {
    icon: BarChart,
    title: "Actionable Insights",
    description: "Data-driven hiring decisions",
  },
];

export function Features() {
  return (
    <section className="py-24 w-full min-h-screen  flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-lg border bg-card p-6 hover:bg-accent/50"
            >
              <feature.icon className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
