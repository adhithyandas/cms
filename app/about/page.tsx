export default function About() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            About <span className="text-red-500">Us</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover our vision, journey, and the passionate team shaping the future of software
            education at Zeruqua Labs.{' '}
          </p>
        </div>
      </section>

      <section className="py-10 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Zeruqua Labs was founded with a mission to bridge the gap between traditional
              education and real-world industry demands. We believe that anyone with passion and
              dedication should have access to high-quality tech education and career
              opportunities.{' '}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our programs are designed by experienced industry professionals and continuously
              updated to match evolving technologies and market trends. Through hands-on learning,
              practical projects, mentorship, and a strong developer community, we empower aspiring
              developers to build successful careers in the modern tech industry.{' '}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our programs are designed by experienced industry professionals and continuously
              updated to match evolving technologies and market trends. Through hands-on learning,
              practical projects, mentorship, and a strong developer community, we empower aspiring
              developers to build successful careers in the modern tech industry.{' '}
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Zeruqua Labs, we focus on building problem-solving skills, technical confidence,
              and an industry-ready mindset. Our collaborative environment encourages continuous
              learning, innovation, and personal growth. We are committed to helping learners
              transform their potential into meaningful careers in technology.{' '}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
