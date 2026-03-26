import { motion } from "framer-motion";
import { Target, Eye, Users, Award, BookOpen, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import aboutTeam from "@/assets/about-team.jpg";

const About = () => (
  <Layout>
    <PageHero
      badge="About Us"
      title="Our Story"
      subtitle="DAKEM – Developing Applied Knowledge for Employability. Established on 13th September 2022 in Hyderabad to bridge the gap between conventional technical education and real-world industry requirements."
      variant="about"
    />

    {/* Who We Are */}
    <section className="py-14 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={aboutTeam} alt="DAKEM Team" className="rounded-2xl shadow-elevated w-full h-80 object-cover" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            DAKEM is a technology-driven, service-oriented company founded with a clear mission: to fill the gap between conventional technical education and real-world industry requirements.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            DAKEM acts as a bridge between students and companies, helping learners convert academic knowledge into industry-ready skills, practical exposure, and meaningful career opportunities through structured training, guidance, and industry interaction.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We don't just educate students — we prepare them for industry and employment.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Our Purpose */}
    <section className="py-14 sm:py-16 gradient-light">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Why DAKEM Was Created</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            In today's competitive environment, traditional technical education alone is not sufficient. Industries demand hands-on skills, real-time experience, and professional readiness. DAKEM was created to address this gap by delivering industry-oriented training, academic support, software solutions, and career guidance.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-14 sm:py-16" style={{ background: "hsl(220, 40%, 97%)" }}>
      <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become a trusted technology and education partner, connecting students, academia, and industry, and shaping skilled professionals for the future.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
          <ul className="text-muted-foreground leading-relaxed space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              To deliver practical, industry-relevant education
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              To provide strong academic guidance and job support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              To promote innovation, research, and real-world learning
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              To empower learners across all age groups
            </li>
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Our Commitment */}
    <section className="py-14 sm:py-16 gradient-light">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-4 mx-auto">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            As technology and industry evolve, DAKEM continuously upgrades its training methodologies, tools, and services to ensure learners remain future-ready and employable. DAKEM stands for knowledge, innovation, and career transformation.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-14 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading badge="Leadership" title="Meet Our Founders" subtitle="Experienced leaders driving DAKEM's mission." />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground text-center">Mr. Dasari Muralidhar</h3>
            <p className="text-accent font-semibold text-sm mb-3 text-center">Founder & Director</p>
            <p className="text-xs text-muted-foreground text-center mb-4">M.Tech (VLSI) – JNTU Kakinada | 14+ Years Experience</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              A seasoned technologist, academician, and industry professional with over 14 years of combined experience in teaching and industry. He began his career as an Assistant Professor for 7 years, then transitioned into the semiconductor industry as a VLSI Associate Engineer, progressing to Team Leader.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              This unique blend of academic depth and industrial expertise enables him to understand both what students learn in classrooms and what companies actually expect in the workplace.
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm font-heading font-semibold text-foreground mb-2">At DAKEM, he leads:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Industry-oriented technical training programs</li>
                <li>• Educational and real-time engineering projects</li>
                <li>• PhD assistance and R&D project support</li>
                <li>• Internship programs and job-oriented skill development</li>
                <li>• Future-technology initiatives like Robo Kids, AI Kids, and Youth Development Programs</li>
              </ul>
            </div>
            <blockquote className="mt-4 p-3 bg-accent/5 rounded-lg border-l-4 border-accent text-sm italic text-foreground/80">
              "Education must create employable skills, not just degrees."
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl p-8 shadow-card"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground text-center">Mrs. Sanke Keerthi</h3>
            <p className="text-accent font-semibold text-sm mb-3 text-center">Founder & Director</p>
            <p className="text-xs text-muted-foreground text-center mb-4">M.A. (Public Administration) – Osmania University, Hyderabad</p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              Mrs. Sanke Keerthi is a Founder of DAKEM with a strong academic background in Public Administration from Osmania University, Hyderabad. She plays a vital role in shaping DAKEM's academic structure, student development programs, and organizational strategy.
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm font-heading font-semibold text-foreground mb-2">Her leadership focuses on:</p>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Academic planning and curriculum structuring</li>
                <li>• Student mentoring and guidance</li>
                <li>• Educational administration and quality systems</li>
                <li>• Youth development and inclusive learning</li>
              </ul>
            </div>
            <blockquote className="mt-4 p-3 bg-accent/5 rounded-lg border-l-4 border-accent text-sm italic text-foreground/80">
              "Strong academic foundations combined with the right guidance create confident and capable professionals."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
