import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { MissionVision } from './components/sections/MissionVision';
import { Services } from './components/sections/Services';
import { Infrastructure } from './components/sections/Infrastructure';
import { Statistics } from './components/sections/Statistics';
import { Partners } from './components/sections/Partners';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen font-sans selection:bg-[var(--accent-primary)] selection:text-white overflow-x-hidden">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <MissionVision />
      <Services />
      <Infrastructure />
      <Statistics />
      <Partners />
      <Footer />
    </div>
  );
}
