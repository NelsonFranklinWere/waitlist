import OchLogo from '@/components/OchLogo'
import CountdownTimer from '@/components/CountdownTimer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden bg-cyber-dark relative flex flex-col">
      {/* Animated Grid Background */}
      <div className="cyber-grid"></div>
      
      {/* Scan Line Effect */}
      <div className="cyber-scan-line"></div>

      {/* Background Image with Cyber Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/ochviewimage.png"
          alt="OCH Background View"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-dark-2 to-cyber-dark-3"></div>
      </div>

      {/* Main Content - Single Viewport Layout */}
      <div className="relative z-10 h-full w-full flex flex-col">
        <div className="flex-1 flex items-start justify-center px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 overflow-y-auto">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
              
              {/* Left Column - Branding & Info */}
              <div className="text-center lg:text-left space-y-2 sm:space-y-3">
                {/* Logo - Big and Visible */}
                <div className="flex justify-center lg:justify-start mb-2 sm:mb-3">
                  <div className="relative">
                    <OchLogo size="xl" />
                    <div className="absolute inset-0 blur-xl opacity-30 bg-cyber-navy-light/50"></div>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold cyber-glow">
                  <span className="text-cyber-navy-light font-mono">Ongozacyberhub</span>
                  <span className="text-cyber-white"> (OCH)</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-cyber-white-dim cyber-glow-white font-mono">
                  &gt; Africa&apos;s Cyber Talent Platform
                </p>

                {/* Tagline */}
                <p className="text-[10px] sm:text-xs md:text-sm text-cyber-white-dim font-mono mt-1 sm:mt-2">
                  To produce mission-ready cyber leaders through real-world simulation, skill mastery, and measurable impact.
                </p>

                {/* Value Props - Compact Grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-1.5 sm:p-2 backdrop-blur-sm">
                    <div className="font-bold text-[10px] sm:text-xs text-cyber-navy-light mb-0.5">🎯</div>
                    <div className="text-[9px] sm:text-[10px] text-cyber-white-dim font-mono">Not a course</div>
                  </div>
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-1.5 sm:p-2 backdrop-blur-sm">
                    <div className="font-bold text-[10px] sm:text-xs text-cyber-navy-light mb-0.5">👥</div>
                    <div className="text-[9px] sm:text-[10px] text-cyber-white-dim font-mono">Real community</div>
                  </div>
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-1.5 sm:p-2 backdrop-blur-sm">
                    <div className="font-bold text-[10px] sm:text-xs text-cyber-navy-light mb-0.5">🚀</div>
                    <div className="text-[9px] sm:text-[10px] text-cyber-white-dim font-mono">Hands-on</div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="mt-3 sm:mt-4">
                  <h2 className="text-xs sm:text-sm md:text-base font-bold text-cyber-navy-light mb-2 font-mono cyber-glow">
                    &gt; Launching Soon!
                  </h2>
                  <CountdownTimer />
                </div>
              </div>

              {/* Right Column - Waitlist Form - Raised Up */}
              <div className="bg-cyber-dark-2/90 border-2 border-cyber-navy/70 rounded-lg p-3 sm:p-4 md:p-6 backdrop-blur-md shadow-2xl -mt-2 sm:-mt-4 lg:-mt-8" style={{ boxShadow: '0 0 40px rgba(30, 58, 138, 0.4)' }}>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-cyber-navy-light mb-1.5 font-mono cyber-glow">
                      Get Early Access
                    </h3>
                    <p className="text-[10px] sm:text-xs text-cyber-white-dim font-mono">
                      Be the first to access Africa&apos;s premier cybersecurity platform
                    </p>
                  </div>

                  <div className="bg-cyber-dark/50 border border-cyber-navy/40 rounded p-2 sm:p-2.5 text-left">
                    <div className="text-[10px] sm:text-xs text-cyber-navy-light font-mono mb-1.5 font-bold">
                      &gt; Benefits:
                    </div>
                    <ul className="text-[9px] sm:text-[10px] text-cyber-white-dim font-mono space-y-0.5">
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-1.5">•</span>
                        <span>Early platform access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-1.5">•</span>
                        <span>Exclusive launch updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-1.5">•</span>
                        <span>Priority Nairobi pilot invites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-1.5">•</span>
                        <span>Community building opportunities</span>
                      </li>
                    </ul>
                  </div>

                  <WaitlistForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Minimal */}
        <footer className="py-1 px-3 sm:px-4 border-t border-cyber-navy/30 flex-shrink-0">
          <div className="text-center">
            <p className="text-[9px] sm:text-[10px] text-cyber-navy-light/70 font-mono">
              &gt; Securing Africa&apos;s Cyber Future
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}


