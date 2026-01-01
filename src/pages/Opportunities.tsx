import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, Calendar, Award, Users, MapPin, 
  ArrowRight, ExternalLink, Clock, IndianRupee 
} from "lucide-react";

const opportunities = [
  {
    type: "Job",
    title: "Marketing Intern",
    company: "Tech Startup",
    location: "Hyderabad / Remote",
    stipend: "₹8,000/month",
    deadline: "Dec 30, 2025",
  },
  {
    type: "Internship",
    title: "Frontend Developer Intern",
    company: "EdTech Company",
    location: "Remote",
    stipend: "₹10,000/month",
    deadline: "Jan 5, 2026",
  },
  {
    type: "Job",
    title: "Content Writer",
    company: "Media House",
    location: "Bangalore",
    stipend: "₹25,000/month",
    deadline: "Jan 10, 2026",
  },
  {
    type: "Internship",
    title: "Business Development",
    company: "SaaS Startup",
    location: "Mumbai / Remote",
    stipend: "₹15,000/month",
    deadline: "Dec 28, 2025",
  },
];

const events = [
  {
    title: "Career Clarity Workshop",
    date: "Dec 22, 2025",
    time: "5:00 PM IST",
    type: "Workshop",
  },
  {
    title: "Resume Building Masterclass",
    date: "Dec 25, 2025",
    time: "4:00 PM IST",
    type: "Webinar",
  },
  {
    title: "Startup Pitch Day",
    date: "Dec 28, 2025",
    time: "6:00 PM IST",
    type: "Event",
  },
];

const Opportunities = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Briefcase className="w-4 h-4" />
              Opportunities
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Jobs, Internships & <span className="text-gradient">Events</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Discover curated opportunities from verified companies and startups. 
              All opportunities are exclusively for TSS community members.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Jobs & Internships */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          >
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Jobs & Internships
              </h2>
              <p className="text-muted-foreground">Latest opportunities for TSS members</p>
            </div>
            <Button variant="outline" asChild>
              <a href="https://forms.gle/HJn2GQDYa64gmvnYA" target="_blank" rel="noopener noreferrer">
                Join to Apply <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-all hover:border-primary/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                      opp.type === "Job" ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                    }`}>
                      {opp.type}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{opp.title}</h3>
                    <p className="text-muted-foreground">{opp.company}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {opp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <IndianRupee className="w-4 h-4" /> {opp.stipend}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {opp.deadline}
                  </span>
                </div>
                <Button variant="default" className="w-full" asChild>
                  <a href="https://forms.gle/HJn2GQDYa64gmvnYA" target="_blank" rel="noopener noreferrer">
                    Apply Now
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
          >
            <div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">Workshops, webinars, and networking events</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-card transition-shadow"
              >
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success mb-4">
                  {event.type}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {event.time}
                  </span>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://forms.gle/HJn2GQDYa64gmvnYA" target="_blank" rel="noopener noreferrer">
                    Register
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6"
          >
            Want exclusive access to all opportunities?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-xl mx-auto"
          >
            Join The Student Spot community to unlock jobs, internships, events, and mentorship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="https://forms.gle/HJn2GQDYa64gmvnYA" target="_blank" rel="noopener noreferrer">
                Join Now <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Opportunities;
