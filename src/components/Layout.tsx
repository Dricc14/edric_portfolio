import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-tertiary selection:text-on-tertiary">
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-ambient border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-headline font-bold text-2xl tracking-tight text-primary uppercase">
            Elite Athlete
          </div>
          <div className="hidden md:flex items-center gap-8 font-headline text-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`${isActive ? 'text-tertiary border-b-2 border-tertiary pb-1' : 'text-primary/70 hover:text-tertiary'} hover:scale-105 transition-all`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href="#contact" className="text-primary/70 hover:text-tertiary hover:scale-105 transition-all">Contact</a>
          </div>
          <button className="bg-tertiary text-on-tertiary font-label uppercase tracking-widest text-xs font-bold px-6 py-2.5 rounded-md shadow-glow hover:scale-105 transition-transform">
            Hire Me
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="border-t border-outline-variant/10 bg-surface py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-headline font-bold text-xl text-tertiary tracking-tight mb-2">
              ANTONIO SASTRADI
            </div>
            <p className="font-body text-sm text-on-surface-variant">
              © 2024 Kinetic Professional. Built for the Win.
            </p>
            <p className="font-body text-xs text-on-surface-variant/50 mt-2">
              * UI preview built with React & Tailwind. Ready for Laravel/Blade integration.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-body text-sm text-on-surface-variant">
            <a href="#" className="hover:text-tertiary transition-colors">Instagram</a>
            <a href="#" className="hover:text-tertiary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-tertiary transition-colors">Contact</a>
            <a href="#" className="hover:text-tertiary transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
