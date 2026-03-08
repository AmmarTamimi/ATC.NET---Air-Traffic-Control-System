// app/login/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Plane, TowerControl, AlertCircle, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'atc' | 'airline'>('airline');
  // ATC fields
  const [atcName, setAtcName] = useState('');
  const [atcPassword, setAtcPassword] = useState('');
  
  // Airline fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam === 'atc') {
        setActiveTab('atc');
      }
      // Default is already 'airline', so no need to set for 'airline'
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (activeTab === 'atc') {
        // ATC authentication with name + password
        if (atcName === 'ATCSupervisor' && atcPassword === 'ATC@2024') {
          router.push('/atc/dashboard');
        } else if (atcName === 'ATCOperator' && atcPassword === 'Ops@2024') {
          router.push('/atc/dashboard');
        } else {
          throw new Error('Invalid ATC name or password. Demo: ATCSupervisor / ATC@2024');
        }
      } else {
        // Airline authentication with email + password
        if (email && password) {
          router.push('/airline/dashboard');
        } else {
          throw new Error('Please enter valid credentials');
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Radar animation background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 border-2 border-blue-500/10 rounded-full">
          <div className="absolute inset-0 border-2 border-blue-400/10 rounded-full scale-50"></div>
          <div className="absolute inset-0 border-2 border-blue-300/10 rounded-full scale-75"></div>
          <div className="absolute h-full w-1 bg-blue-500/20 left-1/2 -translate-x-1/2 rotate-45"></div>
          <div className="absolute h-full w-1 bg-blue-500/20 left-1/2 -translate-x-1/2 -rotate-45"></div>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header with dual badges */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-2xl border border-white/20">
            <div className="flex items-center gap-2">
              <TowerControl className="w-5 h-5 text-blue-400" />
              <span className="text-white font-semibold">ATC</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Plane className="w-5 h-5 text-sky-400" />
              <span className="text-white font-semibold">Airline Portal</span>
            </div>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Tabs */}
          <div className="flex p-1 bg-black/20 m-4 rounded-xl">
            <button
              onClick={() => setActiveTab('airline')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'airline'
                  ? 'bg-white text-blue-900 shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <Plane className="w-4 h-4" />
              Airline
            </button>
            <button
              onClick={() => setActiveTab('atc')}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'atc'
                  ? 'bg-white text-blue-900 shadow-lg'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <TowerControl className="w-4 h-4" />
              ATC
            </button>
          </div>

          {/* Demo credentials hint */}
          {/* <div className="mx-6 mb-4">
            {activeTab === 'atc' ? (
              <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <p className="text-xs text-blue-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Demo ATC: <strong>ATCSupervisor</strong> / <strong>ATC@2024</strong> or <strong>ATCOperator</strong> / <strong>Ops@2024</strong></span>
                </p>
              </div>
            ) : (
              <div className="p-3 bg-sky-500/20 rounded-xl border border-sky-500/30">
                <p className="text-xs text-sky-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Demo Airline: <strong>delta@airline.com</strong> / <strong>Delta123</strong></span>
                </p>
              </div>
            )}
          </div> */}

          <div className="p-6 pt-2">
            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                <p className="text-sm text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Dynamic fields based on tab */}
              {activeTab === 'atc' ? (
                // ATC fields - Name + Password
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-300" />
                      ATC Name
                    </label>
                    <input
                      type="text"
                      value={atcName}
                      onChange={(e) => setAtcName(e.target.value)}
                      placeholder="e.g., ATCSupervisor"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-300" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={atcPassword}
                      onChange={(e) => setAtcPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </>
              ) : (
                // Airline fields - Email + Password
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-sky-200 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-sky-300" />
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="airline@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 outline-none transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-sky-200 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-sky-300" />
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500/50 outline-none transition-all"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </>
              )}

              {/* Forgot password - different for each */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => alert(activeTab === 'atc' ? 'Contact ATC admin for password reset' : 'Password reset email would be sent')}
                  className="text-sm text-white/50 hover:text-white transition-colors"
                >
                  {activeTab === 'atc' ? 'Contact admin' : 'Forgot password?'}
                </button>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-linear-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-sky-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </div>
                ) : (
                  `Sign in as ${activeTab === 'atc' ? 'ATC' : 'Airline'}`
                )}
              </button>
            </form>

            {/* Register section - only for airlines */}
            {activeTab === 'airline' && (
              <div className="mt-6 text-center">
                <p className="text-sm text-white/70">
                  New airline?{' '}
                  <Link
                    href="/register"
                    className="text-sky-400 font-semibold hover:text-sky-300 hover:underline transition-all"
                  >
                    Register here
                  </Link>
                </p>
                <p className="text-xs text-white/40 mt-2 flex items-center justify-center gap-1">
                  <TowerControl className="w-3 h-3" />
                  ATC accounts are pre-configured by administrators
                </p>
              </div>
            )}

            {/* ATC note */}
            {/* {activeTab === 'atc' && (
              <div className="mt-6 text-center">
                <p className="text-xs text-white/40 bg-white/5 p-3 rounded-xl">
                  <TowerControl className="w-3 h-3 inline mr-1" />
                  Single ATC system account with multi‑access privileges.<br />
                  Use your assigned name and password.
                </p>
              </div>
            )} */}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-white/30 mt-6">
          © 2026 ATC System · Authorized access only
        </p>
      </div>
    </div>
  );
}