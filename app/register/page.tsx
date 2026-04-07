'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Check, Eye, EyeOff } from 'lucide-react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firmName: '',
    adminName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        firmName: formData.firmName,
        adminName: formData.adminName,
        role: 'admin',
        createdAt: serverTimestamp(),
      });

      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1f] to-[#0a0a0f]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 group mb-20 inline-flex">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            <span className="text-white font-bold text-lg tracking-tight">Enma Labs</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.1] mb-12">
              Your firm&apos;s AI Chief of Staff is one step away.
            </h1>

            <div className="space-y-6">
              {[
                'DPA signed before any data flows',
                'Zero LLM training on your clients\' data',
                'Secure Telegram connection in under 2 minutes',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-lg">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-[#0a0a0f] border-l border-white/5">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-2">Create Your Enma Labs Account</h2>
            <p className="text-slate-400">Set up your CA firm in under 2 minutes.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
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
                type="text"
                name="adminName"
                placeholder="Admin Full Name (required)"
                required
                value={formData.adminName}
                onChange={handleChange}
                className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Admin Email (required)"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password (required)"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password (required)"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white/[0.04] border border-white/10 rounded-[10px] text-white px-4 py-3 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-500"
              />
            </div>

            {/* DPA Summary */}
            <div className="h-[160px] overflow-y-auto bg-[#0f0f1a] border border-white/10 rounded-xl p-4 text-sm text-slate-400 space-y-4 custom-scrollbar">
              <div>
                <strong className="text-white block mb-1">Purpose:</strong>
                Enma Labs uses uploaded documents strictly for OCR extraction, tax reconciliation, and authorized CA operations.
              </div>
              <div>
                <strong className="text-white block mb-1">Isolation:</strong>
                Your firm&apos;s data is logically isolated and encrypted at rest.
              </div>
              <div>
                <strong className="text-white block mb-1">No LLM Training:</strong>
                Your client data is never used to train any public AI model.
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-1">
                <input
                  type="checkbox"
                  required
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="peer appearance-none w-5 h-5 border border-white/20 rounded bg-white/5 checked:bg-blue-500 checked:border-blue-500 transition-all cursor-pointer"
                />
                <Check className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                I have read and legally agree to the Data Processing Agreement.
              </span>
            </label>

            <button
              type="submit"
              disabled={!agreed || loading}
              className="w-full px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_32px_rgba(59,130,246,0.45)] disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none disabled:cursor-not-allowed mt-2"
            >
              {loading ? 'Creating Account...' : 'Create Account & Sign DPA'}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-400">
            Already have an account?{' '}
            <Link href="/login" className="text-white hover:text-blue-400 transition-colors">
              Login →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
