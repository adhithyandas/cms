export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            About <span className="text-red-500">Us</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover our mission, our story, and the passionate team driving the future of tech education at DevSphere Academy.
          </p>
        </div>
      </section>
      
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    DevSphere Academy was founded with a singular vision: to bridge the gap between academic learning and industry requirements. We believe that everyone deserves access to world-class tech education, regardless of their background.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Our curriculum is designed by industry experts and constantly updated to reflect the latest trends and technologies. With a focus on hands-on learning, real-world projects, and personalized mentorship, we ensure our students are well-equipped to tackle the challenges of the modern tech landscape.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
}
