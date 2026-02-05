'use client';

import React, { useState } from 'react';
import { 
  Terminal, Cpu, Code2,  
  ChevronRight, FileText, CheckCircle2, 
  MessageSquare, Zap, ShieldCheck,
  Video, BookOpen
} from 'lucide-react';

export default function CodexLanding() {
  const [activeTab, setActiveTab] = useState('featured');

  // Project Data Configuration
  const projectCategories = {
    featured: {
      tab: "Featured", // <--- Added this field for the button text
      label: "🔥 Featured & Recommended",
      desc: "Safest, highest-scoring choices for CSE/IT students.",
      items: [
        "Online Voting System (Blockchain/OTP)",
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
      tab: "AI & ML", // <--- Added this field
      label: "🧠 AI / ML / Data Science",
      desc: "High demand, modern projects with Python/Flask.",
      items: [
        "AI Resume Analyzer & Job Matcher",
        "Smart Expense Tracker (AI Insights)",
        "Disease Prediction (Healthcare AI)",
        "Mental Health Chatbot",
        "Face Recognition Attendance",
        "Fraud Detection System",
        "Computer Vision Object Recognition",
        "Recommendation Systems",
        "AI Question Paper Generator"
      ]
    },
    hardware: {
      tab: "Hardware", // <--- Added this field
      label: "🤖 Hardware & IoT",
      desc: "Advanced systems involving robotics and sensors.",
      items: [
        "Robot Manipulator",
        "Mouse Control via Hand Gestures",
        "Wireless Signal Tracking (CSI)",
        "Smart Surveillance System",
        "Biometric Attendance System",
        "Face Recognition Access Control"
      ]
    },
    web: {
      tab: "Web Apps", // <--- Added this field
      label: "🌐 Web Applications",
      desc: "Clean, functional full-stack web solutions.",
      items: [
        "Task Management System",
        "Online Food Ordering",
        "Library Management System",
        "Blogging Website",
        "Campus Placement Manager",
        "Smart Hostel Management",
        "Online Auction System",
        "Blood Bank Management",
        "Courier Management System"
      ]
    }
  };

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
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white hover:text-black transition-all border border-white/10">
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
          <button className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            View Projects <ChevronRight size={18} />
          </button>
          <button className="px-8 py-3 bg-neutral-900 border border-white/10 text-white font-bold rounded hover:border-white/30 transition-all">
            Submit Custom Idea
          </button>
        </div>
      </section>

      {/* --- WHY US (UPDATED FOR 1-ON-1) --- */}
      <section className="px-6 max-w-6xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              icon: <Video className="text-blue-400"/>, 
              title: "1-on-1 Viva Practice", 
              desc: "We conduct mock viva sessions with you personally to ensure you can answer every question confidently." 
            },
            { 
              icon: <BookOpen className="text-emerald-400"/>, 
              title: "Code Explained", 
              desc: "We don't just hand over files. We explain the code line-by-line so you understand the logic completely." 
            },
            { 
              icon: <FileText className="text-purple-400"/>, 
              title: "Full Documentation", 
              desc: "Campus based format reports. Perfectly formatted for your college submission." 
            },
            { 
              icon: <Cpu className="text-orange-400"/>, 
              title: "Expert Hardware", 
              desc: "We specialize in Fullstack & Robotics. We help you setup the kit and debug hardware issues remotely." 
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all group">
              <div className="mb-4 bg-neutral-800 w-fit p-3 rounded-lg group-hover:bg-neutral-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECT CATALOGUE --- */}
      <section id="projects" className="px-6 max-w-6xl mx-auto py-20 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Curated Project List</h2>
            <p className="text-gray-500 text-sm">Select a category to view available titles.</p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {Object.keys(projectCategories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  activeTab === key 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                }`}
              >
                {/* FIXED: Now using dedicated 'tab' property instead of splitting string */}
                {projectCategories[key].tab} 
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-full mb-4 p-4 rounded-lg bg-white/5 border border-white/5 flex items-start gap-3">
            <Zap className="text-yellow-400 w-5 h-5 mt-0.5 shrink-0" />
            <div>
              <h4 className="text-white font-bold text-sm">{projectCategories[activeTab].label}</h4>
              <p className="text-xs text-gray-400">{projectCategories[activeTab].desc}</p>
            </div>
          </div>

          {projectCategories[activeTab].items.map((project, idx) => (
            <div key={idx} className="group p-5 rounded-lg border border-white/5 bg-neutral-900/30 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between">
              <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">
                {project}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
            </div>
          ))}
        </div>
      </section>

      {/* --- CUSTOM PROJECTS --- */}
      <section id="custom" className="px-6 max-w-6xl mx-auto py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"/>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 rounded bg-green-500/20 text-green-300 text-xs font-bold">
                CUSTOM DEVELOPMENT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Have a unique idea? <br/> We build it from scratch.
              </h2>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Whether it's a specific IEEE paper, a faculty requirement, or a mini/major project idea you have in mind—we can build it. We support custom stacks (MERN, Python, IoT).
              </p>
              
              <ul className="space-y-2 mb-8">
                {['Custom College Syllabus', 'IEEE Paper Implementation', 'Domain of Choice'].map((item, i) =>(
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>

              <button className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors w-full md:w-auto">
                Discuss Your Idea
              </button>
            </div>

            <div className="hidden md:block relative">
               <div className="border border-white/10 rounded-xl bg-black/50 p-6 backdrop-blur shadow-2xl">
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