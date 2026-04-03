import { Terminal, Palette, Database, Layout, Megaphone, Users, Handshake } from 'lucide-react';

export default function Skills() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
            PROVEN <br />
            <span className="text-tertiary">EXECUTION.</span>
          </h2>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Balancing the precision of development with the grit of competitive basketball. Explore the technical and physical foundation of my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Court Strategy */}
          <div className="md:col-span-8 bg-surface-container-high p-10 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <div className="w-48 h-48 rounded-full border-8 border-current flex items-center justify-center">
                <div className="w-full h-2 bg-current"></div>
                <div className="absolute h-full w-2 bg-current"></div>
              </div>
            </div>
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-4 block">Performance Athletics</span>
            <h3 className="font-headline text-4xl font-bold mb-10 text-primary">Court Strategy</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="border-l-4 border-tertiary pl-4">
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Position</p>
                <p className="font-headline text-xl font-bold">PG / SG Hybrid</p>
              </div>
              <div className="border-l-4 border-tertiary pl-4">
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Focus</p>
                <p className="font-headline text-xl font-bold">Team Leadership</p>
              </div>
              <div className="border-l-4 border-tertiary pl-4">
                <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Approach</p>
                <p className="font-headline text-xl font-bold">Strategic Playmaking</p>
              </div>
            </div>
          </div>

          {/* Human Dynamics */}
          <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-xl flex flex-col">
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Human Dynamics</span>
            <h3 className="font-headline text-3xl font-bold mb-8 text-primary">Interpersonal Strength</h3>
            <ul className="space-y-6 mt-auto">
              <li className="flex items-center gap-4">
                <Megaphone className="text-tertiary" size={20} />
                <span className="font-body text-on-surface-variant">Public Speaking</span>
              </li>
              <li className="flex items-center gap-4">
                <Users className="text-tertiary" size={20} />
                <span className="font-body text-on-surface-variant">Panitia Fratcup Management</span>
              </li>
              <li className="flex items-center gap-4">
                <Handshake className="text-tertiary" size={20} />
                <span className="font-body text-on-surface-variant">Cross-team Collaboration</span>
              </li>
            </ul>
          </div>

          {/* Technical Stack */}
          <div className="md:col-span-12 bg-surface-container p-10 rounded-xl border border-outline-variant/10 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-2 block">Technical Stack</span>
                <h3 className="font-headline text-4xl font-bold text-primary">Modern Engineering</h3>
              </div>
              <span className="bg-surface-container-highest font-label text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full text-on-surface-variant border border-outline-variant/20">
                Full-Stack Capability
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Terminal, name: 'Laravel' },
                { icon: Palette, name: 'TailwindCSS' },
                { icon: Database, name: 'SQLite' },
                { icon: Layout, name: 'UI/UX Design' }
              ].map((tech) => (
                <div key={tech.name} className="bg-surface-container-high p-6 rounded-lg border border-outline-variant/5 hover:scale-105 transition-transform group">
                  <tech.icon className="text-primary mb-4 group-hover:text-tertiary transition-colors" size={28} />
                  <p className="font-headline text-xl font-bold text-on-surface">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
