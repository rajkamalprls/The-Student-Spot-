import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Award, ArrowRight, Quote, Linkedin, Instagram } from "lucide-react";
import founderImage from "@/assets/founder.png";

const About = () => {
  const values = [
    { icon: Target, title: "Results First", description: "We measure success by real outcomes, not just activities." },
    { icon: Eye, title: "Access for Everyone", description: "Every student deserves opportunities, regardless of their background." },
    { icon: Heart, title: "Community Spirit", description: "We grow together. Your success is our success." },
    { icon: Award, title: "Excellence", description: "We do not settle for average. We aim for the best." },
  ];

  const founderLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rajkamalprls", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rajkamalpanthagani", label: "Instagram" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Building India's Largest <span className="text-gradient">Student Ecosystem</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              The Student Spot is a Pan-India student ecosystem built to solve one simple problem:
              Students do not fail because they lack talent. They fail because they lack access and direction.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To help every student gain clarity, skills, confidence, and real opportunities 
                through structured guidance and hands-on experience. We are not here to just motivate - 
                we are here to build the actual path to success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-primary-foreground"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="font-heading text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-primary-foreground/90">
                To build India's largest student infrastructure connecting education with industry 
                and real outcomes. A future where every student - regardless of their background - 
                has access to the same opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Meet Our <span className="text-gradient">Founder</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 lg:p-12 border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto lg:w-full lg:h-auto aspect-square rounded-2xl overflow-hidden border-4 border-primary/20">
                      <img 
                        src={founderImage} 
                        alt="Rajkamal Panthagani - Founder of The Student Spot" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {founderLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-secondary flex items-center justify-center transition-colors shadow-lg"
                          aria-label={link.label}
                          title={link.label}
                        >
                          <link.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="font-heading font-bold text-xl text-foreground">Rajkamal Panthagani</p>
                    <p className="text-muted-foreground">Founder, The Student Spot</p>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    The Student Spot was founded by <strong>Rajkamal Panthagani</strong>, an MBA graduate 
                    who personally experienced job rejections, introversion, and lack of proper guidance during his student life.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mb-6">
                    Instead of waiting for someone else to fix these problems, he decided to build what he wished 
                    existed during his college days - a system where students do not have to struggle alone.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Today, The Student Spot provides not just motivation, but actual access, structure, and real 
                    opportunities to thousands of students across India.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these principles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl font-bold mb-6"
          >
            Ready to Join the Movement?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-background/70 mb-8 max-w-xl mx-auto"
          >
            Be part of India's fastest-growing student ecosystem.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="secondary" size="lg" asChild>
              <a href="https://forms.gle/HJn2GQDYa64gmvnYA" target="_blank" rel="noopener noreferrer">
                Join Now <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;