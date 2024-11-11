import { motion } from "framer-motion";
import { CheckCircle2, Users, FileText } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Create Your Team",
    description:
      "Set up your hiring team and customize your recruitment workflow.",
  },
  {
    icon: FileText,
    title: "Define Requirements",
    description:
      "Specify job requirements and assessment criteria for candidates.",
  },
  {
    icon: CheckCircle2,
    title: "Start Interviewing",
    description:
      "Launch AI-powered interviews and evaluate candidates efficiently.",
  },
];

export function Steps() {
  return (
    <section className="py-24 w-full min-h-screen  flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Improve your top of the funnel in just{" "}
            <span className="text-emerald-500">3</span> steps
          </h2>
          <p className="text-muted-foreground">
            Build engaging two-way communication for your candidates in a matter
            of 4 minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-lg p-6 h-full border hover:border-emerald-500/50 transition-colors">
                <step.icon className="h-12 w-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-emerald-500/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
