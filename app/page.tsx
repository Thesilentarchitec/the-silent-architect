'use client';

import { useEffect } from 'react';
import { 
  Skull, 
  BatteryLow, 
  Lock, 
  Layout, 
  ShieldCheck, 
  Database, 
  TrendingUp, 
  LogOut, 
  Download, 
  CheckCircle, 
  Quote,
  ChevronDown
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PurchaseBar from '@/components/PurchaseBar';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const gumroadLink = "https://thesilentarchitec.gumroad.com/l/poqmvj?wanted=true";

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter uppercase">
            Silent<span className="text-gold">Architect</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
            <a href="#problem" className="hover:text-gold transition">The Chaos</a>
            <a href="#solution" className="hover:text-gold transition">The Architecture</a>
            <a href="#framework" className="hover:text-gold transition">The Framework</a>
            <a href="#curriculum" className="hover:text-gold transition">The Curriculum</a>
            <a href="#free-guide" className="hover:text-gold transition">Free Guide</a>
          </div>
          <a href={gumroadLink} className="text-xs uppercase tracking-widest border border-gold/30 px-4 py-2 hover:bg-gold hover:text-black transition duration-300">
            Get Access
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 relative blueprint-bg">
        <div className="blueprint-lines"></div>
        <div className="relative z-10" data-aos="fade-up">
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Strategic Exit Blueprint</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Architecture for the <br/><span className="text-gold">Internal Landscape</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A blueprint for mental sovereignty and cognitive clarity in a world designed for distraction.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={gumroadLink} className="btn-gold px-10 py-4 rounded-sm font-semibold text-lg uppercase tracking-wider">
              Get the Blueprint
            </a>
          </div>
        </div>
        <div className="mt-20 animate-bounce text-gray-600">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* The Framework Section (New) */}
      <section id="framework" className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">The Framework</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-wide">The Foundation</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Clearing digital noise and reclaiming focus.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-wide">The Structure</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Designing daily protocols for deep work.
              </p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-wide">The Sovereignty</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Maintaining mental autonomy in the algorithmic age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Chaos Section */}
      <section id="problem" className="py-24 px-6 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">The Chaos</h2>
            <div className="w-20 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-card p-10 gold-border group" data-aos="fade-up" data-aos-delay="100">
              <Skull className="text-gold mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Toxic Environments</h3>
              <p className="text-gray-400 font-light">Office politics and broken systems.</p>
            </div>
            <div className="bg-dark-card p-10 gold-border group" data-aos="fade-up" data-aos-delay="200">
              <BatteryLow className="text-gold mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Emotional Drainage</h3>
              <p className="text-gray-400 font-light">Your creativity is being harvested.</p>
            </div>
            <div className="bg-dark-card p-10 gold-border group" data-aos="fade-up" data-aos-delay="300">
              <Lock className="text-gold mb-6" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">The Salary Trap</h3>
              <p className="text-gray-400 font-light">Golden handcuffs that keep you compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase">The Curriculum</h2>
          <div className="grid gap-8 lg:grid-cols-5">
            {[
              { icon: Layout, title: "Blueprint Foundation", module: "01" },
              { icon: ShieldCheck, title: "Emotional Firewall", module: "02" },
              { icon: Database, title: "Information Vacuum", module: "03" },
              { icon: TrendingUp, title: "Capital Transmutation", module: "04" },
              { icon: LogOut, title: "The Surgical Exit", module: "05" },
            ].map((item, idx) => (
              <div key={idx} className="bg-dark-card border border-white/5 p-8 group hover:border-gold/30 transition-all">
                <item.icon className="text-gold mb-6 mx-auto opacity-50 group-hover:opacity-100" size={32} />
                <h3 className="text-sm text-gold uppercase tracking-widest mb-4">Module {item.module}</h3>
                <h4 className="text-lg font-bold uppercase tracking-wide">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-[#0c0c0c] text-center">
        <div className="max-w-4xl mx-auto p-12 border-2 border-gold gold-glow bg-gold/5">
          <h2 className="text-4xl font-bold mb-6 uppercase">Ready for the Complete Architecture?</h2>
          <a href={gumroadLink} className="btn-gold px-12 py-5 rounded-sm font-bold text-xl uppercase tracking-widest inline-block mb-4">
            Get the Full Blueprint — $19
          </a>
          <p className="text-gold/60 text-xs font-mono tracking-widest">{">"} tactical_ops: complete_liberation_protocol.exe</p>
        </div>
      </section>

      <PurchaseBar />
    </main>
  );
}
