import { ArrowRight, Trophy, Medal, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-6 overflow-hidden bg-gradient-to-br from-primary-container/50 to-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-block border border-outline-variant/20 bg-surface-container-low/50 backdrop-blur px-4 py-1.5 rounded-full mb-8">
              <span className="font-label text-tertiary text-[10px] uppercase tracking-[0.2em] font-bold">
                Active Student Athlete
              </span>
            </div>
            
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              <span className="text-primary">ANTONIO </span>
              <span className="text-tertiary text-glow">EDRIC</span><br />
              <span className="text-primary">BERTRAND</span><br />
              <span className="text-primary">SASTRADI</span>
            </h1>

            <div className="flex gap-12 mb-8 border-l-2 border-outline-variant/20 pl-6">
              <div>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-1">Affiliation</p>
                <p className="font-headline text-lg font-medium">XIIA/03 SMAK Frat.</p>
              </div>
              <div>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em] mb-1">Date of Birth</p>
                <p className="font-headline text-lg font-medium">11 Oct 2008</p>
              </div>
            </div>

            <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              A high-performance <strong className="text-on-surface font-semibold">Student Athlete & Championship Winner</strong> dedicated to excellence on the court and in the classroom.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-tertiary text-on-tertiary font-label uppercase tracking-widest text-sm font-bold px-8 py-4 rounded-md shadow-glow hover:scale-105 transition-transform flex items-center gap-2">
                Explore Career <ArrowRight size={18} />
              </button>
              <button className="bg-surface-variant/20 backdrop-blur border border-outline-variant/30 text-primary font-label uppercase tracking-widest text-sm font-bold px-8 py-4 rounded-md hover:scale-105 hover:bg-surface-container-low transition-all">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/20 to-primary/20 blur-3xl rounded-full"></div>
            <img 
              src="/edric.jpg" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" }}
              alt="Antonio Edric" 
              className="relative z-10 w-full aspect-[4/5] object-cover rounded-xl transition-all duration-700 shadow-ambient"
            />
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-8 text-primary">
              CHAMPIONSHIP MINDSET
            </h2>
            <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
              <p>
                My journey is defined by the grit found in every defensive play and the discipline required for academic success. As a student at SMAK Frateran, I've learned that "The Kinetic Professional" isn't just a title—it's a lifestyle of constant movement and improvement.
              </p>
              <p>
                Balancing a rigorous academic schedule with the demands of competitive basketball has forged a spirit that is both <strong className="text-tertiary font-semibold">competitive and hardworking</strong>. I don't just participate; I lead with the intent to win.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-high p-8 rounded-xl border-l-4 border-tertiary">
              <div className="font-headline text-5xl font-bold text-tertiary mb-2">02</div>
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Major Titles</div>
            </div>
            <div className="bg-surface-container-high p-8 rounded-xl border-l-4 border-primary">
              <div className="font-headline text-5xl font-bold text-primary mb-2">100%</div>
              <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Commitment</div>
            </div>
            <div className="col-span-2 bg-surface-container-highest p-8 rounded-xl mt-4">
              <p className="font-headline text-2xl italic text-on-surface leading-snug">
                "Hard work beats talent when talent fails to work hard."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">
              CHAMPIONSHIP RECORDS
            </h2>
            <p className="font-label text-tertiary uppercase tracking-[0.2em] text-sm font-bold">
              Achievements & Leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Card */}
            <div className="md:col-span-8 bg-surface-container-high rounded-xl overflow-hidden flex flex-col md:flex-row group">
              <div className="md:w-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800" 
                  alt="Basketball Court" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <span className="inline-block bg-tertiary/10 text-tertiary font-label text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm w-fit mb-6">
                  Basketball
                </span>
                <h3 className="font-headline text-3xl font-bold mb-4 text-primary">Rektor Cup Champion</h3>
                <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                  Secured the championship title at Universitas Ciputra, demonstrating elite teamwork and strategic play on the big stage.
                </p>
                <div className="flex items-center gap-2 text-tertiary font-label text-xs uppercase tracking-widest font-bold mt-auto">
                  <Trophy size={16} /> University Level
                </div>
              </div>
            </div>

            {/* Side Card */}
            <div className="md:col-span-4 bg-surface-container-highest rounded-xl p-10 flex flex-col border-t border-outline-variant/20">
              <Medal className="text-tertiary mb-6" size={32} />
              <h3 className="font-headline text-2xl font-bold mb-4 text-primary">Vita Cup Champion</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-12">
                Continuous excellence in regional tournaments, maintaining high-performance standards under pressure.
              </p>
              <div className="mt-auto flex justify-between items-center border-t border-outline-variant/20 pt-6">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Status</span>
                <span className="font-label text-xs uppercase tracking-widest text-tertiary font-bold">Undefeated</span>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="md:col-span-5 bg-surface-container-high rounded-xl p-10 border-l-4 border-primary">
              <h3 className="font-headline text-2xl font-bold mb-4 text-primary">Fratcup Organizer</h3>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                Leading the logistical and operational success of the prestigious Fratcup Basketball tournament.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Logistics', 'Leadership', 'Coordination'].map(tag => (
                  <span key={tag} className="bg-surface-container-lowest border border-outline-variant/20 text-primary font-label text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="md:col-span-7 bg-primary-container rounded-xl p-10 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                <Trophy size={200} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-8 text-primary relative z-10">Athletic & Professional Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {[
                  'Strategic Planning', 'Team Leadership', 
                  'Crisis Management', 'High Endurance'
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle2 className="text-tertiary" size={20} />
                    <span className="font-label text-xs uppercase tracking-widest text-on-primary-container font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-surface-container p-12 md:p-20 rounded-2xl border border-outline-variant/10 shadow-ambient">
            <h2 className="font-headline text-5xl md:text-6xl font-bold mb-6 text-primary">
              LET'S WIN TOGETHER
            </h2>
            <p className="font-body text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
              Interested in collaboration or seeking a high-performance athlete for your team?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-tertiary text-on-tertiary font-label uppercase tracking-widest text-sm font-bold px-10 py-5 rounded-md shadow-glow hover:scale-105 transition-transform">
                Send Email
              </button>
              <button className="bg-surface-container-highest text-primary border border-outline-variant/20 font-label uppercase tracking-widest text-sm font-bold px-10 py-5 rounded-md hover:scale-105 hover:bg-surface-container-high transition-all">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
