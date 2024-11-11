import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center w-full">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
            Meet Shot: Your AI Hiring Assistant
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform Your Hiring Process with AI-Powered Interviews and
            Data-Driven Assessments
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
            </Button>
            <a href="https://interview.metashot.org/Demo">
              <Button
                size="lg"
                variant="outline"
                className="border-violet-500 text-violet-400 hover:bg-violet-500/10"
              >
                See us in Action
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
