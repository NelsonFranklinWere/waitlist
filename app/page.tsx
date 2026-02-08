import OchLogo from '@/components/OchLogo'
import CountdownTimer from '@/components/CountdownTimer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="h-screen w-full overflow-hidden bg-cyber-dark relative">
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
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column - Branding & Info */}
              <div className="text-center lg:text-left space-y-4 sm:space-y-6">
                {/* Logo - Big and Visible */}
                <div className="flex justify-center lg:justify-start mb-6">
                  <div className="relative">
                    <OchLogo size="2xl" />
                    <div className="absolute inset-0 blur-xl opacity-30 bg-cyber-navy-light/50"></div>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold cyber-glow">
                  <span className="text-cyber-navy-light font-mono">Ongozacyberhub</span>
                  <span className="text-cyber-white"> (OCH)</span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-cyber-white-dim cyber-glow-white font-mono">
                  &gt; Africa&apos;s Cyber Talent Platform
                </p>

                {/* Value Props - Compact Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-6">
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="font-bold text-xs sm:text-sm text-cyber-navy-light mb-1">🎯</div>
                    <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono">Not a course</div>
                  </div>
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="font-bold text-xs sm:text-sm text-cyber-navy-light mb-1">👥</div>
                    <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono">Real community</div>
                  </div>
                  <div className="bg-cyber-dark-2/80 border border-cyber-navy/50 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                    <div className="font-bold text-xs sm:text-sm text-cyber-navy-light mb-1">🚀</div>
                    <div className="text-[10px] sm:text-xs text-cyber-white-dim font-mono">Hands-on</div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="mt-6">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-cyber-navy-light mb-3 font-mono cyber-glow">
                    &gt; Launching Soon!
                  </h2>
                  <CountdownTimer />
                </div>
              </div>

              {/* Right Column - Waitlist Form */}
              <div className="bg-cyber-dark-2/90 border-2 border-cyber-navy/70 rounded-lg p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl" style={{ boxShadow: '0 0 40px rgba(30, 58, 138, 0.4)' }}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-cyber-navy-light mb-2 font-mono cyber-glow">
                      Get Early Access
                    </h3>
                    <p className="text-xs sm:text-sm text-cyber-white-dim font-mono">
                      Be the first to access Africa&apos;s premier cybersecurity platform
                    </p>
                  </div>

                  <div className="bg-cyber-dark/50 border border-cyber-navy/40 rounded p-3 text-left">
                    <div className="text-xs text-cyber-navy-light font-mono mb-2 font-bold">
                      &gt; Benefits:
                    </div>
                    <ul className="text-[10px] sm:text-xs text-cyber-white-dim font-mono space-y-1">
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-2">•</span>
                        <span>Early platform access</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-2">•</span>
                        <span>Exclusive launch updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-2">•</span>
                        <span>Priority Nairobi pilot invites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-cyber-navy-light mr-2">•</span>
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
        <footer className="py-2 px-4 border-t border-cyber-navy/30">
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-cyber-navy-light/70 font-mono">
              &gt; Securing Africa&apos;s Cyber Future
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}


