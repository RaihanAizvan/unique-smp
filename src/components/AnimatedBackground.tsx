/**
 * AnimatedBackground Component
 * 
 * Creates an attractive animated gradient background with:
 * - Smooth color transitions
 * - Purple/violet theme
 * - Multiple gradient layers for depth
 * - Optimized performance
 */
export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease infinite',
        }}
      />
      
      {/* Purple glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-violet-600/15 rounded-full blur-3xl" 
        style={{
          animation: 'pulse-glow 8s ease-in-out infinite',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Animated mesh gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 20s ease infinite reverse',
        }}
      />
      
      {/* Grain texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}
