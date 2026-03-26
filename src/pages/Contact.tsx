import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        badge="Contact Us"
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for inquiries, collaborations, or enrollment."
        variant="contact"
      />

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-foreground">Contact Information</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Address", value: "Hyderabad, Telangana, India" },
                  { icon: Phone, label: "Phone", value: "+91-9963959610" },
                  { icon: Mail, label: "Email", value: "info@dakems.com" },
                ].map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card mt-6 h-64">
                <iframe
                  title="DAKEM Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169474395!2d78.2432!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                {submitted ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground mt-2">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                        <input required type="text" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                        <input required type="email" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                        <input type="tel" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="+91 XXXXXXXXXX" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Subject *</label>
                        <input required type="text" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="How can we help?" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                      <textarea required rows={5} className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" placeholder="Tell us about your requirements..." />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:opacity-90 transition-all shadow-sm w-full justify-center md:w-auto"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
