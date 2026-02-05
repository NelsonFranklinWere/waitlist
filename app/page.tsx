import OchLogo from '@/components/OchLogo'
import Section from '@/components/Section'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <OchLogo size="sm" />
              <span className="font-semibold text-lg text-gray-900">OCH</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#what-is-och" className="text-gray-600 hover:text-och-blue transition-colors">
                What is OCH
              </a>
              <a href="#journey" className="text-gray-600 hover:text-och-blue transition-colors">
                Journey
              </a>
              <a href="#nairobi-pilot" className="text-gray-600 hover:text-och-blue transition-colors">
                Nairobi Pilot
              </a>
              <a href="#waitlist" className="btn-secondary text-sm">
                Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-och-blue to-blue-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <OchLogo size="lg" className="mb-4" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ongozacyberhub (OCH)
            </h1>

            <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
              Africa&apos;s Cyber Talent Platform for University Students
            </h2>

            <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-3xl mx-auto">
              Transforming university students into cybersecurity professionals and leaders through mentorship, hands-on experience, and real community.
            </p>

            <div className="mb-8">
              <p className="text-lg font-semibold mb-4">Not a course.</p>
              <p className="text-lg font-semibold mb-4">Not just certifications.</p>
              <p className="text-lg font-semibold mb-8">A transformation journey.</p>
            </div>

            <p className="text-lg mb-12">
              Join the waitlist to be first when the platform goes live.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist" className="btn-primary text-lg px-8 py-4">
                Join the Waitlist
              </a>
              <a href="#waitlist" className="btn-secondary text-lg px-8 py-4">
                Get Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is OCH Section */}
      <Section id="what-is-och" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is Ongozacyberhub?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ongozacyberhub (OCH) is a cybersecurity talent development platform built for African university students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              We help students:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">•</span>
                <span className="text-gray-700">Discover their cybersecurity strengths</span>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">•</span>
                <span className="text-gray-700">Build real, practical skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">•</span>
                <span className="text-gray-700">Grow through structured phases</span>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">•</span>
                <span className="text-gray-700">Join a strong cyber community</span>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">•</span>
                <span className="text-gray-700">Become industry-ready cyber leaders</span>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-lg text-gray-700">
              OCH is designed to profile, develop, and track your growth — from beginner to creator — all in one ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Why OCH Exists Section */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Ongozacyberhub?
          </h2>
          <p className="text-xl text-gray-600">
            Most students struggle with:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">The Problems</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Not knowing where to start in cybersecurity</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Learning theory without real practice</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">No mentorship or guidance</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">No clear path from student → professional</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-xl">•</span>
                <span className="text-gray-700">Working alone without community</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">OCH fixes this.</h3>
            <p className="text-lg text-gray-700 mb-6">We provide:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">A clear transformation path</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Mentorship from experienced cyber professionals</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Practical labs, challenges & competitions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">Leadership development</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">•</span>
                <span className="text-gray-700">A strong student cyber community across Africa</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* OCH Philosophy Section */}
      <Section background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How OCH Thinks About Learning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-och-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Progressive Transformation</h3>
            <p className="text-gray-600">
              Learning is a journey. Students grow through clear phases, at their own pace, with defined milestones.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-och-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
            <p className="text-gray-600">
              Cybersecurity is a team sport. You learn, grow, and win together.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-och-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Practical Excellence</h3>
            <p className="text-gray-600">
              Every skill is reinforced through hands-on labs, challenges, and real-world scenarios.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-semibold">
            We build cyber leaders — not just technicians.
          </p>
        </div>
      </Section>

      {/* Transformation Journey Section */}
      <Section id="journey" background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey at OCH
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every student starts at Phase 0 and grows through 6 transformation phases:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 0 – Entry</h3>
            <p className="text-gray-600">Awareness, belonging, and community onboarding</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 1 – Foundation</h3>
            <p className="text-gray-600">Core cybersecurity knowledge and alignment</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 2 – Discovery</h3>
            <p className="text-gray-600">Explore specializations and build confidence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 3 – Competence</h3>
            <p className="text-gray-600">Deep practice and skill mastery</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 4 – Contribution</h3>
            <p className="text-gray-600">Leadership, mentorship, and influence</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-och-blue mb-2">Phase 5 – Creation</h3>
            <p className="text-gray-600">Building solutions, vision, and legacy</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Each phase comes with:
          </p>
          <ul className="inline-block text-left space-y-2">
            <li className="flex items-center">
              <span className="text-och-blue mr-3">•</span>
              <span className="text-gray-700">Structured activities</span>
            </li>
            <li className="flex items-center">
              <span className="text-och-blue mr-3">•</span>
              <span className="text-gray-700">Community circles</span>
            </li>
            <li className="flex items-center">
              <span className="text-och-blue mr-3">•</span>
              <span className="text-gray-700">Resources and challenges</span>
            </li>
            <li className="flex items-center">
              <span className="text-och-blue mr-3">•</span>
              <span className="text-gray-700">Clear progress tracking</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Nairobi Pilot Section */}
      <Section id="nairobi-pilot" background="white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Starting in Nairobi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re launching our first pilot in Nairobi, one of Africa&apos;s strongest tech ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Nairobi pilot focuses on:</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">🏛️</span>
                <div>
                  <strong>University Partnerships</strong>
                  <p className="text-gray-600 mt-1">Working with leading universities to support cybersecurity talent development.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">🤝</span>
                <div>
                  <strong>Community Building</strong>
                  <p className="text-gray-600 mt-1">Meetups, events, competitions, and collaborations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">🏆</span>
                <div>
                  <strong>Competitions & Recognition</strong>
                  <p className="text-gray-600 mt-1">Skill-based challenges that open doors to opportunities.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-och-blue mr-3 text-xl">🚀</span>
                <div>
                  <strong>Innovation Hub</strong>
                  <p className="text-gray-600 mt-1">Building and testing cybersecurity solutions for Africa.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Who OCH is for:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">University students interested in cybersecurity</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Beginners who don&apos;t know where to start</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Students already learning cyber but need structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Those who want mentorship, growth, and leadership</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">✓</span>
                <span className="text-gray-700">Anyone serious about becoming world-class in cyber</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-6 font-semibold">
              If you&apos;re willing to learn, practice, and grow, OCH is for you.
            </p>
          </div>
        </div>
      </Section>

      {/* Waitlist Section */}
      <Section id="waitlist" background="blue">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the OCH Waitlist
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ongozacyberhub is currently under development.
          </p>

          <p className="text-lg text-blue-50 mb-12 max-w-2xl mx-auto">
            Join the waitlist to:
          </p>

          <ul className="text-left inline-block space-y-3 mb-12">
            <li className="flex items-center text-blue-50">
              <span className="text-white mr-3">•</span>
              <span>Get early access when we launch</span>
            </li>
            <li className="flex items-center text-blue-50">
              <span className="text-white mr-3">•</span>
              <span>Receive updates on the Nairobi pilot</span>
            </li>
            <li className="flex items-center text-blue-50">
              <span className="text-white mr-3">•</span>
              <span>Be invited to events and competitions</span>
            </li>
            <li className="flex items-center text-blue-50">
              <span className="text-white mr-3">•</span>
              <span>Get guidance on what to do next</span>
            </li>
          </ul>

          <p className="text-lg text-blue-50 mb-8">
            Enter your email and be part of Africa&apos;s next generation of cyber leaders.
          </p>

          <WaitlistForm />
        </div>
      </Section>

      {/* What Happens Next Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What happens after you join?
          </h2>

          <ol className="text-left inline-block space-y-4 mb-8">
            <li className="flex items-start">
              <span className="bg-och-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
              <span className="text-gray-700 text-lg">You receive a confirmation email</span>
            </li>
            <li className="flex items-start">
              <span className="bg-och-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
              <span className="text-gray-700 text-lg">We share updates as the platform develops</span>
            </li>
            <li className="flex items-start">
              <span className="bg-och-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
              <span className="text-gray-700 text-lg">You get notified when OCH goes live</span>
            </li>
            <li className="flex items-start">
              <span className="bg-och-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
              <span className="text-gray-700 text-lg">You receive clear instructions on next steps</span>
            </li>
          </ol>

          <p className="text-lg text-gray-600 font-semibold">
            No spam. Only meaningful updates.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container-max section-padding">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <OchLogo size="md" />
              <span className="font-semibold text-xl">OCH</span>
            </div>

            <p className="text-xl mb-8">Building Africa&apos;s cybersecurity leaders</p>
            <p className="text-gray-400 mb-8">Powered by Cres Dynamics</p>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors">
                Updates
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


