'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Terminal, Cpu, Code2,  
  ChevronRight, ChevronLeft, FileText, CheckCircle2, 
  MessageSquare, Zap, 
  Video, BookOpen, Layers, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function CodexLanding() {
  const [activeTab, setActiveTab] = useState('featured');
  const scrollRef = useRef(null);

  // --- Carousel Logic ---
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset scroll position when tab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  // --- Data ---
  const projectCategories = {
    featured: {
      tab: "Featured", 
      label: "Featured & Recommended",
      desc: "Safest, highest-scoring choices for CSE/IT students.",
      icon: <Zap className="text-yellow-400" size={20} />,
      items: [
        "Hospital Management System",
        "Online Examination System",
        "E-Learning Platform",
        "Job Portal Website",
        "E-Commerce Website",
        "Crime Reporting System",
        "Real-Time Chat Application",
        "Online Doctor Consultation",
        "Inventory Management System"
      ]
    },
    ai: {
      tab: "AI & ML", 
      label: " AI / ML / Data Science",
      desc: "High demand, modern projects with Python/Flask.",
      icon: <Cpu className="text-purple-400" size={20} />,
      items: [
        "Custom Projects",
        "RAG retrieval Related",
        "LLM related"
      ]
    },
    hardware: {
      tab: "Hardware", 
      label: "Hardware & IoT",
      desc: "Advanced systems involving robotics and sensors.",
      icon: <Terminal className="text-emerald-400" size={20} />,
      items: [
        "Robot Manipulator",
        "Mouse Control via Hand Gestures",
        "Smart Surveillance System",
        "Biometric Attendance System",
        "Face Recognition Access Control"
      ]
    },
    web: {
      tab: "Web Apps", 
      label: "Web Applications",
      desc: "Clean, functional full-stack web solutions.",
      icon: <Code2 className="text-blue-400" size={20} />,
      items: [
        "Task Management System",
        "Online Food Ordering",
        "Library Management System",
        "Blogging Website",
        "Campus Placement Manager",
        "Smart Hostel Management",
        "Online Auction System",
        "Blood Bank Management",
      ]
    }
  };
  const router = useRouter()
  const handleContact=() =>{
    router.push('/contact')
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-gray-300 font-sans selection:bg-white/20 selection:text-white">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded text-lg font-bold">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CODEX</span>
          </div>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#custom" className="hover:text-white transition-colors">Custom Build</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button onClick={handleContact} className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white hover:text-black transition-all border border-white/10">
            Get Started
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest uppercase mb-8 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
          Accepting 2026 Batch Orders
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight">
          Your Project. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-stone-400 to-stone-600">
            Your Grades Secured.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
          We build high-scoring <strong>Full Stack</strong> & <strong>Hardware</strong> projects. 
          Get complete code, documentation, and <span className="text-white border-b border-white/20">personal training</span> to ace your viva.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <AnchorLink href="#projects">

          <button  className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            View Projects <ChevronRight size={18} />
          </button>
          </AnchorLink>
          <button onClick={handleContact} className="px-8 py-3 bg-neutral-900 border border-white/10 text-white font-bold rounded hover:border-white/30 transition-all">
            Submit Custom Idea
          </button>
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className="px-6 max-w-4xl mx-auto mb-32 relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="space-y-12">
          {[
            { 
              icon: <Video className="text-blue-400" size={20}/>, 
              title: "1-on-1 Viva Practice", 
              desc: "We conduct mock viva sessions with you personally to ensure you can answer every question confidently." 
            },
            { 
              icon: <BookOpen className="text-emerald-400" size={20}/>, 
              title: "Code Explained Line-by-Line", 
              desc: "We don't just hand over a zip file. We sit with you on a call and explain the logic so you understand what you built." 
            },
            { 
              icon: <FileText className="text-purple-400" size={20}/>, 
              title: "Full IEEE Documentation", 
              desc: "Campus based format reports (Synopsis, SRS, System Design). Perfectly formatted for your college submission." 
            },
            { 
              icon: <Cpu className="text-orange-400" size={20}/>, 
              title: "Expert Hardware Support", 
              desc: "We specialize in Robotics & IoT. We help you setup the kit, connections and debug hardware issues remotely." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-16 md:pl-24 group"
            >
              <div className="absolute left-[20px] md:left-[27px] top-1 w-2 h-2 rounded-full bg-neutral-800 border border-white/30 group-hover:bg-white group-hover:scale-125 transition-all z-10" />
              <div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/20 transition-all">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                 </div>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   {feature.desc}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS CAROUSEL (UPDATED: NO GRADIENTS) --- */}
      <section id="projects" className="py-20 border-t border-white/5 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Header & Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Curated Project List</h2>
              <p className="text-gray-500 text-sm">Swipe to explore titles.</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {Object.keys(projectCategories).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-all ${
                    activeTab === key 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {/* @ts-ignore */}
                  {projectCategories[key].tab} 
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Info */}
          <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
             {/* @ts-ignore */}
            {projectCategories[activeTab].icon}
            <span className="font-medium text-white">
              {/* @ts-ignore */}
              {projectCategories[activeTab].label}
            </span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
             {/* @ts-ignore */}
            <span>{projectCategories[activeTab].desc}</span>
          </div>

          {/* CAROUSEL WRAPPER */}
          <div className="relative group/carousel">
            
            {/* Left Button */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:block"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <AnimatePresence mode='wait'>
                {/* @ts-ignore */}
                {projectCategories[activeTab].items.map((project, idx) => (
                  <motion.div 
                    key={`${activeTab}-${idx}`} // Ensures distinct keys when tab changes
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }} // Stagger effect
                    className="snap-start shrink-0 w-[85%] md:w-[280px] lg:w-[320px]"
                  >
                    <div className="h-full p-6 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/30 transition-all group cursor-pointer flex flex-col justify-between min-h-[180px]">
                      
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-2 rounded bg-white/5 border border-white/5 text-gray-400">
                            <Layers size={16} />
                          </div>
                          <ArrowUpRight className="text-gray-600 group-hover:text-white transition-colors" size={18} />
                        </div>
                        
                        <h3 className="text-base font-bold text-white mb-2 leading-snug">
                          {project}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                        <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                          Full Documentation
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Right Button */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-900 border border-white/10 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 hidden md:block"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </div>
      </section>

      {/* --- CUSTOM PROJECTS --- */}
      <section id="custom" className="px-6 max-w-6xl mx-auto py-20">
        <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-8 md:p-12 relative overflow-hidden">
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded bg-stone-500/10 border border-stone-500/20 text-green-400 text-xs font-bold">
                CUSTOM DEVELOPMENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a unique idea? <br/> We build it from scratch.
              </h2>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Whether it's a faculty requirement, or a mini/major project idea you have in mind—we can build it. We support custom stacks (MERN, Python, IoT).
              </p>
              
              <ul className="space-y-2 mb-8">
                {['Custom College Syllabus', 'Project Documentation', 'Domain of Choice'].map((item, i) =>(
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>

              <button onClick={handleContact} className="px-6 py-3 bg-stone-500 hover:bg-stone-600 text-white font-bold rounded-lg transition-colors w-full md:w-auto">
                Discuss Your Idea
              </button>
            </div>

            <div className="hidden md:block relative">
               <div className="border border-white/10 rounded-xl bg-black p-6 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="space-y-3 font-mono text-xs text-gray-500">
                    <p className="text-gray-400">// We prepare you for the questions:</p>
                    <p><span className="text-purple-400">Student</span>.explain(<span className="text-green-400">'System_Architecture'</span>);</p>
                    <p><span className="text-purple-400">Student</span>.answer(<span className="text-green-400">'Why_Blockchain?'</span>);</p>
                    <p className="text-blue-400 mt-2">{'>>'} Viva Cleared Successfully ✅</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/5 bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <Terminal className="text-white w-5 h-5" />
             <span className="font-bold text-white tracking-tight">CODEX</span>
          </div>
          <p className="text-gray-600 text-sm">
            © 2026 Codex Systems. Low Cost. High Quality.
          </p>
          <div className="flex gap-4">
            <MessageSquare className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer transition-colors" />
            <Code2 className="w-5 h-5 text-gray-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

    </div>
  );
}