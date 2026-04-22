/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Clapperboard,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Music2,
  Palette,
  Quote,
  Send,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

type View = 'home' | 'about' | 'services' | 'work' | 'serviceDetail';
type ServiceKey = 'video-production' | 'branding-identity' | 'digital-development' | 'media-strategy';
type WorkFilter = 'All' | 'Branding' | 'Video' | 'Web';

const services = [
  {
    key: 'video-production',
    icon: <Clapperboard size={34} />,
    title: 'Video Production',
    label: 'Video',
    desc: 'Cinematic campaigns, commercial films, launch videos, event coverage, and social-first edits built for high retention.',
    details:
      'From treatment and shot lists to filming, direction, color, sound, and final edits, Curis builds video systems that make your company look trusted, modern, and ready for scale.'
  },
  {
    key: 'branding-identity',
    icon: <Palette size={34} />,
    title: 'Branding Identity',
    label: 'Branding',
    desc: 'Brand strategy, visual identity, logo systems, type, color, messaging, and launch assets with premium consistency.',
    details:
      'We shape the complete identity layer: positioning, tone, visual systems, brand guidelines, campaign assets, and the everyday materials your team needs to show up with confidence.'
  },
  {
    key: 'digital-development',
    icon: <MonitorSmartphone size={34} />,
    title: 'Digital Development',
    label: 'Web',
    desc: 'Websites, landing pages, product interfaces, app screens, dashboards, and conversion-focused digital experiences.',
    details:
      'We design and build fast digital products that turn attention into action, from agency websites and UI/UX systems to apps, portals, and AI-ready workflows.'
  },
  {
    key: 'media-strategy',
    icon: <Megaphone size={34} />,
    title: 'Media Strategy',
    label: 'Strategy',
    desc: 'Content planning, campaign direction, platform strategy, storytelling systems, and performance-oriented distribution.',
    details:
      'We map what to say, where to say it, when to publish, and how to measure progress so brands can build durable trust across social, web, and campaign channels.'
  }
] as const;

const workItems = [
  {
    title: 'Nomad Foods Launch',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    desc: 'Identity system and launch visuals for a consumer brand entering new Somali markets.'
  },
  {
    title: 'Hargeisa Growth Story',
    tag: 'Video',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    desc: 'Cinematic short-form campaign built around founders, community, and local momentum.'
  },
  {
    title: 'Fintech Mobile UX',
    tag: 'Web',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    desc: 'UI/UX direction for onboarding, trust signals, and payment flows.'
  },
  {
    title: 'Creative Market Campaign',
    tag: 'Video',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    desc: 'Social video package, campaign storyboards, and paid-media cutdowns.'
  },
  {
    title: 'Sahan Studio Identity',
    tag: 'Branding',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    desc: 'Premium identity refresh with a refined voice, visual grid, and launch assets.'
  },
  {
    title: 'AI Services Landing Page',
    tag: 'Web',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    desc: 'Conversion-focused page for a technical service offer with a sharp proposal flow.'
  }
] as const;

const team = [
  ['Shafi Abokor', 'Brand Identity Designer'],
  ['Daud Abdirahman', 'Post-Production'],
  ['Jimcale Haji', 'Web/App Developer'],
  ['Mahad Abdillahi', 'Production'],
  ['Sakariye Mohamed', 'Content Writer'],
  ['Abdiaziz Mohamed', 'Production'],
  ['Khalid Egal', 'Graphic Designer']
] as const;

const testimonials = [
  {
    quote:
      'Curis helped us turn a scattered idea into a clean campaign with strategy, visuals, and video that our audience immediately understood.',
    name: 'Ayan M.',
    title: 'Founder, Retail Brand'
  },
  {
    quote:
      'The team brought structure to our story and made our digital presence feel premium without losing the local voice that matters to our customers.',
    name: 'Mohamed A.',
    title: 'Operations Lead, Tech Company'
  },
  {
    quote:
      'From filming to post-production, Curis delivered with calm direction, sharp editing, and a final result that felt ready for serious growth.',
    name: 'Fadumo H.',
    title: 'Marketing Manager'
  },
  {
    quote:
      'Their design thinking made the whole brand easier to explain. We now have a clearer message, stronger assets, and a smoother path for clients.',
    name: 'Khalid I.',
    title: 'Director, Service Company'
  }
] as const;

