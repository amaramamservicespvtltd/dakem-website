import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Code, Users, Briefcase, CheckCircle, Star, Wrench, Bot, Check } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TechBackground from "@/components/TechBackground";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "College Partners" },
  { value: "200+", label: "Projects Delivered" },
  { value: "14+", label: "Years Experience" },
];

const services = [
  { icon: GraduationCap, title: "Industry Training & Job Support", desc: "Practical, industry-aligned technical training with career guidance and job assistance." },
  { icon: Code, title: "Educational Projects & Research", desc: "Projects for Diploma, B.Tech, M.Tech & PhD with real-time implementation support." },
  { icon: Wrench, title: "MSME & R&D Support", desc: "Technical project support, R&D assistance, and prototype development for MSMEs." },
  { icon: Briefcase, title: "Internship Programs", desc: "Structured internship programs with practical exposure and industry-oriented mentoring." },
  { icon: Users, title: "Academic & Institutional Services", desc: "Lab manuals, workshops, guest lectures, industrial tours, and admission coordination." },
  { icon: Bot, title: "Programs for Future Innovators", desc: "Robo Kids, AI Kids, and Nava Yuva — sparking innovation from an early age." },
];

const whyPoints = [
  "Bridge between students and industry",
  "Industry-oriented, practical learning approach",
  "Strong academic and industrial expertise",
  "Complete academic, technical, and software services",
  "Commitment to quality, integrity, and results",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(214, 80%, 95%) 0%, hsl(0, 0%, 100%) 100%)" }}>
        <TechBackground />
        <div className="relative container mx-auto px-4 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-5">
                Welcome to DAKEM TECHNO & E-SERVICES PVT LTD
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-heading font-extrabold text-foreground leading-tight">
                DAKEM –{" "}
                <span className="text-gradient">Developing Applied Knowledge</span>{" "}
                for <span className="text-accent">Employability</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Bridging the gap between education and industry through training, projects, internships, and innovation.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base transition-all hover:opacity-90 shadow-lg"
                >
                  Contact Us <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all"
                >
                  Explore Services
                </Link>
              </div>
              {/* Trust Line */}
              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Established in 2022", "Industry-Oriented Training", "Real-Time Projects", "Career Support"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-xl p-6 text-center shadow-card"
              >
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="pt-14 sm:pt-16 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Who We Are"
            title="About DAKEM"
            subtitle="DAKEM is a technology-driven, service-oriented company established on 13th September 2022 in Hyderabad. We bridge the gap between conventional technical education and real-world industry requirements."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services — icon-only cards, no images */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(220, 40%, 97%)" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Our Key Services"
            subtitle="Comprehensive solutions for students, colleges, and industry partners."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
                  <svc.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">{svc.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why DAKEM */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <SectionHeading
            badge="Our Edge"
            title="Why Choose DAKEM?"
            subtitle="We don't just train — we transform careers."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {whyPoints.map((point, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 bg-card rounded-xl p-4 shadow-card"
              >
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/80">{point}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/why-dakem"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="py-14 sm:py-16 gradient-light">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What People Say"
            subtitle="Hear from the students and institutions we've impacted."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ravi K.", role: "B.Tech Student", text: "DAKEM's training program completely transformed my understanding of real-world engineering. I landed my first job within weeks of completing the course." },
              { name: "Prof. Sudha M.", role: "College HOD", text: "Our collaboration with DAKEM has enriched our students' practical knowledge. Their workshops and project guidance are truly exceptional." },
              { name: "Anil R.", role: "MSME Owner", text: "The R&D support and software solutions from DAKEM helped us modernize our operations. Highly professional team." },
            ].map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 italic leading-relaxed">"{t.text}"</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="font-heading font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="gradient-hero rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Ready to Bridge the Gap?
            </h2>
            <p className="mt-4 text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Whether you're a student, college, or MSME — DAKEM has the right solution for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:opacity-90 shadow-lg"
              >
                Get Started Today <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
