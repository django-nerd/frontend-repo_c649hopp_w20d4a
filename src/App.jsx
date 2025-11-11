import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/30 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-2">
              <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-md">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight text-slate-800">Your Name</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 flex items-center">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white/90" />
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-sm text-slate-700 shadow">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              React Frontend Engineer
            </h1>
            <p className="text-lg text-slate-700 max-w-xl">
              I craft fast, delightful web experiences with React, TypeScript, and modern UI systems. Explore my work below — each project highlights thoughtful UX, clean code, and crisp interactions.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white px-5 py-3 font-medium shadow-lg shadow-violet-600/20 hover:brightness-110 transition">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 backdrop-blur px-5 py-3 font-medium text-slate-800 hover:bg-white transition">
                Contact <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 backdrop-blur px-5 py-3 font-medium text-slate-800 hover:bg-white transition">
                Resume <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-700 hover:text-slate-900" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-700 hover:text-slate-900" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-violet-600/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/50 bg-white/40 backdrop-blur-xl p-6 shadow-xl">
              <div className="aspect-video w-full rounded-2xl overflow-hidden">
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="mt-4 text-sm text-slate-600">
                Interactive 3D hero brings a playful, modern vibe. Move around and explore.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ index, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-violet-500/10 via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="p-6">
        <div className="relative aspect-video w-full rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-500">
          <span className="text-sm">Add project image here</span>
        </div>

        <div className="mt-5 flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-slate-900 text-white p-2 shadow">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-slate-700 text-sm">
              Add a short description here that explains what the project does, your role, and the impact. Keep it concise and focused on outcomes and UX.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-violet-700 hover:text-violet-900">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900">
                Code <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const projects = [
    'Project One — UI System & Design Tokens',
    'Project Two — Real-time Dashboard & Charts',
    'Project Three — Component Library & Docs',
  ]
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Selected Work
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-3 text-slate-700">
            Three projects that showcase product polish, performance, and thoughtful engineering. Replace images, descriptions, and links with your own.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} index={i} title={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              About Me
            </h2>
            <p className="text-slate-700 text-lg">
              Frontend engineer focused on creating accessible, high-performance interfaces with React and modern tooling. I love building component systems, design tokens, and snappy interactions that feel effortless.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-700">
              <li className="rounded-xl border border-slate-200 bg-white p-4">React, TypeScript, Vite</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4">Tailwind, Radix, shadcn/ui</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4">Framer Motion, Spline</li>
              <li className="rounded-xl border border-slate-200 bg-white p-4">Testing, Accessibility</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl border border-white/60 bg-gradient-to-br from-white to-white/60 backdrop-blur-xl p-6 shadow-xl">
              <div className="aspect-[4/5] w-full rounded-2xl bg-slate-200/80 flex items-center justify-center text-slate-500">
                Add a portrait or fun graphic here
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-violet-600/10 via-cyan-500/10 to-white/60 backdrop-blur-xl p-10 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Let’s build something amazing</h2>
              <p className="mt-3 text-slate-700 max-w-xl">
                I’m currently exploring new opportunities. Whether you have a role in mind or just want to connect, feel free to reach out.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="mailto:your@email.com" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-5 py-3 font-medium hover:bg-slate-800 transition">
                  Email me <Mail className="h-4 w-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 backdrop-blur px-5 py-3 font-medium text-slate-800 hover:bg-white transition">
                  LinkedIn <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-1 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea rows="4" className="mt-1 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Say hello" />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white px-5 py-3 font-medium shadow-lg hover:brightness-110 transition">
                  Send message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_40%_at_70%_10%,rgba(124,58,237,0.15),transparent)]">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  )
}