const whatsappLink = 'https://wa.me/252633135999';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedService, setSelectedService] = useState<ServiceKey>('video-production');
  const [workFilter, setWorkFilter] = useState<WorkFilter>('All');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredWork = useMemo(
    () => workItems.filter((item) => workFilter === 'All' || item.tag === workFilter),
    [workFilter]
  );

  const goToView = (nextView: View) => {
    setMobileOpen(false);
    setView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openService = (key: ServiceKey) => {
    setSelectedService(key);
    goToView('serviceDetail');
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navButtonClass = (active: boolean) =>
    `text-sm font-semibold transition-colors ${active ? 'text-gold' : 'text-white/72 hover:text-gold'}`;

  const selected = services.find((service) => service.key === selectedService) ?? services[0];

  return (
    <div className="min-h-screen flex flex-col bg-background-dark text-white">
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled ? 'bg-background-dark/76 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/20' : 'bg-background-dark/55 backdrop-blur-md border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 h-20 flex items-center justify-between">
          <button className="flex items-center gap-3 text-left" onClick={() => goToView('home')} aria-label="Curis Creative Agency home">
            <span className="w-11 h-11 bg-gold text-background-dark flex items-center justify-center rounded-lg shadow-lg shadow-gold/20">
              <Users size={23} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black tracking-tight heading-font">Curis Creative Agency</span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/45 mt-1">Ca.</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-9">
            <button onClick={() => goToView('home')} className={navButtonClass(view === 'home')}>
              Home
            </button>
            <button onClick={() => goToView('services')} className={navButtonClass(view === 'services' || view === 'serviceDetail')}>
              Services
            </button>
            <button onClick={() => goToView('work')} className={navButtonClass(view === 'work')}>
              Work
            </button>
            <button onClick={() => goToView('about')} className={navButtonClass(view === 'about')}>
              About
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => scrollToSection('get-started')} className="btn-gold hidden sm:inline-flex">
              Get Started
            </button>
            <button
              className="md:hidden w-11 h-11 rounded-lg border border-white/10 flex items-center justify-center text-white"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-white/10 bg-background-dark/95 backdrop-blur-xl px-5 py-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => goToView('home')} className="text-left font-semibold text-white">
                Home
              </button>
              <button onClick={() => goToView('services')} className="text-left font-semibold text-white/75">
                Services
              </button>
              <button onClick={() => goToView('work')} className="text-left font-semibold text-white/75">
                Work
              </button>
              <button onClick={() => goToView('about')} className="text-left font-semibold text-white/75">
                About
              </button>
              <button onClick={() => scrollToSection('get-started')} className="btn-gold w-full justify-center mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <HeroSection scrollToSection={scrollToSection} />
              <QuickNavigation scrollToSection={scrollToSection} />
              <ServicesPreview openService={openService} />
              <ProcessSection />
              <ExpertiseSection openService={openService} />
              <WorkPreview goToWork={() => goToView('work')} />
              <TestimonialsSection />
              <GetStartedSection />
            </motion.div>
          )}

          {view === 'about' && (
            <PageShell keyName="about">
              <AboutPage />
            </PageShell>
          )}

          {view === 'services' && (
            <PageShell keyName="services">
              <ServicesPage openService={openService} />
            </PageShell>
          )}

          {view === 'work' && (
            <PageShell keyName="work">
              <WorkPage filteredWork={filteredWork} workFilter={workFilter} setWorkFilter={setWorkFilter} />
            </PageShell>
          )}

          {view === 'serviceDetail' && (
            <PageShell keyName="service-detail">
              <ServiceDetail service={selected} openService={openService} />
            </PageShell>
          )}
        </AnimatePresence>
      </main>

      <Footer goToView={goToView} scrollToSection={scrollToSection} />
    </div>
  );
}

function PageShell({ children, keyName }: { children: React.ReactNode; keyName: string }) {
  return (
    <motion.div
      key={keyName}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.35 }}
      className="bg-background-dark"
    >
      {children}
    </motion.div>
  );
}

