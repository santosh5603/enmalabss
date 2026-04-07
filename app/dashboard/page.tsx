'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { LogOut, Send, MessageCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans flex flex-col h-screen">
      {/* Header */}
      <header className="h-16 border-b border-white/5 bg-[#0f0f1a] flex items-center justify-between px-6 shrink-0">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
          <span className="text-white font-bold text-lg tracking-tight">Enma Labs</span>
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400 hidden md:inline-block">{user?.email}</span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-white/20 text-white/80 hover:text-white bg-white/5 hover:bg-white/8 transition-all duration-200 text-sm"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-[12px] rounded-2xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-blue-400" />
          </div>
          
          <h1 className="text-2xl font-semibold mb-4 text-white">Dashboard is coming soon</h1>
          
          <p className="text-slate-400 mb-8 leading-relaxed">
            We are currently in beta. To test the Enma AI Chief of Staff and its features, please use our Telegram bot directly.
          </p>
          
          <a
            href="https://t.me/enma12bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#229ED9] hover:bg-[#1E8CC0] text-white font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(34,158,217,0.25)] hover:shadow-[0_0_32px_rgba(34,158,217,0.45)]"
          >
            <Send className="w-5 h-5" />
            Open Telegram Bot (@enma12bot)
          </a>
        </div>
      </main>
    </div>
  );
}
