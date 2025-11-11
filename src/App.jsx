import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code2, Sparkles, Building2, ShieldCheck, BarChart3, CreditCard } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const accent = {
  ring: 'focus:outline-none focus:ring-2 focus:ring-orange-500/70',
  grad: 'bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400',
  textGrad: 'bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent',
}

function Navbar() {
  const navItems = [
    { href: '#about', label: 'SaaS Focus' },
    { href: '#projects', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-3">
              <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl shadow-inner shadow-black/60 overflow-hidden">
                <div className={`absolute inset-0 ${accent.grad} opacity-90`} />
                <Sparkles className="relative h-5 w-5 text-white" />
              </div>
              <span className="font-semibold tracking-tight text-slate-100">Your Name</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full">
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a href="#contact" className={`inline-flex items-center gap-2 rounded-xl ${accent.grad} text-slate-900 px-3 py-2 text-sm font-semibold shadow-lg shadow-orange-600/30 hover:brightness-110 transition`}>
                Request a demo <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrustBar() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-6 text-slate-400/90">
      <span className="text-xs uppercase tracking-wider">Trusted by teams at</span>
      <div className="flex items-center gap-6 opacity-80">
        <div className="h-6 w-24 rounded bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[10px]">Logo A</div>
        <div className="h-6 w-24 rounded bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[10px]">Logo B</div>
        <div className="h-6 w-24 rounded bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[10px]">Logo C</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-28 flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_70%_10%,rgba(255,120,40,0.18),transparent)]" />
        {/* grid overlay */}
        <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
        {/* dark base */}
        <div className="absolute inset-0 bg-[#0b0e13]" />
        {/* Spline scene behind with vignette */}
        <div className="absolute inset-0 mix-blend-screen opacity-70">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0e13]/60 to-[#0b0e13]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-300 shadow">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Currently building a B2B SaaS
            </div>
            <h1 className={`text-4xl sm:text-6xl font-extrabold tracking-tight ${accent.textGrad}`}>
              Frontend Engineer for B2B SaaS
            </h1>
            <p className="text-lg text-slate-300/90 max-w-xl">
              I design and build product-driven web apps for teams: multi-tenant dashboards, role-based workflows, and usage-based billing UI. My focus is clarity, reliability, and speed to value.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3">
              <a href="#projects" className={`inline-flex items-center gap-2 rounded-xl ${accent.grad} text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-orange-600/30 hover:brightness-110 transition`}>
                See case studies <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 hover:bg:white/10 transition ${accent.ring}`}>
                Request a demo <Mail className="h-4 w-4" />
              </a>
              <a href="#" className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 hover:bg:white/10 transition ${accent.ring}`}>
                Product deck <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-slate-300">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /><span className="text-sm">Auth & RBAC</span></div>
              <div className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-sky-400" /><span className="text-sm">Analytics</span></div>
              <div className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-amber-400" /><span className="text-sm">Billing</span></div>
            </div>
            <TrustBar />
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-white" aria-label="GitHub"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-300 hover:text-white" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#contact" className="text-slate-300 hover:text-white" aria-label="Email"><Mail className="h-5 w-5" /></a>
            </div>
          </motion.div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg:white/5 backdrop-blur-xl p-6 shadow-2xl shadow-black/40">
              <div className="aspect-video w-full rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="mt-4 text-sm text-slate-300/80">
                Interactive 3D hero sets a product-first tone—drag to explore.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  )
}

