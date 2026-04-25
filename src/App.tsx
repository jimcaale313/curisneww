/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  Send, 
  Mail, 
  MapPin, 
  Globe, 
  AtSign, 
  Share2, 
  Video, 
  History, 
  Code, 
  MousePointerClick,
  Quote,
  Instagram,
  Facebook,
  Music2,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type View = 'home' | 'contact';

export default function App() {
  const [view, setView] = useState<View>('home');

  const scrollToSection = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => setView('home')}
          >
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white">
              <Users size={24} />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-primary heading-font">Ca.</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-semibold transition-colors hover:text-primary ${view === 'home' ? 'text-primary' : 'text-slate-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => setView('contact')}
              className={`text-sm font-semibold transition-colors hover:text-primary ${view === 'contact' ? 'text-primary' : 'text-slate-600'}`}
            >
              Contact
            </button>
          </nav>
          
          <button 
            onClick={() => setView('contact')}
            className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Get Started
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Hero Section */}
              <section className="relative bg-accent-blue min-h-[85vh] flex items-center px-6 lg:px-40 py-20">
                <div className="max-w-4xl">
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white font-heading text-5xl md:text-7xl leading-tight mb-8"
                  >
                    Helping brands and institutions speak better in the media.
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
                  >
                    Intentional storytelling that connects your message with the right audience through digital media excellence. Rooted in Hargeisa, delivering for the world.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Our Services
                    </button>
                    <button 
                      onClick={() => scrollToSection('portfolio')}
                      className="border border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors"
                    >
                      View Portfolio
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="bg-warm-gray py-24 px-6 lg:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-primary font-heading text-3xl md:text-4xl mb-8">A Message from Hargeisa</h2>
                    <div className="relative pl-8 border-l-4 border-primary/20">
                      <p className="text-primary/70 italic text-2xl font-light mb-6">
                        "Our mission is to craft stories that resonate far beyond the screen, rooted in the heart of Hargeisa but speaking to the world."
                      </p>
                      <p className="font-bold text-primary uppercase tracking-widest text-sm">— FOUNDER'S NOTE</p>
                    </div>
                    <p className="mt-8 text-primary/60 leading-relaxed">
                      At Curis, we believe every brand has a soul. Our role is to strip away the noise and find the intentional core of your message. We aren't just consultants; we are architects of perception.
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      alt="Workspace" 
                      className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9hx2Z67gOvsZrZyfWp5QK5hGN8QlPoJXqVrwjypJ_edXLDsacG6d15vEy7rQgZV4JaGB00ztr1rsHWlyOPSnkKjSq7UTnqEOgqEjMolTWOlk6Q810h2lQtlKmZZxK8APLCEu6ClyAQ-tvaNlp4iCrfJEbCsys4xi1c0uMp-SPFnUBm5cODuWUlK7OglUXzk3IEyexxfhBRbr6RLCDctMtUAtxFsjqlEjzsbDhrNjn7Tn06TFTzvA7Np5omcrqPOdIdKHGUjN9g3o"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </section>

              {/* Process Section */}
              <section className="py-24 px-6 lg:px-40 bg-white">
                <div className="mb-16">
                  <h2 className="text-primary font-heading text-3xl md:text-4xl">Our Process</h2>
                  <div className="w-20 h-1 bg-primary mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {[
                    { num: '01', title: 'Discovery', desc: 'In-depth research into your brand identity and media landscape.' },
                    { num: '02', title: 'Strategy', desc: 'Crafting a bespoke roadmap for intentional narrative delivery.' },
                    { num: '03', title: 'Production', desc: 'High-end digital creation focusing on cinematic quality.' },
                    { num: '04', title: 'Impact', desc: 'Measuring resonance and refining the message for longevity.' }
                  ].map((step, i) => (
                    <div key={i} className="flex flex-col gap-4">
                      <span className="text-6xl font-heading text-primary/10">{step.num}</span>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-sm text-primary/60 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services Section */}
              <section id="services" className="py-24 px-6 lg:px-40 bg-background-light">
                <div className="text-center mb-16">
                  <h2 className="text-primary font-heading text-3xl md:text-4xl">Expertise</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { icon: <Video className="text-primary" size={40} />, title: 'Video Production', desc: 'Cinematic visual storytelling that captures emotion and drives action.' },
                    { icon: <History className="text-primary" size={40} />, title: 'Content & Story', desc: 'Editorial-grade copywriting and narrative structuring for modern brands.' },
                    { icon: <Code className="text-primary" size={40} />, title: 'Digital Dev', desc: 'High-performance digital platforms tailored for media-heavy experiences.' },
                    { icon: <MousePointerClick className="text-primary" size={40} />, title: 'Media Strategy', desc: 'Consultancy on media relations, positioning, and global distribution.' }
                  ].map((service, i) => (
                    <div key={i} className="bg-white border border-primary/10 p-10 rounded-lg hover:shadow-xl transition-shadow">
                      <div className="mb-4">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-primary/60 leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="py-24 bg-white">
                <div className="px-6 lg:px-40 mb-12">
                  <h2 className="text-primary font-heading text-3xl md:text-4xl">Featured Work</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                  {[
                    { 
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3ugDjhpjJJenD3xe57TVP7qLx6OOwNp2Gnztp8RQKmSG6X5DLQSO84QScYv6-HL19u-EfPwFY_n3qFtui8hTkhYF_FMg1FJ7YHa0ACH9OS8yFNMh-UypK6_dAEAuVeNt5QD9vwnv9BxSq3iC15M2prnE3ltOyGSp_4ZY3Nqh6QLX9upfnQsfbyHf4MntxvFhcZVxngZ_udyuRPWxRY8IVtY7ySS66FM4LkgIM4JFeBvKgW9g98GTGV7Ao3cndG9FuJfkvxgRqKQQ",
                      tag: "Video Production",
                      title: "The Nomad Spirit"
                    },
                    { 
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7yRL1ubAqTYKLw0OIQrXaLSP01aH76FwvrUq5Qu4-TrdsYl-HeDtnuNG2mBhfGYrWVeT6sL_IkwOuzs-CBKMfszWlU-3Q70nMyAh-g18qdwKB4JWQsCm1F8mdpqqsPssTO-hKG2wQoDTexIrKWaxSFysDm2hGTN02-YJJRUcAIPeEQl9GgP_mddnyEwuQbf32EYTxnpmOykAFE9xuoqeVzqZmx0jVG3v0DvnGKKgSgihdGiCgu6K2Gz7hMHtWMomkjr-d9sIblPA",
                      tag: "Media Strategy",
                      title: "Urban Pulse"
                    },
                    { 
                      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2nqaz1n8OyO7HN3Ot7NTAXsHnIF38zf_5d4i3sRB4gZi0c7GjJhneMPMjQugXHExT902ijGPmuzSHpF_R1rDCfqM0ghHq2_0blnQ5pJxCBcL4K0TDJ5abnXvkmAMkVgWTnkGSodlbeSmISL-zYXhidNo3j2P7g3kgfpPmqLzOaNMkfCzGbL1XgcKwWy0DWXTARN3hbFEL7KSgrJYSRJpFo1sjSXwylrnSpb91Ea721KO-nfKGUKWerU6A2F3gewdhnt9VpxHf1To",
                      tag: "Digital Dev",
                      title: "Global Archive"
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative group h-[400px] overflow-hidden bg-black">
                      <img 
                        alt={item.title} 
                        className="w-full h-full object-cover mubi-grid group-hover:scale-105 transition-transform duration-700" 
                        src={item.img}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white">
                        <p className="text-xs font-accent tracking-widest uppercase mb-2">{item.tag}</p>
                        <h4 className="text-xl font-bold">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials Section */}
              <section className="py-24 px-6 lg:px-40 bg-warm-gray overflow-hidden">
                <div className="max-w-4xl mx-auto text-center">
                  <Quote className="mx-auto text-primary/30 mb-8" size={48} />
                  <div className="testimonial-slide">
                    <p className="text-2xl md:text-3xl font-light text-primary leading-relaxed mb-8">
                      "Curis Agency transformed how we communicate our values. Their intentionality is unmatched in the region."
                    </p>
                    <div>
                      <h5 className="font-bold text-primary uppercase tracking-widest text-sm">DIRECTOR, HARGEISA TECH HUB</h5>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center py-12 px-6"
            >
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100">
                {/* Left Side: Contact Form */}
                <div className="lg:col-span-7 p-8 md:p-16">
                  <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-6 heading-font">
                      Let’s Speak Better Together.
                    </h2>
                    <p className="text-slate-500 text-lg">
                      Tell us about your vision. We help brands in Hargeisa and beyond tell stories that matter.
                    </p>
                  </div>
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Name</label>
                        <input 
                          className="w-full h-14 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
                          placeholder="Your Full Name" 
                          type="text"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-slate-700">Organization</label>
                        <input 
                          className="w-full h-14 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
                          placeholder="Company or Entity Name" 
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Email</label>
                      <input 
                        className="w-full h-14 bg-gray-50 border-gray-200 rounded-lg px-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
                        placeholder="professional@email.com" 
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700">Your Story/Project</label>
                      <textarea 
                        className="w-full bg-gray-50 border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400" 
                        placeholder="How can we help your brand grow?" 
                        rows={4}
                      ></textarea>
                    </div>
                    <button className="w-full bg-primary text-white h-14 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group" type="submit">
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
                {/* Right Side: Contact Details */}
                <div className="lg:col-span-5 bg-primary p-8 md:p-16 text-white flex flex-col justify-between">
                  <div className="space-y-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 heading-font">Contact Information</h3>
                      <p className="text-white/70 leading-relaxed mb-8">
                        Our team is ready to discuss your next big idea. We're based in the heart of Hargeisa, serving clients globally.
                      </p>
                    </div>
                    <div className="space-y-8">
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <Mail size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Email Us</p>
                          <a className="text-lg font-medium hover:underline underline-offset-4" href="mailto:info@curisagency.com">info@curisagency.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-white/10 p-3 rounded-lg">
                          <MapPin size={24} className="text-white" />
                        </div>
                        <div>
                          <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">Visit Us</p>
                          <p className="text-lg font-medium">Hargeisa, Somaliland</p>
                          <p className="text-sm text-white/70">Main Business District, Downtown</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 space-y-6">
                    <p className="text-sm font-medium text-white/70">Need a quick response?</p>
                    <a className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg" href="https://wa.me/252633135999" target="_blank">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                  <div className="mt-12 flex gap-4 opacity-50">
                    <a 
                      href="https://www.instagram.com/curisagency/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-primary transition-all"
                    >
                      <Instagram size={14} />
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100083092734546" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-primary transition-all"
                    >
                      <Facebook size={14} />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@curis.creative" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-primary transition-all"
                    >
                      <Music2 size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-20 px-6 lg:px-40" id="contact">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <span className="text-3xl font-black font-accent tracking-tighter">Ca.</span>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Curis Agency is a digital media consultancy focusing on intentionality, quality, and impactful storytelling.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a className="text-white/80 hover:text-white transition-colors flex items-center gap-2" href="mailto:info@curisagency.com">
                <Mail size={16} />
                info@curisagency.com
              </a>
              <a className="bg-white/10 hover:bg-white/20 px-4 py-3 rounded flex items-center gap-3 transition-colors w-fit" href="https://wa.me/252633135999">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                +252 633 135 999
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-bold uppercase tracking-widest text-sm">Location</h4>
            <p className="text-white/80 leading-relaxed">
              Main Office, Jigjiga Yar<br />
              Hargeisa, Somaliland
            </p>
            <div className="flex gap-4">
              <a 
                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                href="https://www.instagram.com/curisagency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a 
                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                href="https://www.facebook.com/profile.php?id=100083092734546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" 
                href="https://www.tiktok.com/@curis.creative"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs font-accent uppercase tracking-widest">
          <p>© 2024 Curis Agency. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
