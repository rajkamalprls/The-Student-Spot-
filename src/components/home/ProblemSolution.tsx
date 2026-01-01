import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Problem
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Students have talent.<br />
              <span className="text-muted-foreground">But they lack clarity, access, and real opportunities.</span>
            </h3>
            <ul className="space-y-4">
              {[
                "Students don't know what to do, how to do it, or where to start",
                "Opportunities are scattered, hidden, or inaccessible",
                "Colleges lack real industry integration",
                "Companies struggle to find job-ready talent",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-destructive" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-10 border border-primary/10"
          >
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="w-4 h-4" />
              The Solution
            </div>
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-6">
              The Student Spot connects everyone.<br />
              <span className="text-primary">One ecosystem. Real outcomes.</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              TSS connects students, colleges, startups, companies, and mentors into one ecosystem that focuses on real outcomes, not just activity.
            </p>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <p className="font-heading font-semibold text-foreground mb-4">
                The TSS Formula:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {["Skills", "Network", "Proof", "Opportunity"].map((item, index) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-medium">
                      {item}
                    </span>
                    {index < 3 && <span className="text-muted-foreground">+</span>}
                  </span>
                ))}
                <span className="text-muted-foreground">=</span>
                <span className="bg-success/10 text-success px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  Careers
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
