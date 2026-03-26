import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { serviceCategories, getServicesByCategory } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const sectionBgs = [
  "",
  "gradient-light",
  "",
  "gradient-light",
  "",
  "gradient-light",
];

const Services = () => (
  <Layout>
    <PageHero
      badge="Our Services"
      title="What We Do"
      subtitle="A comprehensive suite of services designed for students, colleges, and enterprises."
      variant="services"
    />

    {serviceCategories.map((category, catIdx) => {
      const items = getServicesByCategory(category.label);
      return (
        <section key={category.label} className={`py-14 sm:py-16 ${sectionBgs[catIdx % sectionBgs.length]}`}>
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10 text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                {category.label}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{category.title}</h2>
              {category.subtitle && (
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">{category.subtitle}</p>
              )}
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((svc, i) => (
                <motion.div
                  key={svc.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all flex flex-col"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-3">
                      <svc.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{svc.title}</h3>
                    <ul className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 space-y-1.5">
                      {svc.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5">
                      <Button asChild size="sm" variant="default">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    })}
  </Layout>
);

export default Services;
