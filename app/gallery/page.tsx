import Image from 'next/image';
import { fetchGallery } from '@/lib/api';

export default async function GalleryPage() {
  const response = await fetchGallery();
  const images: { _id: string; image: string }[] = response.data || [];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute left-0 top-20 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Life at <span className="text-red-500">Zeruqua Labs</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Experience a culture built around growth, innovation, collaboration, real-world
            learning, and continuous evolution.{' '}
          </p>
        </div>
      </section>

      <section className="py-10 pb-20 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((item, i) => (
              <div
                key={item._id || i}
                className="rounded-2xl aspect-square relative overflow-hidden group border border-white/5 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />

                <Image
                  src={item.image}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
