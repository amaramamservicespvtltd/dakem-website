import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, BookOpen, ArrowRight, Upload, FileText, X, Send, AlertCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

const openings = [
  { icon: Briefcase, title: "Internships", desc: "Gain real-world experience through structured internship programs across various technical domains.", type: "Internship" },
  { icon: Users, title: "Technical Trainers", desc: "Join our team of expert trainers and mentor the next generation of engineers and technologists.", type: "Full-time" },
  { icon: BookOpen, title: "Technical Mentors", desc: "Guide students through academic projects and help them build industry-relevant skills.", type: "Part-time / Contract" },
];

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_TYPES.includes(file.type) && !ALLOWED_EXTENSIONS.includes(ext)) {
      setFileError("Only PDF, DOC, and DOCX files are allowed.");
      setResumeFile(null);
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size must be under 5 MB.");
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
  };

  const removeFile = () => {
    setResumeFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeFile) {
      setFileError("Please upload your resume.");
      return;
    }
    setSubmitted(true);
    toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
  };

  return (
    <Layout>
      <PageHero
        badge="Careers"
        title="Join Our Team"
        subtitle="Be part of the mission to bridge education and industry."
        variant="careers"
      />

      {/* Openings */}
      <section className="py-14 sm:py-16" style={{ background: "hsl(220, 40%, 97%)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent shrink-0">
                  <job.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-heading font-bold text-foreground">{job.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{job.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{job.desc}</p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 shrink-0"
                >
                  Apply <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-14 sm:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Apply Now</h2>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Application Submitted!</h3>
                <p className="text-muted-foreground mt-2">We'll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input required type="text" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="Your full name" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                  <input required type="email" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="you@example.com" />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="+91 XXXXXXXXXX" />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Upload Resume *</label>
                  <p className="text-xs text-muted-foreground mb-2">Accepted: PDF, DOC, DOCX — Max 5 MB</p>

                  {!resumeFile ? (
                    <label
                      className="flex flex-col items-center justify-center gap-2 w-full py-6 px-4 rounded-lg border-2 border-dashed border-border bg-background cursor-pointer hover:border-accent/50 transition-all text-center"
                    >
                      <Upload className="h-6 w-6 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Click to upload or drag &amp; drop</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  ) : (
                    <div className="flex items-center gap-3 w-full py-3 px-4 rounded-lg border border-border bg-background">
                      <FileText className="h-5 w-5 text-accent shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">Resume uploaded: {resumeFile.name}</p>
                        <p className="text-xs text-muted-foreground">({formatFileSize(resumeFile.size)})</p>
                      </div>
                      <button type="button" onClick={removeFile} className="text-muted-foreground hover:text-destructive shrink-0">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  )}

                  {fileError && (
                    <div className="flex items-center gap-1.5 mt-2 text-destructive text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{fileError}</span>
                    </div>
                  )}
                </div>

                {/* Message / Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message / Cover Letter <span className="text-muted-foreground font-normal">(optional)</span></label>
                  <textarea rows={4} className="w-full px-3 sm:px-4 py-3 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" placeholder="Tell us about yourself..." />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-bold text-base hover:opacity-90 transition-all shadow-sm w-full justify-center"
                >
                  <Send className="h-4 w-4" />
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
