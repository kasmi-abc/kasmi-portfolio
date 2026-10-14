"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  Code2,
  ShoppingCart,
  Layers,
  Zap,
  Database,
  Palette,
  Globe,
  Check,
  Sparkles,
  ArrowRight,
  ArrowUp,
  Eye,
  Info,
  Briefcase,
  GraduationCap,
  Clock,
  Award,
  Box,
  Server,
  Cloud,
  GitBranch,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Lang = "en" | "fr" | "ar";

const translations = {
  en: {
    nav: { home: "Home", about: "About", skills: "Skills", experience: "Experience", projects: "Projects", contact: "Contact" },
    hero: {
      badge: "Available for freelance projects",
      hello: "Hello, I'm",
      name: "Kasmi Haithem",
      role: "Full Stack Developer",
      desc: "I craft premium, scalable web experiences — from elegant landing pages to complex SaaS & E-commerce platforms. Clean code, luxury design, real results.",
      cta1: "View Projects",
      cta2: "Let's Talk",
      stats1: "Projects Delivered",
      stats2: "Happy Clients",
      stats3: "Years Experience",
    },
    about: {
      title: "About Me",
      subtitle: "Passion, precision & performance",
      p1: "I'm a Full Stack Developer based in Algeria, passionate about building digital products that are not just functional, but beautiful and fast.",
      p2: "I combine modern tech (Next.js, Node.js, PostgreSQL) with a refined sense of design to help startups and businesses grow online. My focus: freelance clients who need results, not just code.",
      info: { location: "Algeria • Remote Worldwide", availability: "Available for freelance", response: "Response < 24h" },
    },
    skills: { title: "Skills & Expertise", subtitle: "Technologies I master" },
    experienceSection: {
      title: "Skills & Experience",
      subtitle: "My journey & expertise",
      mySkills: "My Skills",
      experience: "Experience",
      education: "Education",
    },
    services: {
      title: "Services",
      subtitle: "What I can do for you",
      items: [
        { title: "Web Applications", desc: "Custom, scalable web apps with Next.js, React & Node.js. Dashboards, SaaS, portals." },
        { title: "E-commerce Solutions", desc: "High-converting stores with secure payments, inventory & local delivery integration for Algeria." },
        { title: "SaaS & ERP Systems", desc: "Complete business solutions: invoicing, CRM, inventory with real-time analytics." },
        { title: "Landing Pages", desc: "Premium, fast landing pages optimized for conversion. Under 2s load time." },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of recent work",
      filterAll: "All",
      viewCase: "Details",
      screenshots: "Screenshots",
      live: "Live Demo",
      code: "Code",
    },
    based: {
      label: "LOCATION",
      title: "Based in Algeria",
      subtitle: "Open to remote collaboration worldwide.",
      primaryBase: "PRIMARY BASE",
      location: "Algeria, Algeria",
      timezone: "GMT+1 • Remote-friendly",
      openMaps: "Open in Google Maps",
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "Have an idea? Let's make it real.",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Tell me about your project...",
      send: "Send Message",
      infoTitle: "Contact Information",
      or: "Or find me on",
      success: "Message sent successfully! I'll reply within 24h.",
      sending: "Sending...",
      error: "Failed to send. Please email me directly.",
    },
    footer: {
      rights: "© 2026 Kasmi Haithem. Crafted with precision. All rights reserved.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      description: "Full Stack Developer crafting premium web experiences. Available for freelance worldwide.",
    },
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", skills: "Compétences", experience: "Parcours", projects: "Projets", contact: "Contact" },
    hero: {
      badge: "Disponible en freelance",
      hello: "Bonjour, je suis",
      name: "Kasmi Haithem",
      role: "Développeur Full Stack",
      desc: "Je crée des expériences web premium et scalables — des landing pages élégantes aux plateformes SaaS & E-commerce. Code propre, design luxueux, vrais résultats.",
      cta1: "Voir Projets",
      cta2: "Discutons",
      stats1: "Projets Livrés",
      stats2: "Clients Satisfaits",
      stats3: "Années d'Expérience",
    },
    about: {
      title: "À Propos",
      subtitle: "Passion, précision & performance",
      p1: "Développeur Full Stack basé en Algérie, passionné par la création de produits digitaux à la fois fonctionnels, beaux et rapides.",
      p2: "Je combine les technologies modernes (Next.js, Node.js, PostgreSQL) avec un sens raffiné du design pour aider startups et entreprises à croître.",
      info: { location: "Algérie • Remote Mondial", availability: "Disponible en freelance", response: "Réponse < 24h" },
    },
    skills: { title: "Compétences", subtitle: "Technologies maîtrisées" },
    experienceSection: {
      title: "Compétences & Parcours",
      subtitle: "Mon expertise et mon parcours",
      mySkills: "Mes Compétences",
      experience: "Expérience",
      education: "Formation",
    },
    services: {
      title: "Services",
      subtitle: "Ce que je peux faire pour vous",
      items: [
        { title: "Applications Web", desc: "Apps sur mesure avec Next.js & Node.js. Dashboards, SaaS, portails." },
        { title: "E-commerce", desc: "Boutiques performantes avec paiements sécurisés & livraison locale intégrée." },
        { title: "SaaS & ERP", desc: "Solutions complètes : facturation, CRM, stock avec analytics." },
        { title: "Landing Pages", desc: "Pages premium ultra-rapides optimisées pour la conversion." },
      ],
    },
    projects: { title: "Projets Récents", subtitle: "Sélection de réalisations", filterAll: "Tous", viewCase: "Détails", screenshots: "Aperçu", live: "Démo", code: "Code" },
    based: {
      label: "LOCALISATION",
      title: "Basé en Algérie",
      subtitle: "Ouvert à la collaboration à distance dans le monde entier.",
      primaryBase: "BASE PRINCIPALE",
      location: "Algérie",
      timezone: "GMT+1 • Remote-friendly",
      openMaps: "Ouvrir dans Google Maps",
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Vous avez une idée ? Concrétisons-la.",
      name: "Votre Nom",
      email: "Votre Email",
      subject: "Sujet",
      message: "Parlez-moi de votre projet...",
      send: "Envoyer",
      infoTitle: "Coordonnées",
      or: "Ou retrouvez-moi sur",
      success: "Message envoyé ! Je réponds en moins de 24h.",
      sending: "Envoi...",
      error: "Échec d'envoi. Écrivez-moi directement par email.",
    },
    footer: {
      rights: "© 2026 Kasmi Haithem. Conçu avec précision. Tous droits réservés.",
      quickLinks: "Liens Rapides",
      services: "Services",
      contact: "Contact",
      description: "Développeur Full Stack créant des expériences web premium. Disponible en freelance.",
    },
  },
  ar: {
    nav: { home: "الرئيسية", about: "عني", skills: "مهاراتي", experience: "خبراتي", projects: "أعمالي", contact: "تواصل" },
    hero: {
      badge: "متاح لمشاريع الفريلانس",
      hello: "مرحباً، أنا",
      name: "قاسمي هيثم",
      role: "مطور Full Stack",
      desc: "أصنع تجارب ويب فاخرة وقابلة للتوسع — من صفحات هبوط أنيقة إلى منصات SaaS ومتاجر إلكترونية متكاملة. كود نظيف، تصميم فخم، ونتائج حقيقية.",
      cta1: "عرض أعمالي",
      cta2: "لنتحدث",
      stats1: "مشروع منجز",
      stats2: "عميل سعيد",
      stats3: "سنوات خبرة",
    },
    about: {
      title: "من أنا",
      subtitle: "شغف، دقة، وأداء",
      p1: "مطور Full Stack من الجزائر، شغوف ببناء منتجات رقمية ليست فقط عملية، بل جميلة وسريعة.",
      p2: "أجمع بين التقنيات الحديثة (Next.js, Node.js, PostgreSQL) وحس تصميمي راقٍ لمساعدة الشركات الناشئة على النمو. تركيزي: عملاء الفريلانس الذين يبحثون عن نتائج.",
      info: { location: "الجزائر • عمل عن بعد عالمي", availability: "متاح للعمل الحر", response: "رد خلال 24 ساعة" },
    },
    skills: { title: "مهاراتي وخبراتي", subtitle: "التقنيات التي أتقنها" },
    experienceSection: {
      title: "المهارات والخبرة",
      subtitle: "رحلتي وخبراتي",
      mySkills: "مهاراتي",
      experience: "الخبرة",
      education: "التعليم",
    },
    services: {
      title: "خدماتي",
      subtitle: "ماذا يمكنني أن أقدم لك",
      items: [
        { title: "تطبيقات ويب", desc: "تطبيقات مخصصة قابلة للتوسع بـ Next.js و Node.js. لوحات تحكم و SaaS." },
        { title: "متاجر إلكترونية", desc: "متاجر عالية التحويل مع دفع آمن وربط شركات التوصيل في الجزائر." },
        { title: "أنظمة SaaS و ERP", desc: "حلول أعمال متكاملة: فوترة، CRM، مخزون مع تحليلات." },
        { title: "صفحات هبوط", desc: "صفحات فاخرة وسريعة جداً محسنة للتحويل." },
      ],
    },
    projects: { title: "أعمال مختارة", subtitle: "مجموعة من أحدث مشاريعي", filterAll: "الكل", viewCase: "التفاصيل", screenshots: "معاينة", live: "معاينة", code: "الكود" },
    based: {
      label: "الموقع",
      title: "مقيم في الجزائر",
      subtitle: "متاح للعمل عن بعد مع جميع أنحاء العالم.",
      primaryBase: "المقر الرئيسي",
      location: "الجزائر",
      timezone: "GMT+1 • متاح عن بعد",
      openMaps: "فتح في خرائط Google",
    },
    contact: {
      title: "لنعمل معاً",
      subtitle: "لديك فكرة؟ لنحولها إلى واقع.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "احكِ لي عن مشروعك...",
      send: "إرسال الرسالة",
      infoTitle: "معلومات التواصل",
      or: "أو تجدني على",
      success: "تم الإرسال بنجاح! سأرد خلال 24 ساعة.",
      sending: "جارٍ الإرسال...",
      error: "فشل الإرسال. راسلني مباشرة عبر البريد.",
    },
    footer: {
      rights: "© 2026 قاسمي هيثم. صُنع بدقة. جميع الحقوق محفوظة.",
      quickLinks: "روابط سريعة",
      services: "خدماتي",
      contact: "تواصل",
      description: "مطور Full Stack أصنع تجارب ويب فاخرة. متاح للعمل الحر عالمياً.",
    },
  },
} as const;

const projectsData = [
  {
    id: 1,
    title: "NutritionsShop — Supplement Store",
    category: "E-commerce",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Stripe"],
    image: "/projects/nutritionsshop/shot-1.jpg",
    gallery: ["/projects/nutritionsshop/shot-1.jpg"],
    desc: "Online supplement store with DZD pricing, cash-on-delivery orders and full admin dashboard.",
    challenge: "Store owner sold only through social media DMs with no catalog, stock tracking or order history.",
    solution: "Built a complete storefront with product catalog, cart, COD checkout and an admin panel for stock and orders.",
    impact: "Centralized sales in one fast store, 2s load time, 100% mobile optimized.",
    liveUrl: "https://gobodyshop-s.vercel.app",
    githubUrl: "https://github.com/kasmi-abc",
  },
  {
    id: 2,
    title: "SaaS Invoice Pro — Facturation",
    category: "SaaS",
    tech: ["Spring Boot", "Next.js", "PostgreSQL", "Docker"],
    image: "/projects/invoice-pro/shot-1.jpg",
    gallery: ["/projects/invoice-pro/shot-1.jpg", "/projects/invoice-pro/shot-2.jpg", "/projects/invoice-pro/shot-3.jpg", "/projects/invoice-pro/shot-4.jpg", "/projects/invoice-pro/shot-5.jpg", "/projects/invoice-pro/shot-6.jpg", "/projects/invoice-pro/shot-7.jpg", "/projects/invoice-pro/shot-8.jpg", "/projects/invoice-pro/shot-9.jpg", "/projects/invoice-pro/shot-10.jpg"],
    desc: "Invoicing SaaS for freelancers with NIF/RC compliance, QR verification and automated backups.",
    challenge: "Freelancers used manual Word templates without verification or backup.",
    solution: "PDF generation with QR verify link, dashboard with Chart.js and daily Drive backups.",
    impact: "Replaced manual work, 500+ invoices generated securely.",
    liveUrl: "https://agriledger-erp-zgo9.vercel.app",
    githubUrl: "https://github.com/kasmi-abc",
  },
  {
    id: 3,
    title: "MedGestio — Clinic Management",
    category: "Web App",
    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
    image: "/projects/medgestio/shot-1.jpg",
    gallery: ["/projects/medgestio/shot-1.jpg", "/projects/medgestio/shot-2.jpg", "/projects/medgestio/shot-3.jpg", "/projects/medgestio/shot-4.jpg", "/projects/medgestio/shot-5.jpg", "/projects/medgestio/shot-6.jpg", "/projects/medgestio/shot-7.jpg", "/projects/medgestio/shot-8.jpg", "/projects/medgestio/shot-9.jpg", "/projects/medgestio/shot-10.jpg"],
    desc: "Clinic management: appointments, patients, billing and analytics dashboard.",
    challenge: "Clinic managed everything on paper and Excel, causing delays and lost records.",
    solution: "Centralized platform with role-based access for doctors, reception and admin.",
    impact: "70% reduction in appointment management time.",
    liveUrl: "#",
    githubUrl: "https://github.com/kasmi-abc",
  },
  {
    id: 4,
    title: "EnergieApp — Renewable Energy",
    category: "Landing Page",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/projects/energieapp/shot-5.jpg",
    gallery: ["/projects/energieapp/shot-5.jpg", "/projects/energieapp/shot-1.jpg", "/projects/energieapp/shot-2.jpg", "/projects/energieapp/shot-3.jpg", "/projects/energieapp/shot-4.jpg"],
    desc: "Immersive landing page for renewable energy with storytelling and bold visuals.",
    challenge: "Needed a premium, interactive presence to attract investors and clients.",
    solution: "Designed with large typography, smooth scroll and interactive charts.",
    impact: "High engagement, 95+ Lighthouse performance.",
    liveUrl: "https://energieapp.vercel.app/",
    githubUrl: "https://github.com/kasmi-abc",
  },
  {
    id: 5,
    title: "EduPlatform — Science LMS",
    category: "Web App",
    tech: ["Next.js", "Arabic RTL", "PostgreSQL"],
    image: "/projects/eduplatform/shot-1.jpg",
    gallery: ["/projects/eduplatform/shot-1.jpg", "/projects/eduplatform/shot-2.jpg", "/projects/eduplatform/shot-3.jpg", "/projects/eduplatform/shot-4.jpg", "/projects/eduplatform/shot-5.jpg", "/projects/eduplatform/shot-6.jpg", "/projects/eduplatform/shot-7.jpg"],
    desc: "Arabic e-learning platform for science students: videos, notes, exams and progress tracking.",
    challenge: "Teacher needed a platform fully in Arabic with RTL layout and an exam system.",
    solution: "Built RTL-first LMS with video lessons, quiz engine and student progress tracking.",
    impact: "1000+ students enrolled, 4.8/5 satisfaction.",
    liveUrl: "#",
    githubUrl: "https://github.com/kasmi-abc",
  },
  {
    id: 6,
    title: "Salmi — Medical Books Store",
    category: "E-commerce",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Stripe"],
    image: "/projects/salmi/shot-1.jpg",
    gallery: ["/projects/salmi/shot-1.jpg", "/projects/salmi/shot-2.jpg", "/projects/salmi/shot-3.jpg", "/projects/salmi/shot-4.jpg", "/projects/salmi/shot-5.jpg", "/projects/salmi/shot-6.jpg", "/projects/salmi/shot-7.jpg", "/projects/salmi/shot-8.jpg", "/projects/salmi/shot-9.jpg", "/projects/salmi/shot-10.jpg", "/projects/salmi/shot-11.jpg", "/projects/salmi/shot-12.jpg"],
    desc: "Online bookstore for medical books with catalog search, cart and cash-on-delivery.",
    challenge: "Bookshop relied on in-store sales only, with no online catalog or ordering.",
    solution: "Built a searchable catalog with categories, cart, COD checkout and order management.",
    impact: "Books reachable nationwide with fast search and simple checkout.",
    liveUrl: "https://salmi-gold.vercel.app",
    githubUrl: "https://github.com/kasmi-abc",
  },
];

const skillIcons: Record<string, { icon: typeof Code2; color: string; bg: string }> = {
  React: { icon: Code2, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  "Next.js": { icon: Globe, color: "text-black", bg: "bg-black/5" },
  TypeScript: { icon: Code2, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
  Tailwind: { icon: Palette, color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10" },
  "Framer Motion": { icon: Sparkles, color: "text-[#FF0055]", bg: "bg-[#FF0055]/10" },
  "HTML/CSS": { icon: Code2, color: "text-[#E34F26]", bg: "bg-[#E34F26]/10" },
  "Node.js": { icon: Server, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  "Spring Boot": { icon: Box, color: "text-[#6DB33F]", bg: "bg-[#6DB33F]/10" },
  Java: { icon: Code2, color: "text-[#ED8B00]", bg: "bg-[#ED8B00]/10" },
  PostgreSQL: { icon: Database, color: "text-[#336791]", bg: "bg-[#336791]/10" },
  MongoDB: { icon: Database, color: "text-[#47A248]", bg: "bg-[#47A248]/10" },
  Docker: { icon: Box, color: "text-[#2496ED]", bg: "bg-[#2496ED]/10" },
  "Git/GitHub": { icon: Code2, color: "text-[#181717]", bg: "bg-[#181717]/5" },
  "AWS/S3": { icon: Cloud, color: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
  "API Integration": { icon: Globe, color: "text-[#5A2A3A]", bg: "bg-[#5A2A3A]/10" },
  Figma: { icon: Palette, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10" },
  "Agile/Scrum": { icon: Award, color: "text-[#5A2A3A]", bg: "bg-[#5A2A3A]/10" },
};

const skillsData = [
  { group: "Frontend", icon: Palette, items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "HTML/CSS"] },
  { group: "Backend", icon: Database, items: ["Node.js", "Spring Boot", "Java", "PostgreSQL", "MongoDB", "Docker"] },
  { group: "Tools & More", icon: Globe, items: ["Git/GitHub", "AWS/S3", "API Integration", "Figma", "Agile/Scrum"] },
];

const experienceData = [
  { title: "Full-Stack Web Developer", date: "Jan 2023 – Present", desc: "Building end-to-end web applications with Next.js, Spring Boot, and PostgreSQL. Leading freelance projects from design to deployment." },
  { title: "SaaS & E-commerce Specialist", date: "2023 – Present", desc: "Delivering custom ERP, CRM, and SaaS projects for Algerian businesses — from design to deployment." },
  { title: "Back-End Developer", date: "Jan 2023 – Dec 2023", desc: "Designing and implementing scalable APIs, databases, and server-side services." },
  { title: "Freelance Developer", date: "2023 – Present", desc: "Delivering custom solutions for clients worldwide — 20+ projects delivered." },
];

const educationData = [
  { title: "Meta Full Stack Developer Professional Certificate", date: "2023 – 2024", desc: "Coursera / Meta — Online Certification" },
  { title: "Bachelor's Degree in Computer Science", date: "Sep 2021 – Jun 2024", desc: "Faculty of Exact Sciences, Ziane Achour University of Djelfa — Algeria" },
  { title: "Baccalaureate in Science", date: "Jun 2021", desc: "Algeria" },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);
  const [galleryProject, setGalleryProject] = useState<(typeof projectsData)[0] | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [formSending, setFormSending] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const t = translations[lang];
  const isRTL = lang === "ar";

  const filteredProjects = filter === "All" || filter === "الكل" || filter === "Tous" ? projectsData : projectsData.filter((p) => p.category === filter);

  const categories = lang === "ar" ? ["الكل", "Web App", "E-commerce", "SaaS", "Landing Page"] : lang === "fr" ? ["Tous", "Web App", "E-commerce", "SaaS", "Landing Page"] : ["All", "Web App", "E-commerce", "SaaS", "Landing Page"];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setFormSending(true);
    setFormStatus("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/kasmihaithem3@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
          _subject: "Portfolio contact",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    } finally {
      setFormSending(false);
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openGallery = (p: (typeof projectsData)[0]) => {
    setGalleryProject(p);
    setGalleryIndex(0);
  };
  const closeGallery = () => setGalleryProject(null);
  const galleryNext = () => {
    if (galleryProject) setGalleryIndex((i) => (i + 1) % galleryProject.gallery.length);
  };
  const galleryPrev = () => {
    if (galleryProject) setGalleryIndex((i) => (i - 1 + galleryProject.gallery.length) % galleryProject.gallery.length);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject]);

  useEffect(() => {
    if (!galleryProject) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGalleryProject(null);
      if (e.key === "ArrowRight") setGalleryIndex((i) => (i + 1) % galleryProject.gallery.length);
      if (e.key === "ArrowLeft") setGalleryIndex((i) => (i - 1 + galleryProject.gallery.length) % galleryProject.gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryProject]);

  return (
    <div className={`min-h-screen w-full max-w-full overflow-x-clip bg-[#FFFBF7] text-[#2D2420] ${isRTL ? "font-[var(--font-ibm-arabic)]" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <header className="sticky top-0 z-50 bg-[#FFFBF7]/80 backdrop-blur-xl border-b border-[#E8DDD3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] sm:h-[72px] flex items-center justify-between gap-2">
          <a href="#home" className="flex items-center gap-3">
            <img src="/kasmilogo.png" alt="Kasmi logo" className="w-10 h-10 rounded-xl object-contain bg-white border border-[#E8DDD3] p-1 shadow-sm" />
            <div className="hidden sm:block">
              <div className="font-bold leading-none text-[#2D2420]">Kasmi Haithem</div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-[#8B7355]">Full Stack Developer</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, label]) => (
              <a key={key} href={`#${key === "home" ? "home" : key}`} className="text-[13px] tracking-wide font-medium text-[#4A3B32] hover:text-[#5A2A3A] transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-[#F2EDE7] rounded-full p-1 border border-[#E8DDD3]">
              {(["en", "fr", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase transition-all ${lang === l ? "bg-[#5A2A3A] text-white shadow" : "text-[#4A3B32] hover:text-[#5A2A3A]"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-[#5A2A3A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3D1C26] transition-colors">
              {lang === "ar" ? "تواصل معي" : lang === "fr" ? "Me contacter" : "Hire Me"} <ArrowUpRight size={16} />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="lg:hidden border-t border-[#E8DDD3] bg-[#FFFBF7] px-4 sm:px-6 py-6 space-y-4 overflow-hidden">
              {Object.entries(t.nav).map(([key, label]) => (
                <a key={key} onClick={() => setMobileOpen(false)} href={`#${key === "home" ? "home" : key}`} className="block text-sm font-medium">
                  {label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                {(["en", "fr", "ar"] as Lang[]).map((l) => (
                  <button key={l} onClick={() => setLang(l)} className={`flex-1 py-2 rounded-full text-xs font-bold border ${lang === l ? "bg-[#5A2A3A] text-white border-[#5A2A3A]" : "bg-white border-[#E8DDD3]"}`}>
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-20 pb-12 sm:pb-16 overflow-x-clip">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="min-w-0">
            <div className="inline-flex max-w-full flex-wrap items-center gap-2 bg-white border border-[#E8DDD3] rounded-full px-4 py-2 text-xs font-medium shadow-sm mb-6">
              <span className="w-2 h-2 shrink-0 rounded-full bg-[#7A8B6F] animate-pulse" />
              <span className="truncate">{t.hero.badge}</span>
              <span className="hidden sm:inline text-[#8B7355]">• Remote worldwide</span>
            </div>

            <p className="text-[#8B7355] font-medium tracking-wide text-sm mb-2">{t.hero.hello}</p>
            <h1 className="font-serif text-[32px] sm:text-[42px] lg:text-[56px] font-bold leading-[1.05] sm:leading-[0.95] tracking-tight break-words">
              <span className="text-[#5A2A3A]">{t.hero.name}</span>
            </h1>
            <h2 className="font-serif text-[24px] sm:text-[32px] lg:text-[44px] font-light text-[#4A3B32] leading-snug sm:leading-none mt-1 break-words">{t.hero.role}</h2>

            <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] lg:text-[16px] leading-6 sm:leading-7 text-[#5A4A42] max-w-[560px]">{t.hero.desc}</p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6 sm:mt-8">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-[#5A2A3A] text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#3D1C26] transition-colors shadow-lg shadow-[#5A2A3A]/20">
                {t.hero.cta1} <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white border border-[#E8DDD3] px-7 py-3.5 rounded-full font-medium text-sm hover:bg-[#F2EDE7] transition-colors">
                {t.hero.cta2} <Mail size={16} className="text-[#8B7355]" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10 max-w-[420px] border-t border-[#E8DDD3] pt-6">
              <div className="min-w-0">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#5A2A3A]">20+</div>
                <div className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase text-[#8B7355] leading-tight mt-1">{t.hero.stats1}</div>
              </div>
              <div className="min-w-0">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#5A2A3A]">15+</div>
                <div className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase text-[#8B7355] leading-tight mt-1">{t.hero.stats2}</div>
              </div>
              <div className="min-w-0">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#5A2A3A]">3+</div>
                <div className="text-[10px] sm:text-[11px] tracking-wider sm:tracking-widest uppercase text-[#8B7355] leading-tight mt-1">{t.hero.stats3}</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative min-w-0 mt-5 mb-7 sm:mt-0 sm:mb-0">
            <div className="relative bg-[#2D2420] rounded-[24px] sm:rounded-[32px] border border-[#4A3B32] p-2.5 sm:p-3 shadow-xl shadow-[#2D2420]/30 overflow-hidden max-w-full">
              <div className="rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#231B17] max-w-full">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-[#4A3B32] min-w-0">
                  <span className="w-3 h-3 shrink-0 rounded-full bg-[#E0604F]" />
                  <span className="w-3 h-3 shrink-0 rounded-full bg-[#C5D86D]" />
                  <span className="w-3 h-3 shrink-0 rounded-full bg-[#7A8B6F]" />
                  <div className="ml-2 sm:ml-3 flex items-center gap-2 bg-[#2D2420] border border-[#4A3B32] rounded-t-lg px-3 py-1.5 text-xs font-mono text-[#E8DDD3] truncate min-w-0">
                    <Code2 size={12} className="text-[#9B8EC4] shrink-0" /> <span className="truncate">developer.ts</span>
                  </div>
                </div>
                <div className="p-3 sm:p-5 font-mono text-[11px] sm:text-[13.5px] leading-6 sm:leading-7 overflow-hidden">
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">1</span><span className="min-w-0 flex-1 break-words"><span className="text-[#9B8EC4]">const</span> <span className="text-[#E8DDD3]">developer</span> <span className="text-[#8B7355]">=</span> <span className="text-[#E8DDD3]">{"{"}</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">2</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">  name:</span> <span className="text-[#C5D86D]">&quot;Kasmi Haithem&quot;</span><span className="text-[#8B7355]">,</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">3</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">  role:</span> <span className="text-[#C5D86D]">&quot;Full Stack Developer&quot;</span><span className="text-[#8B7355]">,</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">4</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">  stack:</span> <span className="text-[#8B7355]">[</span><span className="text-[#C5D86D]">&quot;Next.js&quot;</span><span className="text-[#8B7355]">,</span> <span className="text-[#C5D86D]">&quot;Node.js&quot;</span><span className="text-[#8B7355]">,</span> <span className="text-[#C5D86D]">&quot;PostgreSQL&quot;</span><span className="text-[#8B7355]">],</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">5</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">  passion:</span> <span className="text-[#C5D86D]">&quot;Building Scalable SaaS &amp; E-Commerce&quot;</span><span className="text-[#8B7355]">,</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">6</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">  status:</span> <span className="text-[#C5D86D]">&quot;Available for Hire&quot;</span></span></div>
                  <div className="flex gap-3 sm:gap-4"><span className="w-4 shrink-0 text-right text-[#4A3B32] select-none">7</span><span className="min-w-0 flex-1 break-words"><span className="text-[#E8DDD3]">{"}"}</span><span className="text-[#9B8EC4]">;</span><span className="ml-1 inline-block w-[8px] h-[16px] bg-[#9B8EC4] animate-pulse align-middle" /></span></div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2.5 bg-[#5A2A3A] text-white text-[11px] font-mono min-w-0">
                  <span className="flex items-center gap-1.5 shrink-0"><GitBranch size={12} /> main</span>
                  <span className="hidden sm:inline opacity-70">TypeScript</span>
                  <span className="ml-auto flex items-center gap-1.5 truncate"><span className="w-2 h-2 shrink-0 rounded-full bg-[#C5D86D] animate-pulse" /> <span className="truncate">Available for Hire</span></span>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 right-3 sm:-top-3 sm:-right-2 lg:-right-4 bg-white border border-[#E8DDD3] rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg flex items-center gap-2 max-w-[calc(100%-1.5rem)]">
              <div className="w-8 h-8 shrink-0 rounded-full bg-[#9B8EC4]/20 flex items-center justify-center">
                <Sparkles size={14} className="text-[#9B8EC4]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold">Clean Code</div>
                <div className="text-[11px] text-[#8B7355]">Scalable & Fast</div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-3 sm:-bottom-4 sm:-left-2 lg:-left-6 bg-[#5A2A3A] text-white rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl">
              <div className="text-lg font-bold leading-none">100%</div>
              <div className="text-[11px] opacity-80 tracking-widest uppercase">Client Focused</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-wrap gap-2 items-center text-xs text-[#8B7355] border-y border-[#E8DDD3]/60 py-4">
          <span className="font-semibold tracking-widest uppercase">Stack:</span>
          {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Tailwind", "Spring Boot", "Figma"].map((tech, i) => (
            <motion.span key={tech} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border border-[#E8DDD3] px-3 py-1.5 rounded-full font-medium text-[#4A3B32]">
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white border-y border-[#E8DDD3] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>
              <div className="inline-flex items-center gap-2 text-[#9B8EC4] text-xs font-bold tracking-[0.18em] uppercase mb-3">
                <span className="w-8 h-[1px] bg-[#9B8EC4]" /> {t.about.subtitle}
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A] mb-6">{t.about.title}</h2>
              <p className="text-[#5A4A42] leading-7 mb-4">{t.about.p1}</p>
              <p className="text-[#5A4A42] leading-7 mb-8">{t.about.p2}</p>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: MapPin, color: "text-[#8B7355]", text: t.about.info.location },
                  { icon: Zap, color: "text-[#7A8B6F]", text: t.about.info.availability },
                  { icon: Phone, color: "text-[#9B8EC4]", text: t.about.info.response },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }} className="bg-[#FFFBF7] border border-[#E8DDD3] rounded-2xl p-4 hover:shadow-md transition-shadow">
                    <item.icon size={18} className={`${item.color} mb-2`} />
                    <div className="text-xs font-bold">{item.text}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }} className="bg-[#FFFBF7] rounded-[24px] border border-[#E8DDD3] p-5 sm:p-8 shadow-sm min-w-0">
              <h3 className="font-serif text-xl font-bold mb-6">At a glance</h3>
              <div className="space-y-5">
                {[
                  { k: "Focus", v: "SaaS, E-commerce, Web Apps" },
                  { k: "Stack", v: "Next.js • Node • PostgreSQL • Docker" },
                  { k: "Languages", v: "Arabic • French • English" },
                  { k: "Location", v: "Algeria (GMT+1) • Remote" },
                ].map((row, i) => (
                  <motion.div key={row.k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08 }} className="flex justify-between border-b border-[#E8DDD3] pb-3 last:border-0">
                    <span className="text-sm font-semibold text-[#8B7355]">{row.k}</span>
                    <span className="text-sm font-medium">{row.v}</span>
                  </motion.div>
                ))}
              </div>
              <a href="/cv.pdf" download className="mt-6 inline-flex w-full justify-center items-center gap-2 bg-[#5A2A3A] text-white py-3 rounded-full text-sm font-medium hover:bg-[#3D1C26] transition-colors">
                Download CV <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A]">{t.skills.title}</h2>
          <p className="text-[#8B7355] mt-3">{t.skills.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((group, idx) => (
            <motion.div key={group.group} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.12, duration: 0.5, ease: "easeOut" }} className="bg-white border border-[#E8DDD3] rounded-[24px] p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#F2EDE7] border border-[#E8DDD3] flex items-center justify-center mb-4">
                <group.icon size={20} className="text-[#5A2A3A]" />
              </div>
              <h3 className="font-bold mb-4">{group.group}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((s, i) => {
                  const cfg = skillIcons[s];
                  const Icon = cfg?.icon || Code2;
                  return (
                    <motion.span key={s} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + idx * 0.1 + i * 0.04 }} className={`inline-flex items-center gap-1.5 bg-[#FFFBF7] border border-[#E8DDD3] px-3 py-1.5 rounded-full text-xs font-medium hover:border-[#5A2A3A]/30 hover:shadow-sm transition-all`}>
                      <span className={`w-5 h-5 rounded-full ${cfg?.bg || "bg-[#F2EDE7]"} flex items-center justify-center shrink-0`}>
                        <Icon size={11} className={cfg?.color || "text-[#5A2A3A]"} />
                      </span>
                      {s}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-[#FDF8F4] border-y border-[#E8DDD3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 text-[#5A2A3A] text-xs font-bold tracking-[0.18em] uppercase mb-3">
                <span className="w-6 h-[2px] bg-[#5A2A3A]" /> EXPERTISE
              </div>
              <h2 className="font-serif text-3xl lg:text-[36px] font-bold text-[#2D2420] leading-tight">Skills & Experience</h2>
              <p className="text-[#8B7355] mt-3 mb-6 text-sm">A blend of modern stack & real-world delivery — from idea to production.</p>

              <h3 className="text-sm font-bold text-[#5A4A42] mb-3">My Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "Spring Boot", "Java", "PostgreSQL", "MongoDB", "Docker", "Git/GitHub", "AWS/S3", "Figma", "API Integration", "Agile/Scrum",
                ].map((skill, i) => {
                  const cfg = skillIcons[skill];
                  const Icon = cfg?.icon || Code2;
                  return (
                    <motion.span key={skill} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }} className="inline-flex items-center gap-1.5 bg-white border border-[#E8DDD3] px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:border-[#5A2A3A]/20 hover:shadow transition-all">
                      <span className={`w-5 h-5 rounded-full ${cfg?.bg || "bg-[#F2EDE7]"} flex items-center justify-center`}>
                        <Icon size={11} className={cfg?.color || "text-[#5A2A3A]"} />
                      </span>
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div className="bg-white border border-[#E8DDD3] rounded-2xl p-1.5 flex gap-1.5 mb-6 shadow-sm">
                <button onClick={() => setActiveTab("experience")} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "experience" ? "bg-[#5A2A3A] text-white shadow" : "text-[#8B7355] hover:bg-[#FFFBF7]"}`}>
                  Experience
                </button>
                <button onClick={() => setActiveTab("education")} className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "education" ? "bg-[#5A2A3A] text-white shadow" : "text-[#8B7355] hover:bg-[#FFFBF7]"}`}>
                  Education
                </button>
              </div>

              <div className="relative border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#E8DDD3] ml-3 rtl:ml-0 rtl:mr-3 pl-8 rtl:pl-0 rtl:pr-8 space-y-6">
                <AnimatePresence mode="wait">
                  {(activeTab === "experience" ? experienceData : educationData).map((item, i) => (
                    <motion.div key={item.title + activeTab} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ delay: i * 0.07 }} className="relative">
                      <span className="absolute -left-[38px] rtl:left-auto rtl:-right-[38px] top-1.5 w-3 h-3 rounded-full bg-[#5A2A3A] border-2 border-[#FFFBF7] shadow ring-2 ring-[#E8DDD3]" />
                      <h4 className="font-bold text-[#2D2420] leading-tight">{item.title}</h4>
                      <div className="text-xs font-bold text-[#9B8EC4] mt-1">{item.date}</div>
                      <p className="text-sm leading-6 text-[#5A4A42] mt-2">{item.desc}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F2EDE7]/60 border-y border-[#E8DDD3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A]">{t.services.title}</h2>
              <p className="text-[#8B7355] mt-2">{t.services.subtitle}</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A2A3A] hover:gap-3 transition-all">
              Get a quote <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((s, i) => {
              const icons = [Layers, ShoppingCart, Database, Zap];
              const Icon = icons[i];
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-white rounded-[24px] border border-[#E8DDD3] p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-[#5A2A3A] flex items-center justify-center mb-4">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[15px] mb-2">{s.title}</h3>
                  <p className="text-sm leading-6 text-[#5A4A42] flex-1">{s.desc}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#5A2A3A]">
                    Request <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A]">{t.projects.title}</h2>
            <p className="text-[#8B7355] mt-2">{t.projects.subtitle}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${filter === cat ? "bg-[#5A2A3A] text-white border-[#5A2A3A] shadow" : "bg-white border-[#E8DDD3] hover:bg-[#F2EDE7]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.97, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.35 }} className="group bg-white rounded-[24px] border border-[#E8DDD3] overflow-hidden hover:shadow-xl hover:border-[#5A2A3A]/20 transition-all flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EDE7]">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border border-[#E8DDD3] shadow-sm">{p.category}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2420]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold leading-tight text-[15px] line-clamp-1">{p.title}</h3>
                  <p className="text-sm text-[#5A4A42] leading-6 mt-2 line-clamp-2 flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] bg-[#F2EDE7] border border-[#E8DDD3] px-2.5 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                    {p.tech.length > 3 && <span className="text-[11px] px-2 py-1 text-[#8B7355]">+{p.tech.length - 3}</span>}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <button onClick={() => openGallery(p)} className="inline-flex items-center justify-center gap-1.5 bg-white border border-[#5A2A3A]/20 text-[#5A2A3A] py-2.5 rounded-full text-xs font-bold hover:bg-[#5A2A3A] hover:text-white transition-colors">
                      <Eye size={13} /> {t.projects.screenshots}
                    </button>
                    <button onClick={() => setSelectedProject(p)} className="inline-flex items-center justify-center gap-1.5 bg-[#5A2A3A] text-white py-2.5 rounded-full text-xs font-bold hover:bg-[#3D1C26] transition-colors">
                      <Info size={13} /> {t.projects.viewCase}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-[#2D2420]/60 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} className="relative bg-[#FFFBF7] rounded-[24px] max-w-3xl w-full max-h-[90vh] max-h-[90dvh] overflow-auto border border-[#E8DDD3] shadow-2xl">
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 w-9 h-9 rounded-full bg-white border border-[#E8DDD3] flex items-center justify-center hover:bg-[#F2EDE7]">
                <X size={16} />
                              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-[180px] sm:h-[280px] object-cover" />
              <div className="p-5 sm:p-8">
                <div className="inline-flex bg-[#5A2A3A] text-white px-3 py-1 rounded-full text-xs font-bold mb-3">{selectedProject.category}</div>
                <h3 className="font-serif text-2xl font-bold text-[#5A2A3A]">{selectedProject.title}</h3>
                <p className="text-[#5A4A42] mt-3 leading-7">{selectedProject.desc}</p>

                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white border border-[#E8DDD3] rounded-2xl p-4">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#9B8EC4] mb-2">Challenge</div>
                    <p className="text-sm leading-6">{selectedProject.challenge}</p>
                  </div>
                  <div className="bg-white border border-[#E8DDD3] rounded-2xl p-4">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#7A8B6F] mb-2">Solution</div>
                    <p className="text-sm leading-6">{selectedProject.solution}</p>
                  </div>
                  <div className="bg-white border border-[#E8DDD3] rounded-2xl p-4">
                    <div className="text-xs font-bold tracking-widest uppercase text-[#8B7355] mb-2">Impact</div>
                    <p className="text-sm leading-6">{selectedProject.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech} className="bg-white border border-[#E8DDD3] px-3 py-1.5 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <a href={selectedProject.liveUrl} target="_blank" className="flex-1 bg-white border border-[#E8DDD3] text-[#5A2A3A] py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#F2EDE7]">
                    <ExternalLink size={16} /> {t.projects.live}
                  </a>
                  <a href={selectedProject.githubUrl} target="_blank" className="flex-1 bg-[#5A2A3A] text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#3D1C26]">
                    <Code2 size={16} /> {t.projects.code}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {galleryProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4">
            <div className="absolute inset-0 bg-[#2D2420]/70 backdrop-blur-sm" onClick={closeGallery} />
            <motion.div initial={{ y: 20, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0, scale: 0.98 }} className="relative bg-[#2D2420] rounded-[24px] max-w-5xl w-full max-h-[90vh] max-h-[90dvh] overflow-hidden border border-[#4A3B32] shadow-2xl flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-4 border-b border-[#4A3B32] min-w-0">
                <h3 className="font-bold text-white text-sm sm:text-base truncate flex-1">{galleryProject.title}</h3>
                <span className="text-xs font-mono text-[#8B7355] shrink-0">{galleryIndex + 1} / {galleryProject.gallery.length}</span>
                <button onClick={closeGallery} className="w-9 h-9 rounded-full bg-[#3A2E28] border border-[#4A3B32] flex items-center justify-center text-white hover:bg-[#5A2A3A] transition-colors shrink-0" aria-label="Close gallery">
                  <X size={16} />
                </button>
              </div>
              <div className="relative flex-1 overflow-hidden bg-[#231B17] flex items-center justify-center min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.img key={galleryProject.gallery[galleryIndex]} src={galleryProject.gallery[galleryIndex]} alt={galleryProject.title} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }} className="max-h-[52vh] sm:max-h-[62vh] w-auto max-w-full object-contain" />
                </AnimatePresence>
                {galleryProject.gallery.length > 1 && (
                  <>
                    <button onClick={galleryPrev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#5A2A3A] text-white shadow-lg flex items-center justify-center hover:bg-[#3D1C26] transition-colors" aria-label="Previous screenshot">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={galleryNext} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#5A2A3A] text-white shadow-lg flex items-center justify-center hover:bg-[#3D1C26] transition-colors" aria-label="Next screenshot">
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {galleryProject.gallery.length > 1 && (
                <div className="flex flex-wrap items-center justify-center gap-2 px-4 sm:px-5 py-4 border-t border-[#4A3B32]">
                  {galleryProject.gallery.map((g, i) => (
                    <button key={g} onClick={() => setGalleryIndex(i)} className={`h-2 rounded-full transition-all ${i === galleryIndex ? "w-6 bg-[#C5D86D]" : "w-2 bg-[#4A3B32] hover:bg-[#8B7355]"}`} aria-label={"Go to screenshot " + (i + 1)} />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="location" className="bg-white border-y border-[#E8DDD3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-[#9B8EC4] text-xs font-bold tracking-[0.18em] uppercase mb-3">{t.based.label}</div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A]">{t.based.title}</h2>
            <p className="text-[#8B7355] mt-2">{t.based.subtitle}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative rounded-[24px] overflow-hidden border border-[#E8DDD3] shadow-xl h-[380px] sm:h-[420px] bg-[#F2EDE7]">
            <iframe
              title="Algeria map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819642.999999!2d5.5!3d36.365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f6f5b3c3b3b3b3%3A0x0!2sConstantine%2C%20Algeria!5e0!3m2!1sen!2sdz!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:bottom-6 sm:left-6 md:bottom-6 md:left-6 bg-[#FFFBF7] border border-[#E8DDD3] rounded-2xl p-4 md:p-5 shadow-xl sm:max-w-[280px] flex gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5A2A3A] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#8B7355]">{t.based.primaryBase}</div>
                <div className="font-bold text-[#2D2420] text-sm mt-0.5">{t.based.location}</div>
                <div className="text-xs text-[#8B7355] mt-1">{t.based.timezone}</div>
                <a href="https://maps.google.com/?q=Constantine,Algeria" target="_blank" className="inline-flex items-center gap-1 text-xs font-bold text-[#5A2A3A] mt-2 hover:gap-2 transition-all">
                  {t.based.openMaps} <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-xl border border-[#E8DDD3] shadow-sm text-xs font-bold">
              Constantine<br /><span className="font-normal text-[#8B7355]">Constantine</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-[#FFFBF7] border-y border-[#E8DDD3]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10">
            <div className="min-w-0">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-[#5A2A3A]">{t.contact.title}</h2>
              <p className="text-[#8B7355] mt-2 mb-8">{t.contact.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-wide text-[#4A3B32]">{t.contact.name}</label>
                    <input required name="name" placeholder="Kasmi Haithem" className="mt-1.5 w-full bg-white border border-[#E8DDD3] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#9B8EC4] focus:ring-2 focus:ring-[#9B8EC4]/20" />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-wide text-[#4A3B32]">{t.contact.email}</label>
                    <input required name="email" type="email" placeholder="kasmihaithem3@gmail.com" className="mt-1.5 w-full bg-white border border-[#E8DDD3] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#9B8EC4] focus:ring-2 focus:ring-[#9B8EC4]/20" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold tracking-wide text-[#4A3B32]">{t.contact.subject}</label>
                  <input required name="subject" placeholder={lang === "ar" ? "مثال: متجر إلكتروني" : "E.g. E-commerce project"} className="mt-1.5 w-full bg-white border border-[#E8DDD3] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#9B8EC4] focus:ring-2 focus:ring-[#9B8EC4]/20" />
                </div>
                <div>
                  <label className="text-xs font-bold tracking-wide text-[#4A3B32]">Message</label>
                  <textarea required name="message" rows={4} placeholder={t.contact.message} className="mt-1.5 w-full bg-white border border-[#E8DDD3] rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#9B8EC4] focus:ring-2 focus:ring-[#9B8EC4]/20 resize-none" />
                </div>
                <button type="submit" disabled={formSending} className="w-full bg-[#5A2A3A] text-white py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#3D1C26] transition-colors disabled:opacity-60">
                  <Send size={16} /> {formSending ? t.contact.sending : t.contact.send}
                </button>
                {formStatus === "success" && <div className="bg-[#7A8B6F]/15 border border-[#7A8B6F]/30 text-[#2D4A4E] px-4 py-3 rounded-2xl text-sm flex items-center gap-2"><Check size={16} /> {t.contact.success}</div>}
                {formStatus === "error" && <div className="bg-red-500/10 border border-red-500/30 text-red-900 px-4 py-3 rounded-2xl text-sm flex items-center gap-2"><X size={16} /> {t.contact.error}</div>}
              </form>
            </div>

            <div className="space-y-6 min-w-0">
              <div className="bg-white border border-[#E8DDD3] rounded-[24px] p-5 sm:p-7 min-w-0">
                <h3 className="font-bold mb-4">{t.contact.infoTitle}</h3>
                <div className="space-y-4 text-sm">
                  <a href="mailto:kasmihaithem3@gmail.com" className="flex items-center gap-3 min-w-0">
                    <span className="w-10 h-10 shrink-0 rounded-full bg-[#FFFBF7] border border-[#E8DDD3] flex items-center justify-center"><Mail size={16} className="text-[#5A2A3A]" /></span> <span className="break-all min-w-0">kasmihaithem3@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#FFFBF7] border border-[#E8DDD3] flex items-center justify-center"><MapPin size={16} className="text-[#8B7355]" /></span> Algeria • GMT+1 • Remote
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#FFFBF7] border border-[#E8DDD3] flex items-center justify-center"><Phone size={16} className="text-[#7A8B6F]" /></span> Response within 24h
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E8DDD3]">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#8B7355] mb-3">{t.contact.or}</div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="https://www.facebook.com/vKjH0.0" target="_blank" className="flex-1 bg-[#FFFBF7] border border-[#E8DDD3] rounded-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#F2EDE7]">
                      <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold">f</span> Facebook
                    </a>
                    <a href="https://www.instagram.com/abdelkader_haith/" target="_blank" className="flex-1 bg-[#FFFBF7] border border-[#E8DDD3] rounded-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#F2EDE7]">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F58529] to-[#DD2A7B] text-white flex items-center justify-center text-xs">◎</span> Instagram
                    </a>
                    <a href="https://t.me/aresiva" target="_blank" className="flex-1 bg-[#FFFBF7] border border-[#E8DDD3] rounded-full py-2.5 flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#F2EDE7]">
                      <Send size={14} className="text-[#229ED9]" /> Telegram
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#5A2A3A] text-white rounded-[24px] p-5 sm:p-7">
                <h4 className="font-serif text-lg font-bold">Why work with me?</h4>
                <ul className="mt-4 space-y-2 text-sm opacity-90">
                  <li className="flex gap-2"><Check size={16} className="text-[#C5D86D] mt-0.5" /> Clean, maintainable code</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#C5D86D] mt-0.5" /> Luxury design + fast performance</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#C5D86D] mt-0.5" /> On-time delivery & support</li>
                  <li className="flex gap-2"><Check size={16} className="text-[#C5D86D] mt-0.5" /> Arabic / French / English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2D2420] text-[#E8DDD3] pt-12 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 pb-8 border-b border-[#4A3B32]">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <img src="/kasmilogo.png" alt="Kasmi logo" className="w-10 h-10 rounded-xl object-contain bg-white p-1" />
                <div>
                  <div className="font-bold text-white leading-none">Kasmi Haithem</div>
                  <div className="text-[11px] tracking-widest uppercase text-[#8B7355]">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-sm leading-6 text-[#8B7355] mt-3">{t.footer.description}</p>
              <div className="flex gap-2 mt-4">
                <a href="https://github.com/kasmi-abc" target="_blank" className="w-9 h-9 rounded-full bg-[#3A2E28] border border-[#4A3B32] flex items-center justify-center hover:bg-[#5A2A3A] transition-colors"><Code2 size={16} /></a>
                <a href="https://linkedin.com" target="_blank" className="w-9 h-9 rounded-full bg-[#3A2E28] border border-[#4A3B32] flex items-center justify-center hover:bg-[#5A2A3A] transition-colors"><Briefcase size={16} /></a>
                <a href="https://t.me/aresiva" target="_blank" className="w-9 h-9 rounded-full bg-[#3A2E28] border border-[#4A3B32] flex items-center justify-center hover:bg-[#5A2A3A] transition-colors"><Send size={16} /></a>
                <a href="mailto:kasmihaithem3@gmail.com" className="w-9 h-9 rounded-full bg-[#3A2E28] border border-[#4A3B32] flex items-center justify-center hover:bg-[#5A2A3A] transition-colors"><Mail size={16} /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t.footer.quickLinks}</h4>
              <ul className="space-y-2 text-sm text-[#8B7355]">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t.footer.services}</h4>
              <ul className="space-y-2 text-sm text-[#8B7355]">
                <li>Web Applications</li>
                <li>E-commerce Solutions</li>
                <li>SaaS & ERP Systems</li>
                <li>Landing Pages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 text-sm">{t.footer.contact}</h4>
              <ul className="space-y-2 text-sm text-[#8B7355]">
                <li className="flex items-center gap-2 min-w-0"><Mail size={14} className="shrink-0" /> <span className="break-all">kasmihaithem3@gmail.com</span></li>
                <li className="flex items-center gap-2"><MapPin size={14} /> Algeria • GMT+1</li>
                <li className="flex items-center gap-2"><Phone size={14} /> Response &lt; 24h</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 text-sm text-[#8B7355]">
            <span>{t.footer.rights}</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button initial={{ opacity: 0, scale: 0.8, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 10 }} onClick={scrollToTop} className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 rounded-xl bg-[#5A2A3A] text-white shadow-lg shadow-[#5A2A3A]/30 flex items-center justify-center hover:bg-[#3D1C26] hover:shadow-xl transition-all border border-white/10" aria-label="Back to top">
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
