import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";

const reasons = [
  { title: "Bridge Between Students & Industry", desc: "We connect what students learn in classrooms to what industries actually need — closing the skills gap effectively." },
  { title: "Industry-Oriented, Practical Learning", desc: "Our training programs are project-based and lab-driven, ensuring students learn by doing, not just reading." },
  { title: "Strong Academic & Industrial Expertise", desc: "Learn from mentors with 14+ years of combined teaching and industry experience across multiple domains." },
  { title: "Complete Academic, Technical & Software Services", desc: "From academic guidance and projects to software development and MSME support — we cover it all under one roof." },
  { title: "Commitment to Quality, Integrity & Results", desc: "Every program we design is focused on making participants job-ready and industry-confident from day one." },
];

const commitments = [
  "Continuously upgrade training methodologies and tools",
  "Ensure learners remain future-ready and employable",
  "Deliver practical, industry-relevant education",
  "Promote innovation, research, and real-world learning",
];

const WhyDakem = () => (
  <Layout>
    <PageHero
      badge="Our Advantage"
      title="Why Choose DAKEM?"
      subtitle="We don't just educate students — we prepare them for industry and employment."
      variant="why"
    />

    <section className="py-14 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 bg-card rounded-xl p-5 shadow-card"
            >
              <CheckCircle className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Commitment */}
    <section className="py-12 sm:py-14 gradient-light">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 mx-auto">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As technology and industry evolve, DAKEM continuously upgrades its training methodologies, tools, and services to ensure learners remain future-ready and employable.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
            {commitments.map((c, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="gradient-hero rounded-3xl p-10 lg:p-16">
          <h2 className="text-3xl font-heading font-bold text-primary-foreground">Start Your Journey with DAKEM</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto">Join hundreds of students who've transformed their careers through our programs.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-6 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold hover:opacity-90 shadow-lg">
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default WhyDakem;
