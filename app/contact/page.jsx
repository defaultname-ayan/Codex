'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Terminal, Phone, MessageCircle, Instagram, Mail, MapPin 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CodexContact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-300 font-sans selection:bg-white/20 selection:text-white">
      
      {/* NAVBAR (same structure as landing) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded text-lg font-bold">
              <Terminal size={18} strokeWidth={3} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">CODEX</span>
          </div>

          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/#custom" className="hover:text-white transition-colors">Custom Build</Link>
          </div>

          <button className="px-4 py-2 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-white hover:text-black transition-all border border-white/10">
            Get Started
          </button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest uppercase mb-6 text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Get in touch with Codex
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
            Contact our team for your <br className="hidden md:block" />
            College projects.
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed">
            Call or message us on WhatsApp to discuss your idea, project titles, or to book a slot
            for the 2026 batch. We usually respond within a few minutes.
          </p>
        </div>

        {/* Centered contact card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-50px' }}
            className="w-full max-w-xl space-y-6"
          >
            <div className="p-6 rounded-2xl border border-white/10 bg-neutral-900/60">
              <h2 className="text-lg font-bold text-white mb-4">Direct Contact</h2>
              
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Call / WhatsApp</p>
                    <p className="text-white font-medium">+91 89788 68781</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Instagram className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Instagram</p>
                    <a 
                      href="https://instagram.com/projectcodex_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:underline"
                    >
                      @projectcodex_
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Preferred Time</p>
                    <p className="text-gray-300">Everyday, 10:00 AM – 9:00 PM (IST)</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    <MapPin className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Location</p>
                    <p className="text-gray-300">Hyderabad, Telangana – Remote support across India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/5 bg-neutral-900/60 text-xs text-gray-400 leading-relaxed">
              <p className="mb-1 text-white font-medium">What to send us?</p>
              <p>
                Share your branch, college, project type (Web / AI / Hardware) and any 
                titles you already have. We’ll suggest the best, high-scoring option for you.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
