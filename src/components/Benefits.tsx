import { motion } from "framer-motion";
import Image from "./ui/image";

export function Benefits() {
  return (
    <section className="py-24 bg-background w-full  flex items-center min-h-screen">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="relative">
              <Image
                src="/hiring.jpg"
                alt="Hiring Process Illustration"
                width={500}
                height={400}
                className="w-full aspect-square object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Craft Your Personalized Hiring Experience
              </h2>
              <p className="text-muted-foreground">
                Customize every aspect of your recruitment process—from tailored
                interfaces to AI-driven assessment rubrics. Take full control
                while leveraging cutting-edge technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <Image
                src="/analytics.avif"
                alt="Analytics Dashboard"
                width={500}
                height={400}
                className="w-full  aspect-square object-cover rounded-xl"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Advanced Insights, Human-Friendly Reports
              </h2>
              <p className="text-muted-foreground">
                Our intelligent algorithms cut through the noise, delivering
                clear, actionable insights. Identify top talent effortlessly
                with powerful yet easy-to-understand analytics.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
