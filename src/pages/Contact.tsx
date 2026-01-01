import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { 
  Mail, Phone, MapPin, Linkedin, Instagram, 
  Send, MessageCircle, ArrowRight, Twitter, Youtube, Link2, User
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact.thestudentspot@gmail.com", href: "mailto:contact.thestudentspot@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9581929676", href: "tel:+919581929676" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
  ];

  const socialLinks = [
    { icon: MessageCircle, label: "WhatsApp DM", href: "https://wa.me/919581929676?text=Hello+TheStudentSpot%21" },
    { icon: Link2, label: "Aratt", href: "https://aratt.ai/@thestudentspot" },
    { icon: MessageCircle, label: "WhatsApp Channel", href: "https://whatsapp.com/channel/0029Vb6ft6072WTxJ5eMKA2I" },
    { icon: Send, label: "Telegram", href: "https://t.me/thestudentspot" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/the_studentspot" },
    { icon: Twitter, label: "Twitter (X)", href: "https://x.com/the_studentspot?s=09" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/thestudentspot" },
    { icon: Youtube, label: "YouTube", href: "https://youtube.com/@the.studentspot" },
    { icon: Link2, label: "Bento (All Links)", href: "https://bento.me/thestudentspot" },
  ];

  const founderLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rajkamalprls" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/rajkamalpanthagani" },
  ];

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
              <Mail className="w-4 h-4" />
              Contact Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Have questions? Want to partner? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                Get in touch
              </h2>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="font-heading font-semibold text-foreground mb-4">Follow Us & Connect</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-xs text-muted-foreground group-hover:text-primary-foreground text-center">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* Founder Section */}
              <div className="p-6 bg-accent rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">Founder</h3>
                    <p className="text-sm text-muted-foreground">Rajkamal Panthagani</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  {founderLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
