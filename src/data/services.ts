import { GraduationCap, Code, Briefcase, BookOpen, Wrench, Users, Mic, Bus, Building, Globe, Bot, Lightbulb, FlaskConical, FolderOpen, Smartphone, Cpu } from "lucide-react";

import trainingLab from "@/assets/training-lab.jpg";
import workshop from "@/assets/workshop.jpg";
import softwareDev from "@/assets/software-dev.jpg";
import roboKids from "@/assets/robo-kids.jpg";
import msmeRd from "@/assets/msme-rd.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";
import internship from "@/assets/internship.jpg";
import guestLecture from "@/assets/guest-lecture.jpg";
import industrialTour from "@/assets/industrial-tour.jpg";
import admission from "@/assets/admission.jpg";
import webDev from "@/assets/web-dev.jpg";
import appDev from "@/assets/app-dev.jpg";
import aiKids from "@/assets/ai-kids.jpg";
import navaYuva from "@/assets/nava-yuva.jpg";
import backlogGuidance from "@/assets/backlog-guidance.jpg";
import academicProjects from "@/assets/academic-projects.jpg";

export interface ServiceDetail {
  slug: string;
  icon: React.ElementType;
  title: string;
  shortDesc: string;
  bullets: string[];
  image: string;
  heroDesc: string;
  details: string[];
  benefits: string[];
  targetAudience: string[];
  process: { step: string; desc: string }[];
  category: string;
}

