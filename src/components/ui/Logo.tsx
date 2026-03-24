export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10A40 40 0 1 1 10 50A30 30 0 0 0 50 10Z" fill="currentColor" className="text-[var(--accent-primary)]" />
    <path d="M20 50 L40 50 L50 30 L70 30" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-secondary)]" />
    <circle cx="70" cy="30" r="6" fill="currentColor" className="text-[var(--accent-secondary)]" />
    <path d="M30 70 L50 70 L60 50 L80 50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--accent-secondary)]" />
    <circle cx="80" cy="50" r="6" fill="currentColor" className="text-[var(--accent-secondary)]" />
  </svg>
);
