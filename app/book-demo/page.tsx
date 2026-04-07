'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { db, handleFirestoreError, OperationType } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function BookDemoPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const payload: any = {
        name: formData.fullName,
        firmName: formData.firmName,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        createdAt: serverTimestamp(),
      };
      
      if (formData.message.trim()) {
        payload.message = formData.message.trim();
      }

      await addDoc(collection(db, 'demoRequests'), payload);
      setSuccess(true);
      setFormData({
        fullName: '',
        firmName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'demoRequests');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-16 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-8"
            >
              <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
                See Enma in Action
              </h1>
              <p className="text-[20px] text-slate-400 leading-[1.6] mb-12">
                Book a free 30-minute walkthrough. We&apos;ll show you Enma handling real CA workflows — live.
              </p>

              <div className="mb-12">
                <h3 className="text-lg font-semibold mb-6">What you&apos;ll see in the demo:</h3>
                <ol className="space-y-6">
                  {[
                    'Full secure Telegram onboarding flow with live token handshake',
                    'Enma processing a real invoice via OCR — live',
                    'DPA consent logging and audit trail walkthrough',
                    'Dashboard overview and client management',
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 font-mono text-sm">
                        {i + 1}
                      </div>
                      <span className="text-slate-300 mt-1">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-slate-400">Prefer to email us directly?</p>
                <a href="mailto:reach@enmalabs.com" className="text-blue-400 hover:text-blue-300 font-medium text-lg transition-colors">
                  reach@enmalabs.com
                </a>
              </div>
            </motion.div>

            {/* Right Form Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0f0f1a] border border-white/[0.06] rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[64px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-semibold mb-8">Book Your Free Demo</h2>

                {success ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Demo Requested!</h3>
                    <p className="text-slate-400 mb-8">We&apos;ve received your request and will be in touch shortly to confirm your slot.</p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200"
                    >
                      Book Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name (required)"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="firmName"
                        placeholder="Firm Name (required)"
                        required
                        value={formData.firmName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email (required)"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (required)"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500 [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500 [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Message / Specific questions (optional)"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500 resize-none custom-scrollbar"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_32px_rgba(59,130,246,0.45)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                      {loading ? 'Submitting...' : 'Book My Free Demo'}
                    </button>

                    <div className="flex items-center justify-center gap-2 mt-6 text-slate-400 text-sm">
                      <Check className="w-4 h-4 text-emerald-400" />
                      We&apos;ll confirm your slot within 24 hours via email.
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
