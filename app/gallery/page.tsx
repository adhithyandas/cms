import Image from "next/image";

export default function GalleryPage() {
  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute left-0 top-20 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Life at <span className="text-red-500">DevSphere</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Take a look at our vibrant community, collaborative workspaces, and exciting events.
          </p>
        </div>
      </section>

      <section className="py-10 pb-24 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="rounded-2xl aspect-square relative overflow-hidden group border border-white/5 hover:border-red-500/30 transition-all cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <Image src={img} alt={`Gallery image ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
