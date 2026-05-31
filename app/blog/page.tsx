import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const posts = [
    {
      _id: "1",
      title: "How to Master Next.js in 2026",
      category: "Web Development",
      createdAt: new Date("2024-10-24T00:00:00Z").toISOString(),
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      _id: "2",
      title: "The Future of AI in Software Engineering",
      category: "Artificial Intelligence",
      createdAt: new Date("2024-10-20T00:00:00Z").toISOString(),
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
    },
    {
      _id: "3",
      title: "Building Scalable Cloud Architectures",
      category: "Cloud Computing",
      createdAt: new Date("2024-10-15T00:00:00Z").toISOString(),
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    }
  ];
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Our <span className="text-red-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Insights, tutorials, and news from the DevSphere team.
          </p>
        </div>
      </section>

      <section className="py-10 pb-24 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any, i: number) => (
              <Link href="#" key={post._id || i} className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all hover:-translate-y-1 group flex flex-col cursor-pointer">
                <div className="h-52 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image src={post.img || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">{post.category || "General"}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">{post.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-auto pt-4">
                    <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "Just now"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