function ProjectCard({ index, title, desc, tags = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="p-6">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_8px,transparent_8px,transparent_16px)]" />
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <span className="text-sm">Add product screenshot</span>
          </div>
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl" />
        </div>

        <div className="mt-5 flex items-start gap-3">
          <div className="mt-1 rounded-lg bg-white/10 text-orange-400 p-2 ring-1 ring-white/10">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {tags.map((t, i) => (
                  <span key={i} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300">{t}</span>
                ))}
              </div>
            )}
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-orange-400 hover:text-orange-300">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white">
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
    {
      title: 'Usage-based Billing Dashboard',
      desc: 'Pricing meter components, plan switches, and real-time usage charts. Improved time-to-invoice and reduced support tickets for plan changes.',
      tags: ['Stripe', 'Charts', 'React'],
    },
    {
      title: 'RBAC Admin & Onboarding',
      desc: 'Role-based access control UI with invites, SSO, and org settings. Cut onboarding time by 40% and clarified permissions.',
      tags: ['Auth', 'SSO', 'Design System'],
    },
    {
      title: 'Multi-tenant Analytics',
      desc: 'Tenant-aware dashboards with filters, saved views, and exports. Enabled self-serve insights for customer success.',
      tags: ['Analytics', 'Performance', 'DX'],
    },
  ]
  return (
    <section id="projects" className="relative py-24">
      {/* section backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_10%,rgba(255,120,40,0.14),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${accent.textGrad}`}>
            B2B SaaS Case Studies
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-3 text-slate-300">
            Practical product work focused on activation, retention, and usability. Swap in your screenshots, metrics, and links.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} index={i} title={p.title} desc={p.desc} tags={p.tags} />
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-5">
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${accent.textGrad}`}>
              SaaS product mindset
            </h2>
            <p className="text-slate-300 text-lg">
              I collaborate with founders and product teams to deliver measurable outcomes: faster onboarding, clearer analytics, and fewer support requests. I ship minimal, robust slices and iterate quickly.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-200">
              <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-2"><Building2 className="h-4 w-4 text-orange-400" /> Multi-tenant UI patterns</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-emerald-400" /> Auth, SSO, RBAC</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-sky-400" /> Analytics & reporting</li>
              <li className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-2"><CreditCard className="h-4 w-4 text-amber-400" /> Pricing & billing UX</li>
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Metric label="Activation uplift" value="+18%" />
              <Metric label="Onboarding time" value="-40%" />
              <Metric label="Core web vitals" value="<1s" />
              <Metric label="Tickets reduced" value="-25%" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl">
              <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-br from-transparent via-orange-500/10 to-transparent blur-xl" />
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,120,40,0.15),transparent_60%)] flex items-center justify-center text-slate-400 ring-1 ring-white/10">
                Replace with a product shot or founder-friendly photo
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
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${accent.textGrad}`}>Let’s talk about your product</h2>
              <p className="mt-3 text-slate-300 max-w-xl">
                I’m focused on B2B SaaS. If you’re shipping dashboards, permissions, or billing flows and need momentum, I’d love to help.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="mailto:your@email.com" className={`inline-flex items-center gap-2 rounded-xl ${accent.grad} text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-orange-600/30 hover:brightness-110 transition`}>
                  Email me <Mail className="h-4 w-4" />
                </a>
                <a href="#" className={`inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 hover:bg-white/10 transition ${accent.ring}`}>
                  LinkedIn <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300">Name</label>
                  <input className={`mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 ${accent.ring}`} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300">Email</label>
                  <input type="email" className={`mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 ${accent.ring}`} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300">How can I help?</label>
                  <textarea rows="4" className={`mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-400 ${accent.ring}`} placeholder="Short brief about your SaaS, timeline, and goals" />
                </div>
                <button className={`inline-flex items-center justify-center gap-2 rounded-xl ${accent.grad} text-slate-900 px-5 py-3 font-semibold shadow-lg hover:brightness-110 transition`}>
                  Request availability <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DockedSocialBar() {
  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-xl">
        <div className="flex flex-col">
          <a href="#" aria-label="GitHub" className="group p-2 text-slate-300 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="group p-2 text-slate-300 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" aria-label="Email" className="group p-2 text-slate-300 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="h-16 w-px bg-gradient-to-b from-transparent via-orange-500/60 to-transparent" />
    </div>
  )
}

function FloatingCTA() {
  return (
    <a href="#contact" className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-2xl ${accent.grad} text-slate-900 px-4 py-3 font-semibold shadow-2xl shadow-orange-700/30 hover:brightness-110 transition hidden sm:inline-flex`}>
      Work on your SaaS <ArrowRight className="h-4 w-4" />
    </a>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e13] text-slate-100">
      <Navbar />
      <DockedSocialBar />
      <FloatingCTA />
      <Hero />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-slate-400">
        © {new Date().getFullYear()} Your Name. Focused on B2B SaaS.
      </footer>
    </div>
  )
}
