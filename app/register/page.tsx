// app/register/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plane, Mail, Lock, Building2, Phone, AlertCircle } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    airlineName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    iataCode: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success and redirect
      router.push('/login?registered=success');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-4 border border-blue-500/30">
              <Plane className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-white">Register Airline</h1>
            <p className="text-sm text-blue-200/70 mt-1">Join the ATC network</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
              <p className="text-sm text-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-blue-300" />
                Airline Name
              </label>
              <input
                type="text"
                value={formData.airlineName}
                onChange={(e) => setFormData({...formData, airlineName: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <Mail className="w-4 h-4 text-blue-300" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <Phone className="w-4 h-4 text-blue-300" />
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <span className="font-mono text-blue-300">IATA</span>
                Airline Code
              </label>
              <input
                type="text"
                value={formData.iataCode}
                onChange={(e) => setFormData({...formData, iataCode: e.target.value.toUpperCase()})}
                placeholder="AA, DL, UA"
                maxLength={2}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all uppercase"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <Lock className="w-4 h-4 text-blue-300" />
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                required
                minLength={8}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-blue-200 flex items-center gap-2 mb-1">
                <Lock className="w-4 h-4 text-blue-300" />
                Confirm Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-sky-600 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-sky-700 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 mt-6"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Registering...
                </div>
              ) : (
                'Register Airline'
              )}
            </button>
          </form>

          <p className="text-center text-sm text-white/50 mt-6">
            Already registered?{' '}
            <Link href="/login" className="text-sky-400 font-semibold hover:text-sky-300 hover:underline">
              Sign in
            </Link>
          </p>
          
          <p className="text-center text-xs text-white/30 mt-4">
            Note: ATC accounts are system-managed and cannot be registered here
          </p>
        </div>
      </div>
    </div>
  );
}