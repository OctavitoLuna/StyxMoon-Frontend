export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Outer professional orbit */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
      
      {/* The Moon Crescent */}
      <path 
        d="M65 30C58.3333 23.3333 46 25 38 38C30 51 33.3333 66.6667 40 73.3333" 
        stroke="var(--accent-primary)" 
        strokeWidth="6" 
        strokeLinecap="round" 
      />
      
      {/* Node Points connecting to moon */}
      <circle cx="65" cy="30" r="4" fill="var(--accent-secondary)" />
      <circle cx="40" cy="73" r="4" fill="var(--accent-secondary)" />
      
      {/* Inner Tech Core */}
      <rect x="42" y="42" width="16" height="16" rx="4" fill="var(--accent-primary)" opacity="0.2" />
      <rect x="46" y="46" width="8" height="8" rx="2" fill="var(--accent-primary)" />
      
      {/* Flux Lines */}
      <path d="M42 50H30M70 50H58M50 42V30M50 70V58" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
    </svg>
  );
};
