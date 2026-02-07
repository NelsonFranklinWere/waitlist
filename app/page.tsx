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

        <div className="container-max flex-1 flex flex-col justify-center relative z-10 py-2 sm:py-4">
          <div className="text-center max-w-4xl mx-auto px-2 sm:px-4">
            {/* Logo and Title - Compact */}
            <div className="flex justify-center mb-1 sm:mb-2 md:mb-4">
              <OchLogo size="sm" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-0.5 sm:mb-1 md:mb-2">
              Ongozacyberhub (OCH)
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-blue-100 mb-2 sm:mb-3 md:mb-6">
              Africa&apos;s Cyber Talent Platform
            </p>

            {/* Key Value Props - Very Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-6 text-xs md:text-sm">
              <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 md:p-3">
                <div className="font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm">🎯 Not a course</div>
                <div className="text-blue-100 text-xs">A transformation journey</div>
              </div>
              <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 md:p-3">
                <div className="font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm">👥 Real community</div>
                <div className="text-blue-100 text-xs">Learn with peers across Africa</div>
              </div>
              <div className="bg-white/10 rounded-lg p-1.5 sm:p-2 md:p-3">
                <div className="font-semibold mb-0.5 sm:mb-1 text-xs sm:text-sm">🚀 Hands-on experience</div>
                <div className="text-blue-100 text-xs">Build real cyber skills</div>
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="mb-2 sm:mb-3 md:mb-6">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-4 text-blue-100">
                Launching Soon!
              </h2>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Waitlist */}
      <footer id="waitlist" className="bg-blue-950 text-white py-2 sm:py-4 md:py-8">
        <div className="container-max px-2 sm:px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 md:mb-4">
              Join the OCH Waitlist
            </h3>
            <p className="text-blue-100 mb-2 sm:mb-3 md:mb-6 text-xs sm:text-sm">
              Be the first to know when we launch. Get early access to Africa&apos;s premier cybersecurity platform.
            </p>

            <div className="bg-white/10 rounded-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-6">
              <div className="text-left text-xs text-blue-100 mb-1 sm:mb-2 md:mb-3">
                <strong>What you&apos;ll get:</strong>
              </div>
              <ul className="text-left text-xs sm:text-sm text-blue-50 space-y-0.5 sm:space-y-1">
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


