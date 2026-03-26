import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";

const testimonials = [
  { name: "Ravi Kumar", role: "B.Tech Student, ECE", text: "DAKEM's training program gave me hands-on experience with real-time projects. Within a month of completing the course, I received my first job offer. The mentorship was invaluable." },
  { name: "Prof. Sudha Madhuri", role: "HOD, CS Department", text: "Our partnership with DAKEM has elevated our students' practical knowledge. Their workshops are well-structured, industry-relevant, and our students consistently benefit." },
  { name: "Anil Reddy", role: "MSME Owner", text: "The R&D support and software development services from DAKEM helped us modernize our operations. Professional, reliable, and innovative team." },
  { name: "Priya Sharma", role: "M.Tech Student", text: "The project guidance I received from DAKEM was exceptional. They helped me select a relevant topic and supported me through the entire implementation." },
  { name: "Dr. Ramesh Babu", role: "Principal, Engineering College", text: "DAKEM's guest lectures and industrial visits have become an integral part of our academic calendar. Our students love the exposure they get." },
  { name: "Sneha Patel", role: "Internship Program Graduate", text: "The internship at DAKEM was a turning point in my career. Real projects, real mentors, and real skills — it was everything I needed." },
];

const Testimonials = () => (
  <Layout>
    <PageHero
      badge="Testimonials"
      title="What People Say"
      subtitle="Hear from students, professors, and industry partners about their DAKEM experience."
      variant="testimonials"
    />

    <section className="py-14 sm:py-16 gradient-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-card relative"
            >
              <Quote className="h-8 w-8 text-accent/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 italic leading-relaxed text-sm">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-heading font-bold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