function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] overflow-hidden flex items-center px-5 md:px-6">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80"
      >
        <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,13,18,0.94),rgba(9,13,18,0.72),rgba(9,13,18,0.36))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_20%,rgba(207,172,103,0.18),transparent_32%)]" />

      <div className="relative max-w-7xl mx-auto w-full py-24">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.32em] text-xs font-bold mb-6"
          >
            <Sparkles size={15} />
            Hargeisa to the world
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-white heading-font text-5xl md:text-7xl lg:text-8xl leading-[0.96] max-w-5xl"
          >
            Strategy. Design. Media. AI. Built to scale Somali companies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="text-white/72 text-lg md:text-xl max-w-2xl mt-8 leading-relaxed"
          >
            Curis Creative Agency builds brand systems, cinematic content, digital products, and media strategy for ambitious companies ready to look and move like market leaders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <button onClick={() => scrollToSection('portfolio')} className="btn-outline">
              View Work
              <ArrowUpRight size={18} />
            </button>
            <button onClick={() => scrollToSection('get-started')} className="btn-gold">
              Get Started
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickNavigation({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section className="bg-background-dark border-y border-white/10 px-5 md:px-6">
      <div className="max-w-7xl mx-auto py-5 flex flex-wrap gap-3">
        {[
          ['Home', 'home'],
          ['Services', 'services'],
          ['Work', 'portfolio']
        ].map(([label, target]) => (
          <button key={target} onClick={() => scrollToSection(target)} className="quick-tab">
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview({ openService }: { openService: (key: ServiceKey) => void }) {
  return (
    <section id="services" className="section-shell bg-ink">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Specialized creative systems for serious growth.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {services.map((service) => (
          <button key={service.key} onClick={() => openService(service.key)} className="service-card group text-left">
            <span className="service-icon">{service.icon}</span>
            <span className="block text-2xl font-bold mt-8 mb-4">{service.title}</span>
            <span className="block text-white/62 leading-relaxed">{service.desc}</span>
            <span className="inline-flex items-center gap-2 text-gold font-bold mt-8">
              Explore
              <ChevronRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ['01', 'Pre Production', 'Research, strategy, creative direction, scripts, shot lists, production planning, and a clear execution map.'],
    ['02', 'Production', 'Filming, design sprints, interface creation, campaign builds, content capture, and brand asset production.'],
    ['03', 'Post Production', 'Editing, refinement, delivery, publishing assets, launch support, and performance feedback loops.']
  ];

  return (
    <section className="section-shell bg-background-dark">
      <div className="section-heading">
        <p className="eyebrow">Our Process</p>
        <h2>From idea to finished work with the right pressure at each stage.</h2>
      </div>
      <div className="timeline">
        {steps.map(([num, title, desc], index) => (
          <div key={num} className="timeline-item">
            <div className="timeline-dot">{num}</div>
            {index < steps.length - 1 && <div className="timeline-line" />}
            <h3 className="text-2xl font-bold mt-8 mb-3">{title}</h3>
            <p className="text-white/62 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExpertiseSection({ openService }: { openService: (key: ServiceKey) => void }) {
  return (
    <section className="section-shell bg-ink">
      <div className="section-heading">
        <p className="eyebrow">Expertise</p>
        <h2>Four disciplines, one integrated agency team.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service, index) => (
          <button key={service.key} onClick={() => openService(service.key)} className="expertise-row group">
            <span className="text-gold/65 heading-font text-4xl">0{index + 1}</span>
            <span>
              <span className="block text-2xl font-bold">{service.title}</span>
              <span className="block text-white/58 mt-2">{service.details}</span>
            </span>
            <ArrowUpRight size={22} className="text-gold shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        ))}
      </div>
    </section>
  );
}

function WorkPreview({ goToWork }: { goToWork: () => void }) {
  return (
    <section id="portfolio" className="section-shell bg-background-dark">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="section-heading mb-0">
          <p className="eyebrow">Recent Work</p>
          <h2>Latest projects shaped for attention, trust, and action.</h2>
        </div>
        <button onClick={goToWork} className="btn-outline self-start md:self-end">
          View All Work
          <ArrowUpRight size={18} />
        </button>
      </div>
      <WorkGrid items={workItems.slice(0, 6)} />
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-shell bg-ink">
      <div className="section-heading">
        <p className="eyebrow">Testimonials</p>
        <h2>Clients come to Curis for clarity, polish, and momentum.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <Quote className="text-gold/55 mb-6" size={34} />
            <p className="text-white/72 leading-relaxed mb-8">"{item.quote}"</p>
            <div>
              <h3 className="font-bold text-white">{item.name}</h3>
              <p className="text-sm text-white/45">{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section id="get-started" className="section-shell bg-background-dark">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5">
          <p className="eyebrow">Get Started</p>
          <h2 className="heading-font text-4xl md:text-6xl leading-tight mb-6">Start Your Project With Us</h2>
          <p className="text-white/66 text-lg leading-relaxed mb-8">
            Tell us what you are building, launching, or improving. We will review the project direction and reply with the next best step.
          </p>
          <a className="whatsapp-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            WhatsApp quick contact
          </a>
        </div>

        <form className="lg:col-span-7 form-panel" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <label className="field-label">
              Name
              <input className="field-input" type="text" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" placeholder="you@company.com" />
            </label>
          </div>
          <label className="field-label">
            Project description
            <textarea className="field-input min-h-40 resize-y py-4" placeholder="What do you want Curis to help you create?" />
          </label>
          <button className="btn-gold w-full justify-center" type="submit">
            Submit Project
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">About Curis</p>
        <h1>Creative direction for companies with bigger ambitions.</h1>
      </section>

      <section className="section-shell bg-ink pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6 text-white/72 text-lg leading-relaxed">
            <p>
              Curis Creative Agency is a Hargeisa-based creative company built for the new generation of Somali businesses. We help founders, institutions, and growing teams communicate with more confidence through strategy, brand identity, video production, digital development, and media direction. Our work begins with listening. We study the audience, the market, the offer, and the cultural context behind every project, then translate that understanding into creative systems that are clear, beautiful, and useful.
            </p>
            <p>
              We believe Somali companies deserve the same level of polish, structure, and strategic thinking seen in global markets. That belief shapes how we design logos, plan campaigns, film stories, build websites, write content, and guide a brand's public voice. Curis is not only focused on making things look better; we are focused on making businesses easier to trust, easier to understand, and easier to choose.
            </p>
            <p>
              Our team brings together designers, developers, writers, editors, strategists, and production talent who understand both local realities and international standards. We work with care, speed, and intention, whether the project is a launch film, a full identity system, a landing page, a social campaign, or a long-term media partnership. Curis exists to help ambitious companies scale with a sharper story, stronger visuals, and digital experiences that convert attention into action.
            </p>
            <p>
              Every project is treated as a business tool, not a decoration. We ask what the work must achieve, who it must persuade, and how it should perform after launch. That approach helps clients leave with more than a single campaign; they gain a stronger foundation for future communication. Curis is built for companies that want disciplined creativity, modern execution, and a partner who can connect brand, media, technology, and growth without losing the human story at the center.
            </p>
          </div>
          <div className="lg:col-span-5 about-image">
            <img
              alt="Curis creative production workspace"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </div>
      </section>

      <section className="section-shell bg-background-dark">
        <div className="section-heading">
          <p className="eyebrow">Team</p>
          <h2>The people behind the strategy, design, media, and build.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map(([name, role], index) => (
            <article key={name} className="team-card">
              <div className="team-photo">
                <span>{name.split(' ').map((part) => part[0]).join('')}</span>
                <img
                  alt={`${name} portrait placeholder`}
                  src={`https://images.unsplash.com/photo-${[
                    '1507003211169-0a1dd7228f2d',
                    '1500648767791-00dcc994a43e',
                    '1506794778202-cad84cf45f1d',
                    '1531891437562-4301cf35b7e4',
                    '1531123897727-8f129e1688ce',
                    '1519085360753-af0119f7cbe7',
                    '1527980965255-d3b416303d12'
                  ][index]}?auto=format&fit=crop&w=600&q=80`}
                />
              </div>
              <h3 className="text-xl font-bold mt-5">{name}</h3>
              <p className="text-gold/80 text-sm font-semibold mt-1">{role}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ServicesPage({ openService }: { openService: (key: ServiceKey) => void }) {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Services</p>
        <h1>Strategy, production, identity, and digital work under one roof.</h1>
      </section>
      <section className="section-shell bg-ink pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <button key={service.key} onClick={() => openService(service.key)} className="service-card min-h-80 group text-left">
              <span className="service-icon">{service.icon}</span>
              <span className="block text-3xl font-bold mt-8 mb-4">{service.title}</span>
              <span className="block text-white/62 leading-relaxed">{service.details}</span>
              <span className="inline-flex items-center gap-2 text-gold font-bold mt-8">
                View Details
                <ChevronRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

function WorkPage({
  filteredWork,
  workFilter,
  setWorkFilter
}: {
  filteredWork: typeof workItems[number][];
  workFilter: WorkFilter;
  setWorkFilter: (filter: WorkFilter) => void;
}) {
  const filters: WorkFilter[] = ['All', 'Branding', 'Video', 'Web'];

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Work</p>
        <h1>Portfolio work across branding, video, web, and campaign systems.</h1>
      </section>
      <section className="section-shell bg-ink pt-0">
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setWorkFilter(filter)} className={`filter-pill ${workFilter === filter ? 'is-active' : ''}`}>
              {filter}
            </button>
          ))}
        </div>
        <WorkGrid items={filteredWork} />
      </section>
    </>
  );
}

function ServiceDetail({
  service,
  openService
}: {
  service: typeof services[number];
  openService: (key: ServiceKey) => void;
}) {
  const deliverables = {
    'video-production': ['Creative treatment', 'Filming direction', 'Commercial edits', 'Social cutdowns'],
    'branding-identity': ['Brand strategy', 'Logo systems', 'Guidelines', 'Launch assets'],
    'digital-development': ['UI/UX design', 'Landing pages', 'Web builds', 'App interfaces'],
    'media-strategy': ['Campaign planning', 'Content calendars', 'Channel strategy', 'Performance review']
  }[service.key];

  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">{service.title}</p>
        <h1>{service.details}</h1>
      </section>
      <section className="section-shell bg-ink pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 detail-panel">
            <span className="service-icon">{service.icon}</span>
            <h2 className="heading-font text-4xl md:text-5xl mt-8 mb-5">{service.title}</h2>
            <p className="text-white/68 text-lg leading-relaxed">{service.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {deliverables.map((item) => (
                <div key={item} className="deliverable">
                  <ChevronRight size={17} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 side-list">
            {services.map((item) => (
              <button key={item.key} onClick={() => openService(item.key)} className={`side-link ${item.key === service.key ? 'is-active' : ''}`}>
                <span>{item.title}</span>
                <ArrowUpRight size={17} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WorkGrid({ items }: { items: readonly (typeof workItems[number])[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {items.map((item) => (
        <article key={item.title} className="work-card group">
          <img alt={item.title} src={item.img} />
          <div className="work-overlay">
            <p className="text-gold text-xs uppercase tracking-[0.28em] font-bold mb-2">{item.tag}</p>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-white/72 leading-relaxed">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Footer({
  goToView,
  scrollToSection
}: {
  goToView: (view: View) => void;
  scrollToSection: (id: string) => void;
}) {
  return (
    <footer className="bg-black text-white py-16 px-5 md:px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
        <div>
          <span className="text-3xl font-black heading-font">Curis Creative Agency</span>
          <p className="text-white/56 text-sm leading-relaxed max-w-sm mt-5">
            Strategy, design, media, and AI-ready digital systems for Somali companies ready to scale.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.28em] text-xs text-gold mb-5">Explore</h4>
          <div className="flex flex-col gap-3 text-white/72">
            <button className="footer-link" onClick={() => goToView('home')}>Home</button>
            <button className="footer-link" onClick={() => goToView('services')}>Services</button>
            <button className="footer-link" onClick={() => goToView('work')}>Work</button>
            <button className="footer-link" onClick={() => goToView('about')}>About</button>
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-[0.28em] text-xs text-gold mb-5">Reach Us</h4>
          <div className="flex flex-col gap-4">
            <a className="footer-contact" href="mailto:info@curisagency.com">
              <Mail size={16} />
              info@curisagency.com
            </a>
            <a className="footer-contact" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} />
              +252 633 135 999
            </a>
            <span className="footer-contact">
              <MapPin size={16} />
              Hargeisa, Somaliland
            </span>
          </div>
          <div className="flex gap-3 mt-7">
            <a className="social-link" href="https://www.instagram.com/curisagency/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a className="social-link" href="https://www.facebook.com/profile.php?id=100083092734546" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a className="social-link" href="https://www.tiktok.com/@curis.creative" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <Music2 size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/38 text-xs uppercase tracking-[0.22em]">
        <p>© 2026 Curis Creative Agency. All Rights Reserved.</p>
        <button className="hover:text-gold transition-colors text-left" onClick={() => scrollToSection('get-started')}>
          Start a project
        </button>
      </div>
    </footer>
  );
}
