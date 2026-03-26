import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, subtitle, centered = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${centered ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{title}</h2>
    {subtitle && (
      <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>
    )}
  </motion.div>
);

export default SectionHeading;
