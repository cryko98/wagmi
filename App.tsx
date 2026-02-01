import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, Menu, X as XIcon, TrendingUp, Heart, Zap } from 'lucide-react';
import { CA, ASSETS, LINKS, COPY } from './constants';

// Helper Components

const NavLink = ({ href, children, onClick }: { href: string; children?: React.ReactNode; onClick?: () => void }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-xl hover:text-green-200 transition-colors duration-200 px-4 py-2 block md:inline-block"
  >
    {children}
  </a>
);

const StepCard = ({ number, title, desc }: { number: string, title: string, desc: string }) => (
  <div className="bg-green-800 p-6 rounded-xl border-2 border-green-600 hover:bg-green-700 transition-colors relative overflow-hidden group">
    <div className="absolute -right-4 -top-4 text-9xl text-green-900 opacity-50 font-marker select-none group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="relative z-10">
      <h3 className="text-3xl mb-4 text-green-300">{title}</h3>
      <p className="text-xl text-green-100/80 leading-snug">{desc}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-900 p-3 rounded-lg hover:bg-green-500 hover:text-wagmi-dark transition-all border border-green-700 hover:rotate-6"
    aria-label={label}
  >
    {icon}
  </a>
);

const WaveBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
    {/* Wave 1 */}
    <div className="absolute -bottom-4 left-0 w-[200%] h-[75%] flex animate-wave text-green-200/40 mix-blend-multiply">
       <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
         <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1440,176L1440,320L1344,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,0,320,0,320Z"></path>
       </svg>
       <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
         <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1440,176L1440,320L1344,320C1248,320,1152,320,1056,320,960,320,864,320,768,320,672,320,576,320,480,320,384,320,288,320,192,320C96,320,0,320,0,320Z"></path>
       </svg>
    </div>
    
    {/* Wave 2 */}
    <div className="absolute -bottom-12 left-0 w-[200%] h-[75%] flex animate-wave-slow text-green-300/30 mix-blend-multiply">
       <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
         <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1440,112L1440,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
       </svg>
       <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
         <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1440,112L1440,320L1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
       </svg>
    </div>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-green-100 text-wagmi-dark overflow-x-hidden selection:bg-green-300">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-wagmi-dark/95 backdrop-blur-sm text-white border-b-4 border-green-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src={ASSETS.LOGO} 
                alt="PumpLife Logo" 
                className="h-12 w-12 rounded-full border-2 border-green-400 animate-bounce" 
                style={{ animationDuration: '3s' }}
              />
              <span className="text-2xl tracking-wider text-green-400 uppercase">{COPY.TICKER}</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#lore">Lore</NavLink>
                <NavLink href="#how-to-buy">How to Buy</NavLink>
                <a 
                  href={LINKS.PUMP_FUN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-wagmi-dark px-6 py-2 rounded-full text-xl transform hover:scale-105 transition-all shadow-[4px_4px_0px_0px_rgba(220,252,231,1)]"
                >
                  Buy on Pump.fun
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-green-400">
                {isMenuOpen ? <XIcon size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-wagmi-dark border-t border-green-800 pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
              <NavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink href="#lore" onClick={() => setIsMenuOpen(false)}>Lore</NavLink>
              <NavLink href="#how-to-buy" onClick={() => setIsMenuOpen(false)}>How to Buy</NavLink>
              <div className="pt-4">
                 <a 
                  href={LINKS.PUMP_FUN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-wagmi-dark px-6 py-2 rounded-full text-xl shadow-[4px_4px_0px_0px_rgba(220,252,231,1)]"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4 md:pt-48 md:pb-32 relative overflow-hidden bg-green-100">
        
        {/* Animated Background */}
        <WaveBackground />

        {/* Background Scribbles */}
        <div className="absolute top-20 left-10 opacity-20 pointer-events-none transform -rotate-12 z-0">
          <TrendingUp size={200} className="text-green-600" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none transform rotate-12 z-0">
          <Zap size={200} className="text-green-600" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={ASSETS.LOGO} 
                alt="PumpLife Meme" 
                className="relative h-48 w-48 md:h-64 md:w-64 rounded-full border-4 border-wagmi-dark shadow-2xl object-cover transform transition-transform group-hover:rotate-6"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl text-wagmi-dark mb-4 drop-shadow-[4px_4px_0px_rgba(74,222,128,1)] uppercase">
            {COPY.TITLE}
          </h1>
          <p className="text-3xl md:text-4xl text-green-700 mb-8 font-hand font-bold">
            Live the Pump Life. Where the market is pumping and we all get rich.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a 
              href={LINKS.PUMP_FUN}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-wagmi-dark text-green-400 text-2xl px-8 py-4 rounded-xl border-2 border-transparent hover:border-green-400 shadow-[8px_8px_0px_0px_#4ade80] hover:shadow-[4px_4px_0px_0px_#4ade80] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
            >
              Get {COPY.TICKER}
            </a>
            <a 
              href={LINKS.X}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-50 text-wagmi-dark text-2xl px-8 py-4 rounded-xl border-2 border-wagmi-dark shadow-[8px_8px_0px_0px_#052e16] hover:shadow-[4px_4px_0px_0px_#052e16] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex items-center justify-center"
              aria-label="X (Twitter)"
            >
              <XIcon size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <div className="bg-green-300 py-12 transform -skew-y-2 border-y-4 border-wagmi-dark">
        <div className="max-w-4xl mx-auto px-4 text-center transform skew-y-2">
          <h3 className="text-3xl mb-4">Contract Address (CA)</h3>
          <div className="bg-green-50 p-4 rounded-lg border-2 border-wagmi-dark shadow-[6px_6px_0px_0px_#052e16] flex flex-col md:flex-row items-center justify-between gap-4">
            <code className="text-sm md:text-xl break-all font-mono bg-green-100 p-2 rounded w-full md:w-auto text-green-900">
              {CA}
            </code>
            <button 
              onClick={copyToClipboard}
              className={`flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-bold border-2 transition-all w-full md:w-auto ${
                copied 
                  ? 'bg-green-500 text-white border-green-700 shadow-[2px_2px_0px_0px_#15803d]' 
                  : 'bg-green-200 text-wagmi-dark border-wagmi-dark shadow-[4px_4px_0px_0px_#052e16] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#052e16]'
              }`}
            >
              {copied ? <><Check size={20} /> Copied!</> : <><Copy size={20} /> Copy CA</>}
            </button>
          </div>
        </div>
      </div>

      {/* Lore Section */}
      <section id="lore" className="py-24 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl mb-8 text-green-600">The Pump Life</h2>
              <div className="space-y-6 text-2xl leading-relaxed font-hand">
                <p>
                  Tired of charts that go sideways? Tired of developers who don't know what they are doing? Welcome to the Pump Life.
                </p>
                <p className="font-bold text-green-800 bg-green-200 p-2 inline-block transform -rotate-1">
                  We live for the green candles.
                </p>
                <p>
                  PumpLife isn't just a memecoin, it's a movement. It's about living that life where the market is always pumping, and we are all getting rich together. Leave the jeets in the dust. The only way is up.
                </p>
                <p className="text-3xl text-center md:text-left pt-4 text-green-600 font-bold">
                  Get Rich. Live PumpLife.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                 <div className="absolute inset-0 bg-green-800 translate-x-4 translate-y-4 rounded-2xl"></div>
                 <img 
                  src={ASSETS.LOGO} 
                  alt="PumpLife Vibes" 
                  className="relative rounded-2xl border-4 border-green-800 z-10 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-24 px-4 bg-green-900 text-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-16 text-green-300">How to Live the Pump Life</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              number="01" 
              title="Create Wallet" 
              desc="Download Phantom. You need a place to store your future riches." 
            />
            <StepCard 
              number="02" 
              title="Get SOL" 
              desc="Buy Solana. It's the fuel for the rocket ship we are building." 
            />
            <StepCard 
              number="03" 
              title="Go to Pump.fun" 
              desc="Connect your wallet. This is where the magic happens." 
            />
            <StepCard 
              number="04" 
              title="Swap for $PUMPLIFE" 
              desc="Paste the CA, buy, and hold. Welcome to the Pump Life." 
            />
          </div>

          <div className="mt-16 text-center">
             <a 
              href={LINKS.PUMP_FUN}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-400 text-green-950 text-3xl px-12 py-6 rounded-2xl border-b-8 border-green-700 hover:border-b-4 hover:translate-y-1 transition-all font-bold"
            >
              Buy Now <ExternalLink size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wagmi-dark text-green-400 py-12 px-4 border-t-8 border-green-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <img src={ASSETS.LOGO} alt="logo" className="w-8 h-8 rounded-full"/>
              <span className="text-2xl font-bold">{COPY.TICKER}</span>
            </div>
            <p className="text-green-600/60 text-lg">Living the Pump Life on Solana.</p>
          </div>
          
          <div className="flex gap-6">
            <SocialLink href={LINKS.X} icon={<XIcon size={24} />} label="Twitter / X" />
            <SocialLink href={LINKS.PUMP_FUN} icon={<TrendingUp size={24} />} label="Pump.fun" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-12 text-center text-green-800 text-sm font-sans opacity-60">
          <p>DISCLAIMER: {COPY.TICKER} is a memecoin for entertainment purposes only. Crypto is volatile. Don't risk money you can't afford to lose. But also, stay pumping.</p>
          <p className="mt-2">© {new Date().getFullYear()} PumpLife.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;