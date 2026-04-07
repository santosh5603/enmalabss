'use client';

import { motion, Variants } from 'motion/react';
import { FileText, Link as LinkIcon, ShieldCheck, ScrollText, Lock, Zap, Check, X } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-blue-500/30 font-sans">
      <Navbar />

      {/* SECTION 2 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1f] to-[#0a0a0f]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUpVariant} className="mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[12px] font-semibold tracking-[0.08em] uppercase">
                ✦ Introducing Enma V2 — Now with Secure Token Auth
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-[-0.03em] mb-8"
            >
              Meet Enma —<br />
              The AI Chief of Staff<br />
              Built for CA Firms
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="text-lg md:text-[18px] text-slate-400 max-w-[580px] leading-[1.7] mb-10"
            >
              Connect your firm to an AI that reads invoices, reconciles bank statements, handles tax queries, and onboards clients — all through Telegram. Enterprise-secure. Legally compliant.
            </motion.p>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]"
              >
                Get Started Free
              </Link>
              <Link
                href="/book-demo"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200 font-medium"
              >
                Book a Demo →
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-6 text-[13px] text-slate-600 font-medium">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> GDPR-Compliant</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> Zero LLM Training</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4" /> DPA Signed Before Data Flows</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — SOCIAL PROOF STRIP */}
      <section className="py-16 border-y border-white/5 overflow-hidden relative bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
          <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-slate-600">
            Trusted Infrastructure Powering Enma Labs
          </span>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden relative w-full">
          {/* Marquee Track */}
          <div className="flex animate-[marquee_30s_linear_infinite] min-w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-4">
                {['FastAPI', 'PostgreSQL', 'n8n Automation', 'Telegram API', 'OCR Engine', 'JWT Auth', 'AES-256 Encryption', 'GDPR', 'DPA Compliant', 'Zero-Trust Architecture'].map((badge, j) => (
                  <div key={j} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm font-medium flex items-center gap-2 grayscale opacity-70">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    {badge}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROBLEM STATEMENT */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-[680px]"
            >
              <motion.div variants={fadeUpVariant} className="mb-6">
                <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-400">
                  The Problem
                </span>
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
                Traditional CA Workflows Are Broken
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-[20px] text-slate-400 leading-[1.6] mb-12">
                Your team spends more time chasing documents than doing actual CA work. That&apos;s not a people problem — it&apos;s a systems problem.
              </motion.p>

              <div className="flex flex-col gap-8">
                {[
                  { title: 'Hours lost daily', desc: 'manually collecting documents via WhatsApp and email with no audit trail' },
                  { title: 'Zero consent logging', desc: 'no legal record of when clients agreed to share their data' },
                  { title: 'Slow onboarding', desc: 'inconsistent, insecure client setup that varies per CA' },
                  { title: 'Manual tax queries', desc: 'every GST question requires a team member to respond personally' },
                  { title: 'No scalability', desc: 'managing 10 clients feels as hard as managing 100' },
                ].map((point, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">{point.title}</span>
                      <span className="text-slate-400"> — {point.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Abstract Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="hidden lg:block relative h-[500px] rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
              <div className="flex flex-col gap-4 opacity-40 blur-[1px]">
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/3 bg-red-500/30 rounded" />
                    <div className="h-2 w-2/3 bg-red-500/20 rounded" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center gap-4 translate-x-8">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/2 bg-orange-500/30 rounded" />
                    <div className="h-2 w-3/4 bg-orange-500/20 rounded" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-4 -translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/4 bg-red-500/30 rounded" />
                    <div className="h-2 w-1/2 bg-red-500/20 rounded" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — KEY FEATURES */}
      <section id="features" className="py-32 bg-[#0f0f1a]/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUpVariant} className="mb-6">
              <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-400">
                Features
              </span>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold leading-[1.1]">
              Everything Your Firm Needs.<br />
              Nothing It Doesn&apos;t.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="md:col-span-2 bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[64px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Instant Invoice & Statement Processing</h3>
                <p className="text-slate-400 leading-[1.7] max-w-md">
                  Clients forward invoices and bank statements directly to Enma on Telegram. Enma performs OCR extraction and tax reconciliation automatically — no manual data entry needed.
                </p>
              </div>
            </motion.div>

            {/* Standard Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <LinkIcon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">One-Click Secure Client Onboarding</h3>
              <p className="text-slate-400 leading-[1.7]">
                Clients receive a unique, time-limited deep link. Once they click it, their identity is verified and Telegram is securely bound to your firm — no passwords, no confusion.
              </p>
            </motion.div>

            {/* Row 2 - Three Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Token-Based Auth. Zero IDOR Risk.</h3>
              <p className="text-slate-400 leading-[1.7]">
                Every onboarding link uses a cryptographically secure one-time token that expires in 30 minutes. Raw firm IDs are never exposed.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <ScrollText className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Built-In Data Processing Agreement</h3>
              <p className="text-slate-400 leading-[1.7]">
                Before any firm connects, they digitally sign a legally binding DPA. Consent is timestamped and logged server-side — permanently auditable.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tax Queries Answered in Seconds</h3>
              <p className="text-slate-400 leading-[1.7]">
                Clients send questions directly to Enma. GST reconciliation, document requests, and standard tax queries handled instantly — freeing your team completely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SECURITY DEEP DIVE */}
      <section id="security" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUpVariant} className="mb-6">
                <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-400">
                  Security
                </span>
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
                Enterprise Security You Can<br />
                Actually Explain to Clients
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-[20px] text-slate-400 leading-[1.6] mb-12">
                We didn&apos;t bolt security on after the fact. The entire V2 architecture was rebuilt from the ground up to eliminate every known attack surface.
              </motion.p>

              <div className="flex flex-col gap-8">
                {[
                  { title: 'Token-Based Telegram Handshake', desc: 'Raw firm IDs are never transmitted in any link or URL' },
                  { title: '30-Minute Token Expiry', desc: 'One-time tokens are cryptographically invalidated immediately after use' },
                  { title: 'Server-Side Consent Logging', desc: 'IP address, timestamp, and firm ID captured at the exact moment of DPA acceptance' },
                  { title: 'Logical Data Isolation', desc: 'Every CA firm\'s data lives in a fully separated logical partition' },
                  { title: 'AES-256 Encryption at Rest', desc: 'All client documents are encrypted in storage' },
                  { title: 'IDOR Vulnerability Eliminated', desc: 'The previous architecture flaw that exposed raw IDs in deep links has been fully patched in V2' },
                ].map((point, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div>
                      <span className="font-semibold text-white">{point.title}</span>
                      <p className="text-slate-400 text-sm mt-1">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security Visual */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="hidden lg:block bg-[#0f0f1a] border border-white/[0.06] rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                <Lock className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-mono text-slate-400">SECURITY_AUDIT_LOG</span>
              </div>
              <div className="space-y-4 font-mono text-xs">
                {[
                  { time: '14:23:01', action: 'TOKEN_GENERATED', status: 'VALID', color: 'text-blue-400' },
                  { time: '14:24:12', action: 'DPA_CONSENT_LOGGED', status: 'SECURE', color: 'text-emerald-400' },
                  { time: '14:24:15', action: 'TELEGRAM_HANDSHAKE', status: 'SUCCESS', color: 'text-emerald-400' },
                  { time: '14:24:16', action: 'TOKEN_STATUS', status: 'INVALIDATED', color: 'text-slate-500' },
                  { time: '14:30:00', action: 'DATA_PARTITION', status: 'ISOLATED', color: 'text-emerald-400' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded bg-white/[0.02] border border-white/[0.02]">
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500">{log.time}</span>
                      <span className="text-slate-300">{log.action}</span>
                    </div>
                    <span className={log.color}>[{log.status}]</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — HOW IT WORKS */}
      <section id="how-it-works" className="py-32 bg-[#0f0f1a]/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUpVariant} className="mb-6">
              <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-400">
                How It Works
              </span>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold leading-[1.1]">
              Up and Running in 3 Steps
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex flex-col gap-6"
          >
            {[
              { num: '01', title: 'Register & Sign the DPA', desc: 'Create your CA firm account and digitally sign the legally binding Data Processing Agreement. Your consent is logged server-side instantly.' },
              { num: '02', title: 'Connect Enma to Telegram', desc: 'Click "Connect Enma to Telegram." A cryptographically secure, one-time deep link is generated. Click it — your Telegram is permanently and securely bound to your firm. The link self-destructs after use.' },
              { num: '03', title: 'Let Enma Handle the Rest', desc: 'Forward client invoices, bank statements, and tax queries to Enma on Telegram. Your AI Chief of Staff processes, reconciles, and responds — instantly and automatically.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUpVariant}
                className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
              >
                <span className="text-6xl font-bold text-white/10 leading-none">{step.num}</span>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-[1.7] text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 — PRICING */}
      <section id="pricing" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUpVariant} className="mb-6">
              <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-400">
                Pricing
              </span>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-semibold leading-[1.1]">
              Simple Pricing for Growing CA Firms
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Starter */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-2">Starter</h3>
              <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-white/10">For solo CAs</p>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Limited clients</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Core Telegram processing</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Basic DPA logging</li>
              </ul>
              <Link href="/register" className="block w-full text-center px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200">
                Get Started Free
              </Link>
            </motion.div>

            {/* Professional */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-[#0f0f1a] border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.15)] rounded-2xl p-10 relative md:-mt-8 md:mb-8 z-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">Professional</h3>
              <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-white/10">For mid-size firms</p>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Unlimited clients</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Full DPA consent audit trail</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Priority support</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> All features included</li>
              </ul>
              <Link href="/register" className="block w-full text-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]">
                Start Free Trial
              </Link>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-8 pb-8 border-b border-white/10">For large CA firms</p>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Dedicated data isolation</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Custom SLA</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Custom integrations</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-blue-400" /> Dedicated account manager</li>
              </ul>
              <Link href="/book-demo" className="block w-full text-center px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200">
                Contact Sales
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-center mt-12"
          >
            <p className="text-slate-400">
              Not sure which plan fits? <Link href="/book-demo" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">Book a free demo first.</Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA BANNER */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="bg-[#0f0f1a] border border-white/[0.06] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_70%)] pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6 relative z-10">
              Ready to Give Your CA Firm<br />
              an AI Chief of Staff?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-[1.7] mb-10 relative z-10">
              Join CA firms already using Enma to automate operations, stay compliant, and serve more clients — without hiring more staff.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link
                href="/register"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(59,130,246,0.45)]"
              >
                Create Your Free Account
              </Link>
              <Link
                href="/book-demo"
                className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200 font-medium"
              >
                Talk to Us First
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
}
