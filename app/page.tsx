import OchLogo from '@/components/OchLogo'
import CountdownTimer from '@/components/CountdownTimer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Compact Hero with Countdown */}
      <section className="relative text-white flex flex-col bg-blue-950 w-full">
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

        <div className="container-max relative z-10 py-[20px] sm:py-[34px] md:py-[36px] lg:py-[52px] w-full">
          <div className="text-center max-w-4xl mx-auto px-[calc(0.5rem+4px)] sm:px-[calc(1rem+4px)] md:px-[calc(1.5rem+4px)] lg:px-[calc(2rem+4px)] w-full">
            {/* Logo and Title - Compact */}
            <div className="flex justify-center mb-1 sm:mb-1.5 md:mb-2 px-[4px]">
              <OchLogo size="sm" />
            </div>
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold mb-1 sm:mb-1.5 md:mb-2 px-[4px]">
              Ongozacyberhub (OCH)
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm lg:text-lg text-blue-100 mb-2 sm:mb-2.5 md:mb-4 px-[4px]">
              Africa&apos;s Cyber Talent Platform
            </p>

            {/* Key Value Props - One Row */}
            <div className="grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-2.5 md:mb-4 px-[4px]">
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0.5 text-[10px] sm:text-xs md:text-sm leading-tight">🎯 Not a course</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">A transformation journey</div>
              </div>
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0.5 text-[10px] sm:text-xs md:text-sm leading-tight">👥 Real community</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">Learn with peers across Africa</div>
              </div>
              <div className="bg-white/10 rounded p-1 sm:p-1.5 md:p-2">
                <div className="font-semibold mb-0.5 text-[10px] sm:text-xs md:text-sm leading-tight">🚀 Hands-on experience</div>
                <div className="text-blue-100 text-[9px] sm:text-[10px] md:text-xs leading-tight">Build real cyber skills</div>
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="mb-0 px-[4px]">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-1.5 md:mb-2 text-blue-100 px-[4px]">
                Launching Soon!
              </h2>
              <div className="px-[4px]">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Waitlist */}
      <footer id="waitlist" className="bg-blue-950 text-white py-4 sm:py-6 md:py-8 lg:py-12 w-full">
        <div className="container-max px-2 sm:px-4 md:px-6 lg:px-8 w-full">
          <div className="max-w-md mx-auto text-center w-full">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-1.5 md:mb-2">
              Join the OCH Waitlist
            </h3>
            <p className="text-blue-100 mb-2 sm:mb-2.5 md:mb-4 text-[10px] sm:text-xs md:text-sm">
              Be the first to know when we launch. Get early access to Africa&apos;s premier cybersecurity platform.
            </p>

            <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 md:p-3 mb-2 sm:mb-2.5 md:mb-4">
              <div className="text-left text-[10px] sm:text-xs text-blue-100 mb-1 sm:mb-1.5 md:mb-2">
                <strong>What you&apos;ll get:</strong>
              </div>
              <ul className="text-left text-[9px] sm:text-[10px] md:text-xs text-blue-50 space-y-0.5 sm:space-y-1">
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


