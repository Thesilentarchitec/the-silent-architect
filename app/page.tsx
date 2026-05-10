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
  ChevronDown,
  Zap,
  Box,
  Shield,
  Monitor
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PurchaseBar from '../components/PurchaseBar';
import SocialProof from '../components/SocialProof';

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
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
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
            Buy Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative blueprint-bg overflow-hidden">
        <div className="blueprint-lines"></div>
        <div className="relative z-10" data-aos="fade-up">
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-4 block">Strategic Exit Blueprint</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Mental <br/><span className="text-gold">Sovereignty</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Architecture for the Internal Landscape. A blueprint for cognitive clarity in a world designed for distraction.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
            <a href={gumroadLink} className="btn-gold px-10 py-4 rounded-sm font-semibold text-lg uppercase tracking-wider">
              Get the Blueprint
            </a>
          </div>

          {/* Visual Mockup Element */}
          <div className="relative max-w-4xl mx-auto mt-12 mb-[-120px] px-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-[#0f0f0f] border border-white/10 rounded-sm shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
                </div>
                <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">the_silent_architect.dmg</div>
                <div className="w-10"></div>
              </div>
              <div className="grid md:grid-cols-[250px_1fr] h-[400px]">
                <div className="hidden md:block border-r border-white/5 p-6 text-left">
                  <div className="space-y-4">
                    <div className="h-2 w-24 bg-gold/20 rounded"></div>
                    <div className="h-2 w-32 bg-white/5 rounded"></div>
                    <div className="h-2 w-28 bg-white/5 rounded"></div>
                    <div className="pt-8 space-y-4">
                      <div className="h-1 w-full bg-white/5 rounded"></div>
                      <div className="h-1 w-full bg-white/5 rounded"></div>
                      <div className="h-1 w-3/4 bg-white/5 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="p-8 text-left relative">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Monitor size={120} className="text-gold" />
                  </div>
                  <div className="font-mono text-xs md:text-sm text-gold mb-6">$ tail -f /var/log/mental_clarity.log</div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-white text-sm font-bold uppercase tracking-wider mb-2">Cognitive Load Status</div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gold h-full w-[15%]"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Focus Mode</div>
                        <div className="text-white text-xs font-bold uppercase tracking-widest">Active / Deep</div>
                      </div>
                      <div>
                        <div className="text-gray-500 text-[10px] uppercase mb-1">Noise Filter</div>
                        <div className="text-white text-xs font-bold uppercase tracking-widest">High Intensity</div>
                      </div>
                    </div>
                    <div className="pt-8 border-t border-white/5">
                      <div className="text-gray-400 text-xs leading-relaxed italic">
                        "The mind is the only territory that remains truly yours. 
                        Defend it with the precision of an architect."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shadow/Glow effect */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-gold/20 blur-[60px] -z-10 opacity-30"></div>
          </div>
        </div>
      </section>

      {/* The Framework Section */}
      <section id="framework" className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-[0.2em]">The Framework</h2>
            <div className="w-12 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                  <Shield className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-widest">The Foundation</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
                Clearing digital noise and reclaiming the baseline of focus.
              </p>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                  <Layout className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-widest">The Structure</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
                Designing daily protocols for deep work and cognitive output.
              </p>
            </div>
            <div className="text-center group" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-8 flex justify-center">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-500">
                  <Zap className="text-gold opacity-50 group-hover:opacity-100 transition-opacity" size={28} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold uppercase tracking-widest">The Sovereignty</h3>
              <p className="text-gray-400 font-light leading-relaxed max-w-xs mx-auto">
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

      {/* Final Pitch Section */}
      <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-tighter">
            Stop being the <span className="text-gold underline decoration-1 underline-offset-8">Resource</span>.<br/>Become the <span className="text-gold">Architect</span>.
          </h2>
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            The world is designed to harvest your attention. Every app, every notification, every "urgent" email is a tax on your cognitive sovereignty. 
            The Silent Architect isn't just a guide; it's a defensive system for your mind.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <div className="border border-white/10 p-6 bg-white/[0.02]">
              <CheckCircle className="text-gold mb-4" size={20} />
              <div className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Instant ROI</div>
              <p className="text-gray-500 text-sm font-light">One hour of deep focus is worth more than a week of distracted work.</p>
            </div>
            <div className="border border-white/10 p-6 bg-white/[0.02]">
              <CheckCircle className="text-gold mb-4" size={20} />
              <div className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Lifetime Sovereignty</div>
              <p className="text-gray-500 text-sm font-light">A framework that evolves with you, regardless of the tools or algorithms of the day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 px-6 bg-[#0c0c0c] text-center">
        <div className="max-w-4xl mx-auto p-12 border border-gold/30 gold-glow bg-gold/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Lock size={200} />
          </div>
          <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter relative z-10">Reclaim Your Narrative</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
            Join those who have already exited the cycle of reactive living.
          </p>
          <a href={gumroadLink} className="btn-gold px-12 py-5 rounded-none font-bold text-xl uppercase tracking-widest inline-block mb-8 relative z-10 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all">
            Get The Blueprint — $19
          </a>
          <p className="text-gold/60 text-[10px] font-mono tracking-[0.3em] uppercase">{">"} initialize_liberation_sequence.sh</p>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="text-xl font-bold tracking-tighter uppercase mb-4">
          Silent<span className="text-gold">Architect</span>
        </div>
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} The Silent Architect. All Rights Reserved.
        </p>
      </footer>

      <PurchaseBar />
      <SocialProof />
    </main>
  );
}
