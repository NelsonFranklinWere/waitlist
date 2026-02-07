import OchLogo from '@/components/OchLogo'
import CountdownTimer from '@/components/CountdownTimer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Compact Hero with Countdown */}
      <section className="min-h-screen relative text-white flex flex-col bg-blue-950">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/ochviewimage.png"
            alt="OCH Background View"
            className="w-full h-full object-cover opacity-50"
          />
          {/* Dark Navy Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-och-blue/85 to-blue-950/90"></div>
        </div>

        <div className="container-max flex-1 flex flex-col justify-center relative z-10 py-1 sm:py-2 md:py-4">
          <div className="text-center max-w-4xl mx-auto px-1 sm:px-2 md:px-4">
            {/* Logo and Title - Compact */}
            <div className="flex justify-center mb-0.5 sm:mb-1 md:mb-2">
              <OchLogo size="sm" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-0 sm:mb-0.5 md:mb-1">
              Ongozacyberhub (OCH)
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-lg text-blue-100 mb-1 sm:mb-1.5 md:mb-3">
              Africa&apos;s Cyber Talent Platform
            </p>

            {/* Key Value Props - One Row */}
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1 md:gap-2 mb-1 sm:mb-1.5 md:mb-3">
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0 text-[10px] sm:text-xs md:text-sm leading-tight">🎯 Not a course</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">A transformation journey</div>
              </div>
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0 text-[10px] sm:text-xs md:text-sm leading-tight">👥 Real community</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">Learn with peers across Africa</div>
              </div>
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0 text-[10px] sm:text-xs md:text-sm leading-tight">🚀 Hands-on experience</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">Build real cyber skills</div>
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="mb-1 sm:mb-1.5 md:mb-3">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-0.5 sm:mb-1 md:mb-2 text-blue-100">
                Launching Soon!
              </h2>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Waitlist */}
      <footer id="waitlist" className="bg-blue-950 text-white py-1 sm:py-2 md:py-4">
        <div className="container-max px-1 sm:px-2 md:px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-0.5 sm:mb-1 md:mb-2">
              Join the OCH Waitlist
            </h3>
            <p className="text-blue-100 mb-1 sm:mb-1.5 md:mb-3 text-[10px] sm:text-xs md:text-sm">
              Be the first to know when we launch. Get early access to Africa&apos;s premier cybersecurity platform.
            </p>

            <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 md:p-3 mb-1 sm:mb-1.5 md:mb-3">
              <div className="text-left text-[10px] sm:text-xs text-blue-100 mb-0.5 sm:mb-1 md:mb-1.5">
                <strong>What you&apos;ll get:</strong>
              </div>
              <ul className="text-left text-[9px] sm:text-[10px] md:text-xs text-blue-50 space-y-0 sm:space-y-0.5">
                <li>• Early platform access</li>
                <li>• Exclusive launch updates</li>
                <li>• Priority Nairobi pilot invites</li>
                <li>• Community building opportunities</li>
              </ul>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </footer>
    </div>
  )
}


