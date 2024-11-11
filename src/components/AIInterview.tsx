import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function AIInterview() {
  return (
    <section className="py-24 bg-background w-full  min-h-screen flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50/5 rounded-2xl p-8 border border-emerald-500/20"
          >
            <div className="space-y-4 max-w-sm mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-6 h-6">
                  <img
                    src="/image.avif"
                    alt="MetaShot Logo"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm font-medium">MetaShot</span>
                <span className="ml-auto text-xs text-muted-foreground">
                  Report
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    M
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-4">
                    <p className="text-sm">
                      Hello! I'm MetaShot, and I'll be conducting your interview
                      today. Let's get started!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start justify-end">
                  <div className="flex-1 bg-violet-500/10 rounded-lg p-4">
                    <p className="text-sm">
                      Great to meet you! I'm ready to showcase my skills and
                      experience.
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center text-white">
                    C
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              AI-Powered Interviews: Empowering HR and Candidates Alike
            </h2>
            <p className="text-muted-foreground">
              Our conversational AI creates a comfortable environment for
              applicants, ensures unbiased evaluations, and streamlines the
              entire interview process for everyone involved. Experience the
              future of hiring with our intelligent, empathetic AI assistant.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Book a call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
