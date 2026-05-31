import {
  Building2,
  Cloud,
  Database,
  LayoutTemplate,
  PenTool,
  PercentCircle,
  ShieldCheck,
  Users,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-red-500 mb-2" strokeWidth={1.5} />,
      value: '150+',
      label: 'Expert Trainers',
    },
    {
      icon: <UsersRound className="h-8 w-8 text-red-500 mb-2" strokeWidth={1.5} />,
      value: '20K+',
      label: 'Students Enrolled',
    },
    {
      icon: <PercentCircle className="h-8 w-8 text-red-500 mb-2" strokeWidth={1.5} />,
      value: '95%',
      label: 'Placement Rate',
    },
    {
      icon: <Building2 className="h-8 w-8 text-red-500 mb-2" strokeWidth={1.5} />,
      value: '100+',
      label: 'Partner Companies',
    },
  ];

  const courses = [
    {
      icon: <LayoutTemplate className="h-6 w-6 text-red-500" />,
      title: 'Full Stack Development',
      description: 'Become a full stack web developer',
    },
    {
      icon: <Database className="h-6 w-6 text-red-500" />,
      title: 'Data Science & AI',
      description: 'Master data and build intelligent systems',
    },
    {
      icon: <PenTool className="h-6 w-6 text-red-500" />,
      title: 'UI/UX Design',
      description: 'Design beautiful and user-friendly interfaces',
    },
    {
      icon: <Cloud className="h-6 w-6 text-red-500" />,
      title: 'Cloud Computing',
      description: 'Learn cloud services and deployment',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-red-500" />,
      title: 'Cyber Security',
      description: 'Protect systems and secure digital assets.',
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute right-0 top-20 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Empowering Minds.
                <br />
                Building <span className="text-red-500">Futures.</span>
              </h1>

              <p className="text-lg text-gray-400 max-w-xl font-normal leading-relaxed">
                DevSphere Academy provides world-class tech education and hands-on training to help
                you build a successful career in tech.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-md px-8 text-base h-12 border-0"
                >
                  Explore Courses &rarr;
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-md px-8 text-base h-12 text-white border-white/20 bg-transparent hover:bg-white/5"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
              {/* Added abstract circles behind student */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-red-500/30 absolute animate-pulse"></div>
                <div
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-red-500/20 absolute animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border border-red-500/10 absolute animate-pulse"
                  style={{ animationDelay: '2s' }}
                ></div>
                <div
                  className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] rounded-full border border-red-500/5 absolute animate-pulse"
                  style={{ animationDelay: '3s' }}
                ></div>

                {/* <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full border-2 border-dashed border-red-500/20 absolute animate-[spin_20s_linear_infinite]"></div>
                <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full border-t-2 border-red-500/40 absolute animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full border-r-2 border-red-500/20 absolute animate-[spin_25s_linear_infinite]"></div> */}

                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-bounce"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full opacity-60 animate-ping"></div>
                <div className="absolute top-1/2 right-10 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse"></div>

                <div
                  className="absolute top-[15%] right-[25%] w-2 h-2 bg-red-400 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.9)] animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                  className="absolute bottom-[20%] left-[15%] w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                ></div>
                <div
                  className="absolute top-[65%] left-[5%] w-2 h-2 bg-red-500 rounded-full opacity-80 animate-ping"
                  style={{ animationDelay: '2s' }}
                ></div>
                <div
                  className="absolute top-[80%] right-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse"
                  style={{ animationDelay: '0.8s' }}
                ></div>
                <div
                  className="absolute top-[30%] left-[10%] w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-bounce"
                  style={{ animationDelay: '1.2s' }}
                ></div>
              </div>
              <Image
                src="/hero-image-3.png"
                alt="Student holding laptop"
                width={450}
                height={550}
                className="object-contain relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-[450px] drop-shadow-[0_0_30px_rgba(239,68,68,0.15)] "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center space-y-1"
                >
                  {stat.icon}
                  <h3 className="text-3xl font-bold text-white mt-2">{stat.value}</h3>
                  <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <h2 className="text-2xl font-bold text-white">Our Popular Courses</h2>
            <Link
              href="#"
              className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors flex items-center"
            >
              View All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-[#111] border border-white/5 shadow-none hover:border-red-500/30 transition-colors h-full flex flex-col"
              >
                <CardHeader className="pb-4 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    {course.icon}
                  </div>
                  <CardTitle className="text-base font-semibold text-white">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm text-gray-400 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#0c0c0c] border-y border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Insights</h2>
              <p className="text-gray-400">Discover new technologies, trends, and career advice.</p>
            </div>
            <Link
              href="#"
              className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors flex items-center"
            >
              View All Posts &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Master Next.js in 2026',
                category: 'Web Development',
                date: 'Oct 24, 2024',
                readTime: '5 min read',
                img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'The Future of AI in Software Engineering',
                category: 'Artificial Intelligence',
                date: 'Oct 20, 2024',
                readTime: '8 min read',
                img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
              },
              {
                title: 'Building Scalable Cloud Architectures',
                category: 'Cloud Computing',
                date: 'Oct 15, 2024',
                readTime: '6 min read',
                img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all hover:-translate-y-1 group flex flex-col"
              >
                <div className="h-52 relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <div className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-auto pt-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Life at DevSphere</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Take a glimpse into our vibrant community, workshops, and events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 rounded-2xl aspect-square md:aspect-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="text-white font-bold text-2xl mb-1">Annual Hackathon</h4>
                <p className="text-gray-300 text-sm">24-hour coding challenge</p>
              </div>
            </div>

            <div className="rounded-2xl aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&q=80"
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="rounded-2xl aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="rounded-2xl aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80"
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="rounded-2xl aspect-square relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
                alt="Gallery"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#1f0a0a] to-[#2a0b0b] border border-red-900/40 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between text-left shadow-2xl shadow-red-900/10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Start Your Journey Today</h2>
              <p className="text-gray-300 max-w-xl text-lg mb-8 md:mb-0">
                Join thousands of learners and build a successful career in tech.
              </p>
            </div>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white rounded-md px-10 text-base font-semibold h-14 shadow-lg shadow-red-900/20 whitespace-nowrap border-0"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-center text-sm font-medium text-gray-400 mb-12">
            Trusted by Top Companies
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-bold tracking-tighter text-white">Google</div>
            <div className="text-2xl font-semibold tracking-tight flex items-center gap-2 text-white">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
              </div>
              Microsoft
            </div>
            <div className="text-2xl font-bold tracking-tight text-white flex items-center">
              amazon
            </div>
            <div className="text-3xl font-bold text-white tracking-widest">IBM</div>
            <div className="text-2xl font-bold text-white tracking-wide">Infosys</div>
            <div className="text-3xl font-bold text-white tracking-wide">tcs</div>
          </div>
        </div>
      </section>
    </div>
  );
}
