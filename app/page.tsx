// app/page.tsx (Landing Page)
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Plane, 
  TowerControl, 
  Shield, 
  Clock, 
  Cloud, 
  Radar,
  ChevronRight,
  Menu,
  X,
  Globe,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <TowerControl className="w-8 h-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-white font-bold text-xl">ATC·NET</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a>
              <a href="#security" className="text-white/70 hover:text-white transition-colors text-sm">Security</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/login" 
                className="px-4 py-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                Sign In
              </Link>
              <Link 
                href="/register" 
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                Register Airline
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/70 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-slate-800/95 backdrop-blur-lg border-b border-white/10">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-white/70 hover:text-white py-2">Features</a>
              <a href="#security" className="block text-white/70 hover:text-white py-2">Security</a>
              <a href="#about" className="block text-white/70 hover:text-white py-2">About</a>
              <a href="#contact" className="block text-white/70 hover:text-white py-2">Contact</a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link href="/login" className="text-center px-4 py-2 text-white/80 hover:text-white">
                  Sign In
                </Link>
                <Link href="/register" className="text-center px-4 py-2 bg-blue-600 text-white rounded-xl">
                  Register Airline
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated radar background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative w-200 h-200">
            <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-ping"></div>
            <div className="absolute inset-24 border-2 border-blue-400/20 rounded-full"></div>
            <div className="absolute inset-48 border-2 border-blue-300/20 rounded-full"></div>
            <div className="absolute inset-72 border-2 border-blue-200/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm">Real-time ATC System · 24/7 Operation</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Next-Generation
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Air Traffic Control
              </span>
            </h1>

            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Secure, reliable, and modern ATC management system for air traffic controllers and airlines. 
              Real-time flight tracking, weather monitoring, and seamless communication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/login?tab=atc"
                className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <TowerControl className="w-5 h-5" />
                ATC Access
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/login?tab=airline"
                className="group px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-2xl font-semibold text-lg transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <Plane className="w-5 h-5" />
                Airline Portal
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">150+</div>
                <div className="text-white/60">Airlines Connected</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/60">Real-time Monitoring</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">99.99%</div>
                <div className="text-white/60">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ATC·NET?</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Built for the future of aviation management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radar,
                title: "Real-time Radar",
                description: "Live flight tracking with precise positioning and predictive paths"
              },
              {
                icon: Cloud,
                title: "Weather Integration",
                description: "Advanced weather monitoring and alert systems"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-level encryption and multi-factor authentication"
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Connect with ATC centers worldwide"
              },
              {
                icon: Users,
                title: "Multi-user Access",
                description: "Role-based access for controllers and airline staff"
              },
              {
                icon: Award,
                title: "Compliance Ready",
                description: "FAA, EASA, and ICAO standards compliant"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all hover:scale-105">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Portal Section */}
      <section className="py-24 relative bg-linear-to-t from-blue-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ATC Portal Card */}
            <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <TowerControl className="w-16 h-16 text-white/80 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">ATC Portal</h3>
              <p className="text-white/80 mb-6">For air traffic controllers with multi‑access privileges</p>
              <ul className="space-y-3 mb-8">
                {['Live radar view', 'Flight strip management', 'Weather alerts', 'Intercom with pilots'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90">
                    <ArrowRight className="w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="/login?tab=atc"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl transition-all"
              >
                Access ATC <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Airline Portal Card */}
            <div className="bg-linear-to-br from-sky-600 to-cyan-800 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <Plane className="w-16 h-16 text-white/80 mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">Airline Portal</h3>
              <p className="text-white/80 mb-6">For airlines to manage flights and operations</p>
              <ul className="space-y-3 mb-8">
                {['Flight scheduling', 'Slot requests', 'Fleet management', 'Weather briefings'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90">
                    <ArrowRight className="w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3">
                <Link 
                  href="/login?tab=airline"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-xl transition-all"
                >
                  Sign In <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-cyan-800 hover:bg-white/90 rounded-xl transition-all font-medium"
                >
                  Register <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <TowerControl className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">ATC·NET</span>
              </div>
              <p className="text-white/50 text-sm">Advanced air traffic control system for modern aviation</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#security" className="hover:text-white">Security</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#docs" className="hover:text-white">Documentation</a></li>
                <li><a href="#help" className="hover:text-white">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/50 text-sm">
                <li><a href="#privacy" className="hover:text-white">Privacy</a></li>
                <li><a href="#terms" className="hover:text-white">Terms</a></li>
                <li><a href="#compliance" className="hover:text-white">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40 text-sm">
            © 2024 ATC·NET. All rights reserved. FAA & ICAO compliant.
          </div>
        </div>
      </footer>
    </div>
  );
}