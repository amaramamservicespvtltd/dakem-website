import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import heroBg from "@/assets/hero-bg.jpg";
import academicProjects from "@/assets/academic-projects.jpg";
import industrialTour from "@/assets/industrial-tour.jpg";
import guestLecture from "@/assets/guest-lecture.jpg";
import navaYuva from "@/assets/nava-yuva.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";

const galleryItems = [
  { image: heroBg, label: "Student Collaboration" },
  { image: academicProjects, label: "Academic Projects Showcase" },
  { image: industrialTour, label: "Industrial Visit" },
  { image: guestLecture, label: "Guest Lecture Session" },
  { image: navaYuva, label: "Youth Development Program" },
  { image: labEquipment, label: "Modern Lab Facilities" },
];

const Gallery = () => (
  <Layout>
    <PageHero
      badge="Gallery"
      title="Our Work in Action"
      subtitle="A glimpse into our labs, workshops, events, and programs."
      variant="about"
    />

    <section className="py-14 sm:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <img src={item.image} alt={item.label} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="p-4 text-primary-foreground font-heading font-bold">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Gallery;