export const allServices: ServiceDetail[] = [
  {
    slug: "industry-oriented-training",
    icon: GraduationCap,
    title: "Industry-Oriented Training & Job Support",
    shortDesc: "Practical, industry-aligned technical training with complete career support including placement assistance and interview preparation.",
    bullets: [
      "Practical, industry-aligned technical training",
      "Skill development based on current industry requirements",
      "Internship support, career guidance, and job assistance",
      "Resume building and interview preparation",
    ],
    image: trainingLab,
    heroDesc: "Comprehensive training programs aligned with current industry needs, complete with placement support and career guidance to launch your professional career.",
    details: [
      "Our industry-oriented training programs are designed to bridge the gap between academic learning and real-world industry requirements. We offer hands-on, practical training that equips students and professionals with the skills employers are actively seeking.",
      "Each program is crafted in collaboration with industry experts, ensuring curriculum relevance and up-to-date content covering the latest technologies and methodologies.",
      "We provide end-to-end career support including resume building, mock interviews, soft skills development, and direct placement assistance with our network of partner companies.",
    ],
    benefits: [
      "Skill development based on current industry requirements",
      "Internship support, career guidance, and job assistance",
      "Resume building and interview preparation",
      "Real-world project experience during training",
      "Industry-recognized certification upon completion",
      "Access to exclusive job placement network",
    ],
    targetAudience: ["Engineering Students", "Fresh Graduates", "Career Changers", "Working Professionals"],
    process: [
      { step: "Assessment", desc: "Evaluate your current skills and career goals" },
      { step: "Customized Plan", desc: "Create a personalized training roadmap" },
      { step: "Hands-on Training", desc: "Intensive practical sessions with industry tools" },
      { step: "Project Work", desc: "Real-world project implementation" },
      { step: "Placement Support", desc: "Resume prep, mock interviews, and job referrals" },
    ],
    category: "Core Services",
  },
  {
    slug: "educational-projects",
    icon: Code,
    title: "Educational Projects & Research Support",
    shortDesc: "Expert guidance for academic projects and research across Diploma, B.Tech, M.Tech, and PhD levels with real-time implementation.",
    bullets: [
      "Projects for Diploma, B.Tech, M.Tech, and Engineering students",
      "PhD assistance including research paper and thesis support",
      "Real-time, industry-relevant project implementation",
    ],
    image: softwareDev,
    heroDesc: "From concept to implementation — expert guidance for academic projects and research at every level, ensuring quality output and deep learning.",
    details: [
      "DAKEM provides comprehensive project guidance for students across all engineering disciplines. Our team of experienced engineers and researchers helps students conceptualize, design, and implement projects that meet academic standards while being industry-relevant.",
      "We support research at every level — from diploma projects to PhD dissertations, including research paper writing, journal publication assistance, and thesis documentation.",
      "Our approach emphasizes understanding over copying, ensuring students gain genuine knowledge and skills through the project development process.",
    ],
    benefits: [
      "Projects for Diploma, B.Tech, M.Tech, and Engineering students",
      "PhD assistance including research paper and thesis support",
      "Real-time, industry-relevant project implementation",
      "Complete documentation and presentation preparation",
      "Guidance on journal publication and conference papers",
      "Hardware and software implementation support",
    ],
    targetAudience: ["Diploma Students", "B.Tech Students", "M.Tech Students", "PhD Scholars", "Research Faculty"],
    process: [
      { step: "Topic Selection", desc: "Choose a relevant, innovative project topic" },
      { step: "Literature Review", desc: "Comprehensive study of existing research" },
      { step: "Design & Planning", desc: "System architecture and project planning" },
      { step: "Implementation", desc: "Hands-on development with expert guidance" },
      { step: "Documentation & Viva", desc: "Reports, presentations, and viva preparation" },
    ],
    category: "Core Services",
  },
  {
    slug: "msme-rd-support",
    icon: Wrench,
    title: "MSME & R&D Project Support",
    shortDesc: "Technology consulting, R&D assistance, and prototype development for Micro, Small & Medium Enterprises with innovation-driven solutions.",
    bullets: [
      "Technical project support for MSMEs",
      "R&D assistance and prototype development",
      "Innovation-driven consulting solutions",
    ],
    image: msmeRd,
    heroDesc: "Empowering MSMEs with cutting-edge technology solutions, prototype development, and R&D support to drive innovation and competitiveness.",
    details: [
      "DAKEM provides dedicated technology support for MSMEs looking to modernize their operations, develop new products, or optimize existing processes through technology integration.",
      "Our R&D team assists with prototype development, product testing, and process automation, helping small businesses compete with larger enterprises through smart technology adoption.",
      "We also help MSMEs access government grants and subsidies available for technology modernization and R&D initiatives.",
    ],
    benefits: [
      "Technical project support for MSMEs",
      "R&D assistance and prototype development",
      "Innovation-driven consulting solutions",
      "Process automation and optimization",
      "Government grant and subsidy guidance",
      "Technology modernization roadmap",
    ],
    targetAudience: ["MSMEs", "Startup Founders", "Small Business Owners", "R&D Teams"],
    process: [
      { step: "Needs Assessment", desc: "Understand business challenges and goals" },
      { step: "Technology Audit", desc: "Evaluate current tech infrastructure" },
      { step: "Solution Design", desc: "Propose innovative, cost-effective solutions" },
      { step: "Prototype Development", desc: "Build and test prototypes" },
      { step: "Deployment & Support", desc: "Implement solution with ongoing support" },
    ],
    category: "Core Services",
  },
  {
    slug: "lab-manuals-equipment",
    icon: FlaskConical,
    title: "Lab Manuals & Equipment Provision",
    shortDesc: "Complete lab manual preparation and equipment sourcing as per university curriculum to strengthen practical learning in institutions.",
    bullets: [
      "Preparation and supply of lab manuals as per university curriculum",
      "Support for laboratory setup and equipment provision",
      "Assistance to institutions in strengthening practical learning",
    ],
    image: labEquipment,
    heroDesc: "Comprehensive laboratory support — from curriculum-aligned lab manuals to equipment procurement, helping institutions deliver quality practical education.",
    details: [
      "We prepare detailed lab manuals aligned with university syllabi, covering all experiments with clear procedures, observations, and expected outcomes.",
      "Our equipment sourcing service helps institutions procure quality laboratory equipment at competitive prices, with installation and maintenance support.",
      "We also assist in designing lab layouts and recommending equipment configurations for new or upgraded laboratories.",
    ],
    benefits: [
      "Lab manuals prepared as per university curriculum",
      "Laboratory setup and equipment provision support",
      "Strengthening practical learning infrastructure",
      "Quality equipment at competitive pricing",
      "Installation and maintenance support",
      "Custom lab design consultation",
    ],
    targetAudience: ["Engineering Colleges", "Universities", "Polytechnics", "Training Institutes"],
    process: [
      { step: "Curriculum Review", desc: "Study university syllabus requirements" },
      { step: "Manual Preparation", desc: "Create detailed, clear lab manuals" },
      { step: "Equipment Assessment", desc: "Identify required equipment and vendors" },
      { step: "Procurement", desc: "Source and deliver quality equipment" },
      { step: "Setup & Training", desc: "Install equipment and train lab staff" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "backlog-guidance",
    icon: BookOpen,
    title: "Backlog Subjects Guidance",
    shortDesc: "Personalized one-to-one and group-wise coaching with concept clarity and exam-oriented mentoring to help students clear backlogs.",
    bullets: [
      "One-to-one personalized guidance",
      "Group-wise coaching",
      "Concept clarity and exam-oriented academic mentoring",
    ],
    image: backlogGuidance,
    heroDesc: "Dedicated academic mentoring to help students overcome backlog challenges with personalized attention and exam-focused strategies.",
    details: [
      "Our backlog guidance program is designed to help students who are struggling with difficult subjects. We provide personalized attention to understand each student's specific challenges and create a targeted study plan.",
      "Sessions combine concept clarity with practical problem-solving, ensuring students don't just memorize but truly understand the subject matter.",
      "We also provide exam preparation strategies, previous year paper analysis, and mock tests to build confidence before exams.",
    ],
    benefits: [
      "One-to-one personalized guidance",
      "Group-wise coaching for common subjects",
      "Concept clarity and exam-oriented mentoring",
      "Previous year question paper analysis",
      "Mock tests and practice sessions",
      "Flexible scheduling around student timetables",
    ],
    targetAudience: ["Engineering Students", "Diploma Students", "Degree Students"],
    process: [
      { step: "Subject Assessment", desc: "Identify weak areas and knowledge gaps" },
      { step: "Study Plan", desc: "Create a targeted preparation schedule" },
      { step: "Concept Sessions", desc: "Clear fundamentals with expert tutors" },
      { step: "Practice & Testing", desc: "Solve problems and take mock tests" },
      { step: "Exam Readiness", desc: "Final revision and confidence building" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "workshops",
    icon: Users,
    title: "Workshops",
    shortDesc: "Technical and skill-based workshops on emerging technologies with hands-on learning for students and faculty.",
    bullets: [
      "Technical and skill-based workshops on emerging technologies",
      "Hands-on learning for students and faculty",
      "Industry- and curriculum-aligned programs",
    ],
    image: workshop,
    heroDesc: "Practical, hands-on workshops covering trending technologies — designed to upskill students and faculty through interactive learning experiences.",
    details: [
      "Our workshops are designed to provide intensive, hands-on learning experiences in emerging technologies like IoT, Machine Learning, Embedded Systems, Robotics, and more.",
      "Each workshop is led by industry practitioners who bring real-world experience and practical examples to the learning environment.",
      "We offer customizable workshop durations — from half-day introductory sessions to week-long intensive programs, adaptable to institutional needs.",
    ],
    benefits: [
      "Hands-on learning for students and faculty",
      "Industry- and curriculum-aligned programs",
      "Expert trainers with industry experience",
      "Customizable duration and content",
      "Certificates of participation",
      "Post-workshop resource materials",
    ],
    targetAudience: ["Engineering Students", "Faculty Members", "Colleges", "Training Institutes"],
    process: [
      { step: "Topic Selection", desc: "Choose from trending technology areas" },
      { step: "Customization", desc: "Tailor content to audience level and needs" },
      { step: "Preparation", desc: "Set up hardware, software, and materials" },
      { step: "Interactive Sessions", desc: "Hands-on training with live projects" },
      { step: "Assessment & Certification", desc: "Evaluate participants and issue certificates" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "internship-programs",
    icon: Briefcase,
    title: "Internship Programs",
    shortDesc: "Structured internship opportunities providing real-world experience with industry-oriented mentoring and skill development.",
    bullets: [
      "Structured internship programs with practical exposure",
      "Industry-oriented mentoring and skill development",
      "Focus on employability and real-world readiness",
    ],
    image: internship,
    heroDesc: "Gain real-world experience through our structured internship programs — designed to bridge the gap between academic learning and professional practice.",
    details: [
      "Our internship programs provide students with structured, real-world exposure to industry practices. Interns work on live projects under the guidance of experienced mentors.",
      "Each internship is designed to build specific technical and soft skills that employers value, including teamwork, communication, problem-solving, and time management.",
      "We offer internships across multiple domains including software development, embedded systems, IoT, data science, and more.",
    ],
    benefits: [
      "Industry-oriented mentoring and skill development",
      "Focus on employability and real-world readiness",
      "Live project experience",
      "Professional networking opportunities",
      "Internship completion certificate",
      "Potential for full-time job conversion",
    ],
    targetAudience: ["Engineering Students", "Diploma Students", "Fresh Graduates"],
    process: [
      { step: "Application", desc: "Apply with your resume and area of interest" },
      { step: "Selection", desc: "Interview and aptitude assessment" },
      { step: "Onboarding", desc: "Orientation and project assignment" },
      { step: "Mentored Work", desc: "Work on live projects with expert guidance" },
      { step: "Evaluation", desc: "Performance review and certification" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "academic-projects",
    icon: FolderOpen,
    title: "Academic Projects (Major & Minor)",
    shortDesc: "Full guidance and implementation support for B.Tech and M.Tech projects across all branches with documentation and viva preparation.",
    bullets: [
      "B.Tech – ECE, CSE, EEE, AI & ML, IoT, Civil, Mechanical",
      "M.Tech – VLSI Design, Embedded Systems, IoT",
      "Topic selection based on latest industry trends",
      "Hardware and software implementation",
      "Documentation, reports, and presentations",
      "Viva and evaluation preparation",
    ],
    image: academicProjects,
    heroDesc: "Comprehensive Major and Minor project support for B.Tech and M.Tech students — from topic selection to viva preparation.",
    details: [
      "DAKEM offers complete academic project support for both Major and Minor projects across all engineering branches.",
      "B.Tech branches covered: ECE, CSE, EEE, AI & ML, IoT, Civil Engineering, and Mechanical Engineering. M.Tech programs include VLSI Design, Embedded Systems, and IoT.",
      "Our support covers the entire project lifecycle — from identifying trending topics and literature survey to hardware/software implementation, documentation, and viva preparation.",
    ],
    benefits: [
      "B.Tech – ECE, CSE, EEE, AI & ML, IoT, Civil, Mechanical",
      "M.Tech – VLSI Design, Embedded Systems, IoT",
      "Topic selection based on latest industry trends",
      "Hardware & software implementation support",
      "Complete documentation, reports, and presentations",
      "Viva and evaluation preparation",
    ],
    targetAudience: ["B.Tech Students", "M.Tech Students", "Engineering Colleges"],
    process: [
      { step: "Branch & Topic", desc: "Select branch-specific trending project topics" },
      { step: "Proposal", desc: "Prepare project proposal and synopsis" },
      { step: "Design", desc: "System design and architecture planning" },
      { step: "Implementation", desc: "Hardware/software development with guidance" },
      { step: "Documentation & Viva", desc: "Final reports, PPT, and viva preparation" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "guest-lectures",
    icon: Mic,
    title: "Guest Lectures",
    shortDesc: "Industry expert sessions providing exposure to real-world technologies, trends, career guidance, and motivation for students.",
    bullets: [
      "Guest lectures by industry experts and academicians",
      "Exposure to real-world technologies and trends",
      "Career guidance and motivation sessions",
    ],
    image: guestLecture,
    heroDesc: "Bring industry expertise to your campus — our guest lecture program connects students with professionals who share real-world insights and career wisdom.",
    details: [
      "Our guest lecture program brings seasoned industry professionals and academicians to your institution, providing students with valuable exposure to current industry practices and emerging technologies.",
      "Topics range from technical deep-dives to career guidance, entrepreneurship, and motivational sessions tailored to the audience.",
      "We coordinate all logistics — from speaker identification and topic finalization to scheduling and post-event feedback collection.",
    ],
    benefits: [
      "Exposure to real-world technologies and trends",
      "Career guidance and motivation sessions",
      "Industry-academia networking",
      "Diverse range of expert speakers",
      "Customized topics per department needs",
      "Interactive Q&A sessions",
    ],
    targetAudience: ["Engineering Colleges", "Universities", "Student Communities"],
    process: [
      { step: "Topic Request", desc: "Institution specifies areas of interest" },
      { step: "Speaker Matching", desc: "We identify the best industry expert" },
      { step: "Scheduling", desc: "Coordinate dates and logistics" },
      { step: "Lecture Delivery", desc: "Engaging presentation with Q&A" },
      { step: "Feedback", desc: "Collect and share participant feedback" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "industrial-seminars-tours",
    icon: Bus,
    title: "Industrial Seminars & Tours",
    shortDesc: "Organized industrial visits and technical seminars connecting classroom concepts with real industry environments.",
    bullets: [
      "Organization of industrial seminars",
      "Industrial visits and tours for real-time exposure",
      "Connecting classroom concepts with industry environments",
    ],
    image: industrialTour,
    heroDesc: "Experience industry first-hand — our organized industrial tours and seminars bridge the gap between classroom learning and real-world industrial operations.",
    details: [
      "We organize comprehensive industrial tours and seminars that give students direct exposure to real-world manufacturing, technology, and business operations.",
      "Tours are planned to industries relevant to students' branches, ensuring maximum learning value. Each visit includes guided walkthroughs, expert explanations, and interactive sessions.",
      "Our technical seminars feature industry leaders discussing current trends, challenges, and opportunities in various sectors.",
    ],
    benefits: [
      "Real-time exposure to industrial operations",
      "Connecting classroom concepts with industry",
      "Guided tours with expert explanations",
      "Branch-specific industry selection",
      "Networking with industry professionals",
      "Post-visit reports and documentation",
    ],
    targetAudience: ["Engineering Students", "Diploma Students", "Colleges", "Faculty"],
    process: [
      { step: "Planning", desc: "Identify relevant industries and schedule visits" },
      { step: "Coordination", desc: "Handle all logistics and permissions" },
      { step: "Pre-visit Briefing", desc: "Prepare students on what to observe" },
      { step: "Industry Visit", desc: "Guided tour with expert interactions" },
      { step: "Debrief & Report", desc: "Discussion and visit report preparation" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "admission-coordination",
    icon: Building,
    title: "Admission Coordination Services",
    shortDesc: "End-to-end college admission guidance, counseling, course selection support, and documentation assistance.",
    bullets: [
      "Admission guidance and counseling",
      "Support for course selection and academic planning",
      "Institutional coordination and documentation assistance",
    ],
    image: admission,
    heroDesc: "Navigate the admission process with confidence — our coordination services simplify college admissions from counseling to enrollment.",
    details: [
      "Our admission coordination service provides comprehensive support to students and parents navigating the complex college admission process.",
      "We offer guidance on course selection based on student aptitude, career goals, and industry trends, helping make informed decisions about their educational future.",
      "Our team handles documentation, application procedures, and institutional coordination to ensure a smooth admission experience.",
    ],
    benefits: [
      "Admission guidance and counseling",
      "Course selection and academic planning support",
      "Institutional coordination and documentation",
      "Scholarship and financial aid guidance",
      "Aptitude assessment and career mapping",
      "Post-admission support",
    ],
    targetAudience: ["Students (10+2)", "Parents", "Career Changers"],
    process: [
      { step: "Counseling", desc: "Understand aspirations and capabilities" },
      { step: "Course Matching", desc: "Recommend suitable programs and colleges" },
      { step: "Application", desc: "Assist with forms and documentation" },
      { step: "Coordination", desc: "Liaise with institutions on behalf of students" },
      { step: "Enrollment", desc: "Complete admission formalities" },
    ],
    category: "Academic & Institutional",
  },
  {
    slug: "website-development",
    icon: Globe,
    title: "Website Development",
    shortDesc: "Custom, responsive, SEO-friendly website design and development for corporate, educational, and business needs.",
    bullets: [
      "Custom website design and development",
      "Responsive and mobile-friendly websites",
      "Corporate, educational, and business websites",
      "SEO-friendly and performance-optimized solutions",
    ],
    image: webDev,
    heroDesc: "Professional website development that combines stunning design with performance — responsive, SEO-optimized, and built for results.",
    details: [
      "We create custom websites tailored to your brand and business objectives. Every website we build is responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.",
      "Our development process includes SEO optimization from the ground up, ensuring your website ranks well on search engines and attracts organic traffic.",
      "We specialize in corporate websites, educational portals, e-commerce platforms, and institutional websites with content management capabilities.",
    ],
    benefits: [
      "Custom design tailored to your brand",
      "Responsive and mobile-friendly",
      "SEO-friendly and performance-optimized",
      "Content management system integration",
      "SSL security and regular maintenance",
      "Analytics and performance tracking setup",
    ],
    targetAudience: ["Businesses", "Educational Institutions", "Startups", "MSMEs"],
    process: [
      { step: "Requirement Gathering", desc: "Understand goals, audience, and features" },
      { step: "Design", desc: "Create wireframes and visual mockups" },
      { step: "Development", desc: "Code, integrate, and build functionality" },
      { step: "Testing", desc: "Cross-browser, performance, and SEO testing" },
      { step: "Launch & Support", desc: "Deploy and provide ongoing maintenance" },
    ],
    category: "Software Services",
  },
  {
    slug: "application-development",
    icon: Smartphone,
    title: "Application Development",
    shortDesc: "Mobile and web application development — Android, iOS, and custom software solutions that are secure, scalable, and user-focused.",
    bullets: [
      "Mobile application development (Android / iOS)",
      "Web applications and custom software solutions",
      "Secure, scalable, and user-focused development",
    ],
    image: appDev,
    heroDesc: "Build powerful mobile and web applications with our expert development team — delivering secure, scalable, and user-centric digital solutions.",
    details: [
      "Our application development services cover the full spectrum — from native Android and iOS apps to cross-platform solutions and custom web applications.",
      "We follow agile development practices, ensuring iterative delivery, client involvement, and flexibility to adapt to changing requirements.",
      "Every application we build prioritizes security, scalability, and user experience, with thorough testing at every stage of development.",
    ],
    benefits: [
      "Android and iOS app development",
      "Web applications and custom software",
      "Secure, scalable architecture",
      "User-centric design and UX",
      "Agile development methodology",
      "Post-launch support and updates",
    ],
    targetAudience: ["Businesses", "Startups", "Enterprises", "Educational Institutions"],
    process: [
      { step: "Discovery", desc: "Define app vision, features, and target users" },
      { step: "UI/UX Design", desc: "Design intuitive, engaging interfaces" },
      { step: "Development", desc: "Build with modern frameworks and best practices" },
      { step: "Testing & QA", desc: "Rigorous testing across devices and scenarios" },
      { step: "Deployment & Maintenance", desc: "Launch and continuous improvement" },
    ],
    category: "Software Services",
  },
  {
    slug: "robo-kids",
    icon: Bot,
    title: "Robo Kids",
    shortDesc: "Fun and engaging robotics education program designed to spark innovation and creativity in young minds through hands-on learning.",
    bullets: [
      "Robotics education for young minds",
    ],
    image: roboKids,
    heroDesc: "Introducing children to the exciting world of robotics — our Robo Kids program makes learning fun, creative, and hands-on.",
    details: [
      "Robo Kids is our flagship school-level program that introduces children to robotics in a fun, engaging, and age-appropriate way.",
      "Students learn to build and program simple robots, developing skills in logical thinking, problem-solving, creativity, and teamwork.",
      "The program is structured with progressive difficulty levels, keeping children challenged and motivated as they advance through the curriculum.",
    ],
    benefits: [
      "Hands-on robotics learning for young minds",
      "Development of logical thinking and creativity",
      "Age-appropriate curriculum design",
      "Team-based collaborative projects",
      "Competition preparation and participation",
      "Progressive difficulty levels",
    ],
    targetAudience: ["School Students (Ages 8-16)", "Schools", "Parents"],
    process: [
      { step: "Introduction", desc: "Fun orientation to robotics concepts" },
      { step: "Basic Building", desc: "Learn to assemble simple robotic structures" },
      { step: "Programming", desc: "Introduction to programming logic" },
      { step: "Advanced Projects", desc: "Build complex robots with sensors" },
      { step: "Showcase", desc: "Present projects and participate in events" },
    ],
    category: "Programs for Future Innovators",
  },
  {
    slug: "ai-kids",
    icon: Cpu,
    title: "AI Kids",
    shortDesc: "Artificial Intelligence made simple and engaging for young learners — introducing the future of technology through interactive programs.",
    bullets: [
      "Artificial Intelligence made simple and engaging",
    ],
    image: aiKids,
    heroDesc: "Making Artificial Intelligence accessible to young learners — our AI Kids program demystifies AI through interactive, fun, and educational activities.",
    details: [
      "AI Kids introduces school students to the fundamentals of Artificial Intelligence in an engaging, simplified manner that sparks curiosity and understanding.",
      "Through interactive exercises, visual programming tools, and real-world examples, children learn concepts like pattern recognition, machine learning basics, and data analysis.",
      "The program is designed to prepare the next generation for an AI-driven world, building foundational skills that will be essential in future careers.",
    ],
    benefits: [
      "AI concepts simplified for young learners",
      "Interactive and visual learning tools",
      "Real-world AI application examples",
      "Foundation for future tech careers",
      "Creative problem-solving development",
      "Engaging and fun learning environment",
    ],
    targetAudience: ["School Students (Ages 10-16)", "Schools", "Parents"],
    process: [
      { step: "AI Basics", desc: "What is AI and how it works around us" },
      { step: "Data & Patterns", desc: "Understanding data and pattern recognition" },
      { step: "Visual Programming", desc: "Build simple AI models with visual tools" },
      { step: "Projects", desc: "Create AI-powered mini-projects" },
      { step: "Presentation", desc: "Showcase AI projects and learnings" },
    ],
    category: "Programs for Future Innovators",
  },
  {
    slug: "nava-yuva",
    icon: Lightbulb,
    title: "Nava Yuva Program",
    shortDesc: "Empowering degree students with skill development, career awareness, leadership training, and entrepreneurial thinking.",
    bullets: [
      "Skill development, career awareness, and leadership training",
    ],
    image: navaYuva,
    heroDesc: "Shaping tomorrow's leaders — Nava Yuva empowers young adults with essential life skills, career planning, and entrepreneurial vision.",
    details: [
      "Nava Yuva is DAKEM's flagship youth empowerment program designed specifically for degree students who want to develop beyond academics.",
      "The program covers a wide range of essential skills including communication, leadership, teamwork, financial literacy, and entrepreneurial thinking.",
      "Through workshops, mentoring sessions, and real-world challenges, participants develop the confidence and skills needed to excel in their careers and personal lives.",
    ],
    benefits: [
      "Comprehensive skill development for degree students",
      "Career awareness and planning guidance",
      "Leadership and communication training",
      "Entrepreneurial thinking development",
      "Networking with industry professionals",
      "Personal development and confidence building",
    ],
    targetAudience: ["Degree Students", "College Students", "Young Professionals"],
    process: [
      { step: "Enrollment", desc: "Register for the Nava Yuva program" },
      { step: "Skill Assessment", desc: "Identify strengths and development areas" },
      { step: "Training Modules", desc: "Complete leadership and skill workshops" },
      { step: "Mentorship", desc: "One-on-one guidance from industry mentors" },
      { step: "Graduation", desc: "Complete program with action plan for future" },
    ],
    category: "Programs for Future Innovators",
  },
];

export const serviceCategories = [
  {
    label: "Core Services",
    title: "Core Services",
    subtitle: "Industry-oriented training, project support, and R&D solutions for students and enterprises.",
  },
  {
    label: "Academic & Institutional",
    title: "Academic & Institutional Services",
    subtitle: "Strengthening education through practical learning and structured support.",
  },
  {
    label: "Software Services",
    title: "Software Services",
    subtitle: "Professional web and mobile application development for businesses and institutions.",
  },
  {
    label: "Programs for Future Innovators",
    title: "Programs for Future Innovators",
    subtitle: "Sparking innovation and leadership in young minds.",
  },
];

export const getServicesByCategory = (category: string) =>
  allServices.filter((s) => s.category === category);

export const getServiceBySlug = (slug: string) =>
  allServices.find((s) => s.slug === slug);
