import OchLogo from '@/components/OchLogo'
import CountdownTimer from '@/components/CountdownTimer'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Compact Hero with Countdown */}
      <section className="min-h-screen relative text-white flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ochviewimage.png"
            alt="OCH Background View"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-och-blue/90 to-blue-900/90"></div>
        </div>

        <div className="container-max flex-1 flex flex-col justify-center relative z-10">
          <div className="text-center max-w-4xl mx-auto px-4">
            {/* Logo and Title - Compact */}
            <div className="flex justify-center mb-4">
              <OchLogo size="sm" />
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              Ongozacyberhub (OCH)
            </h1>
            <p className="text-sm md:text-lg text-blue-100 mb-6">
              Africa&apos;s Cyber Talent Platform
            </p>

            {/* Key Value Props - Very Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-xs md:text-sm">
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold mb-1">🎯 Not a course</div>
                <div className="text-blue-100">A transformation journey</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold mb-1">👥 Real community</div>
                <div className="text-blue-100">Learn with peers across Africa</div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="font-semibold mb-1">🚀 Hands-on experience</div>
                <div className="text-blue-100">Build real cyber skills</div>
              </div>
            </div>

            {/* Compact Countdown */}
            <div className="mb-6">
              <h2 className="text-lg md:text-xl font-bold mb-4 text-blue-100">
                Launching Soon!
              </h2>
              <CountdownTimer />
            </div>

            {/* Call to Action - Compact */}
            <div className="mb-4">
              <p className="text-sm text-blue-100 mb-4">
                Join the waitlist to be first when we launch
              </p>
              <a href="#waitlist" className="inline-block bg-white text-och-blue font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Fixed bottom CTA for mobile */}
        <div className="md:hidden bg-white/20 backdrop-blur-sm border-t border-white/20 p-4 relative z-10">
          <div className="text-center">
            <a href="#waitlist" className="inline-block w-full bg-white text-och-blue font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Join the OCH Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Compact Waitlist Section */}
      <section id="waitlist" className="py-8 bg-white">
        <div className="container-max">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Join the OCH Waitlist
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Be the first to know when we launch. Get early access to Africa&apos;s premier cybersecurity platform.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-left text-xs text-gray-600 mb-3">
                <strong>What you&apos;ll get:</strong>
              </div>
              <ul className="text-left text-sm text-gray-700 space-y-1">
                <li>• Early platform access</li>
                <li>• Exclusive launch updates</li>
                <li>• Priority Nairobi pilot invites</li>
                <li>• Community building opportunities</li>
              </ul>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-och-blue text-white">
        <div className="container-max py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1 */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-4">About OCH</h4>
              <p className="text-blue-100 text-sm">
                Transforming university students into cybersecurity professionals and leaders through mentorship, hands-on experience, and real community.
              </p>
            </div>

            {/* Section 2 */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-lg mb-4">Get Started</h4>
              <p className="text-blue-100 text-sm mb-4">
                Join the waitlist to be among the first to access Africa&apos;s premier cybersecurity platform.
              </p>
              <a href="#waitlist" className="inline-block bg-white text-och-blue font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


