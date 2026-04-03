import { ArrowRight, Code, Trophy } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
            SELECTED <br />
            <span className="text-on-primary-container">ARCHIVES</span>
          </h2>
          <div className="hidden md:block h-px bg-outline-variant/30 flex-grow mx-12 mb-4"></div>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-2">
            Case Studies / 03
          </span>
        </div>

        <div className="space-y-32">
          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
            <div className="md:col-span-7 aspect-[16/9] rounded-xl overflow-hidden relative bg-surface-container-high">
              <img 
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=1200" 
                alt="Fratcup Basketball" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="bg-tertiary text-on-tertiary font-label text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-sm">
                  Lead Coordinator
                </span>
              </div>
            </div>
            <div className="md:col-span-5">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-4 block">Management & Strategy</span>
              <h3 className="font-headline text-4xl font-bold mb-6 text-primary group-hover:translate-x-2 transition-transform">FRATCUP BASKETBALL</h3>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                Orchestrating one of the most anticipated student basketball tournaments. Managed logistics, team brackets, and on-court strategy for the tournament committee.
              </p>
              <button className="flex items-center gap-3 text-primary font-label text-xs uppercase tracking-widest font-bold group-hover:gap-5 transition-all">
                View Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
            <div className="md:col-span-5 order-2 md:order-1">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-4 block">Full Stack Development</span>
              <h3 className="font-headline text-4xl font-bold mb-6 text-primary group-hover:-translate-x-2 transition-transform">DIGITAL PORTFOLIO</h3>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                A high-performance student-athlete portfolio built with Laravel and TailwindCSS. Focused on speed, clean editorial typography, and kinetic design principles.
              </p>
              <button className="flex items-center gap-3 text-primary font-label text-xs uppercase tracking-widest font-bold group-hover:gap-5 transition-all">
                View Repository <Code size={16} />
              </button>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 aspect-[16/9] rounded-xl overflow-hidden relative bg-primary-container border border-outline-variant/20">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                alt="Code on screen" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full max-w-md bg-surface/80 backdrop-blur-md border border-outline-variant/20 rounded-lg shadow-2xl p-6">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-surface-container-highest rounded w-3/4"></div>
                    <div className="h-4 bg-surface-container-highest rounded w-1/2"></div>
                    <div className="h-4 bg-tertiary/20 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center group">
            <div className="md:col-span-7 aspect-[16/9] rounded-xl overflow-hidden relative bg-surface-container-high">
              <img 
                src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=1200" 
                alt="Basketball hoop at night" 
                className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-surface/90 to-transparent"></div>
            </div>
            <div className="md:col-span-5">
              <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-4 block">Community Impact</span>
              <h3 className="font-headline text-4xl font-bold mb-6 text-primary group-hover:translate-x-2 transition-transform">ELITE CAMP CLINIC</h3>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                Leading community basketball training sessions for aspiring youth athletes. Focused on tactical awareness, ball handling fundamentals, and mindset coaching.
              </p>
              <div className="flex gap-4">
                <Trophy className="text-tertiary" size={24} />
                <Trophy className="text-tertiary" size={24} />
                <Trophy className="text-tertiary" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
