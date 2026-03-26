import { motion } from "framer-motion";

import heroAbout from "@/assets/hero-about.jpg";
import heroServices from "@/assets/hero-services.jpg";
import heroWhy from "@/assets/hero-why.jpg";
import heroTestimonials from "@/assets/hero-testimonials.jpg";
import heroCareers from "@/assets/hero-careers.jpg";
import heroContact from "@/assets/hero-contact.jpg";

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  variant?: string;
}

const heroImages: Record<string, string> = {
  about: heroAbout,
  services: heroServices,
  why: heroWhy,
  testimonials: heroTestimonials,
  careers: heroCareers,
  contact: heroContact,
};

const PageHero = ({ badge, title, subtitle, variant = "about" }: PageHeroProps) => (
  <section
    className="relative overflow-hidden py-14 sm:py-16"
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImages[variant] || heroImages.about})` }}
    />
    {/* Dark gradient overlay */}
    <div
      className="absolute inset-0"
      style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.55))" }}
    />
    <div className="relative container mx-auto px-4 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
          {badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-white">
          {title}
        </h1>
        <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </motion.div>
    </div>
  </section>
);

export default PageHero;
