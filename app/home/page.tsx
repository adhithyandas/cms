'use client';

import { Building2, PercentCircle, Users, UsersRound } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { fetchCourses, fetchPosts, fetchGallery } from '@/lib/api';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger);

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

  const [courses, setCourses] = useState<
    { _id: string; title: string; description: string; price: number }[]
  >([]);
  const [posts, setPosts] = useState<
    { _id: string; title: string; description?: string; thumbnail: string; createdAt: string }[]
  >([]);
  const [gallery, setGallery] = useState<{ _id: string; image: string }[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [courseRes, postRes, galleryRes] = await Promise.all([
          fetchCourses(),
          fetchPosts(),
          fetchGallery(),
        ]);
        if (courseRes.data) setCourses(courseRes.data);
        if (postRes.data) setPosts(postRes.data.slice(0, 3)); // Only take top 3 for home page
        if (galleryRes.data) setGallery(galleryRes.data.slice(0, 5)); // Only take top 5 for home page
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    loadData();
  }, []);

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Stats
      gsap.from('.stat-card', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Courses
      gsap.from('.course-wrapper', {
        scrollTrigger: {
          trigger: '.courses-section',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Blog
      gsap.from('.blog-wrapper', {
        scrollTrigger: {
          trigger: '.blog-section',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Gallery
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top 85%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-28 lg:pt-40 flex items-center overflow-visible z-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
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
                Zeruqua Labs delivers industry-focused tech education and hands-on learning
                experiences designed to help aspiring developers thrive in the modern tech
                world.{' '}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white rounded-md px-8 text-base h-12 border-0 cursor-pointer w-full sm:w-auto"
                  >
                    Explore Courses &rarr;
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-md px-8 text-base h-12 text-white border-white/20 bg-transparent hover:bg-white/10 hover:text-white cursor-pointer w-full sm:w-auto transition-all"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
              {/* Added abstract circles behind student */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-50 h-50 sm:w-75 sm:h-75 rounded-full border border-red-500/30 absolute animate-pulse"></div>

                <div
                  className="w-75 h-75 sm:w-100 sm:h-100 rounded-full border border-red-500/20 absolute animate-pulse"
                  style={{ animationDelay: '1s' }}
                ></div>

                <div
                  className="w-100 h-100 sm:w-125 sm:h-125 rounded-full border border-red-500/10 absolute animate-pulse"
                  style={{ animationDelay: '2s' }}
                ></div>

                <div
                  className="w-125 h-125 sm:w-150 sm:h-150 rounded-full border border-red-500/5 absolute animate-pulse"
                  style={{ animationDelay: '3s' }}
                ></div>

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
                className="object-contain relative z-10 w-[80%] sm:w-[70%] lg:w-full max-w-112.5 drop-shadow-[0_0_30px_rgba(239,68,68,0.15)] "
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-8 pt-0 relative z-20 stats-section -mt-10 lg:-mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card flex flex-col items-center justify-center text-center space-y-1"
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
      <section className="py-20 courses-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <h2 className="text-2xl font-bold text-white">Our Popular Courses</h2>
            <Link
              href="/courses"
              className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors flex items-center"
            >
              View All Courses &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {courses.map((course, index) => (
              <div key={index} className="course-wrapper h-full">
                <Card className="bg-[#111] border border-white/5 shadow-none h-full flex flex-col group hover:-translate-y-2 hover:border-red-500/30 hover:shadow-[0_8px_30px_rgb(239,68,68,0.15)] transition-all duration-500">
                  <CardHeader className="pb-4 space-y-4">
                    <CardTitle className="text-base font-semibold text-white">
                      {course.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="grow">
                    <CardDescription className="text-sm text-gray-400 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-[#0c0c0c] border-y border-white/5 blog-section">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Latest Insights</h2>
              <p className="text-gray-400">Discover new technologies, trends, and career advice.</p>
            </div>

            <Link
              href="/blog"
              className="text-red-500 text-sm font-medium hover:text-red-400 transition-colors flex items-center"
            >
              View All Posts &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <div key={post._id || i} className="blog-wrapper h-full">
                <div className="bg-[#111] h-full rounded-2xl overflow-hidden border border-white/5 group flex flex-col hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_8px_30px_rgb(239,68,68,0.1)] hover:border-red-500/20 cursor-pointer">
                  <div className="h-52 relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-linear-to-t from-[#111] via-black/40 to-transparent group-hover:via-black/20 transition-colors z-10" />
                    <Image
                      src={
                        post.thumbnail ||
                        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
                      }
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="text-red-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      General
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>

                    <div className="flex items-center text-gray-500 text-sm mt-auto pt-4">
                      <span>
                        {post.createdAt
                          ? new Date(post.createdAt).toLocaleDateString()
                          : 'Just now'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 relative overflow-hidden gallery-section">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Life at Zeruqua Labs</h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Take a glimpse into our vibrant community, workshops, and events.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gallery.length > 0 ? (
              <div className="gallery-item col-span-2 row-span-2 rounded-2xl aspect-square md:aspect-auto relative overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
                <Image
                  src={gallery[0].image}
                  alt="Gallery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-6 left-6 z-20">
                  <h4 className="text-white font-bold text-2xl mb-1">Featured Event</h4>
                  <p className="text-gray-300 text-sm">Zeruqua Labs Highlight</p>
                </div>
              </div>
            ) : null}

            {gallery.slice(1).map((item, i) => (
              <div
                key={item._id || i}
                className="gallery-item rounded-2xl aspect-square relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10" />
                <Image
                  src={item.image}
                  alt={`Gallery ${i + 2}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-linear-to-r from-[#1f0a0a] to-[#2a0b0b] border border-red-900/40 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between text-left shadow-2xl shadow-red-900/10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">Start Your Journey Today</h2>

              <p className="text-gray-300 max-w-xl text-lg mb-8 md:mb-0">
                Join thousands of learners and build a successful career in tech.
              </p>
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white rounded-md px-10 text-base font-semibold h-14 shadow-lg shadow-red-900/20 whitespace-nowrap border-0 cursor-pointer"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="py-16 mt-8">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="text-center text-sm font-medium text-gray-400 mb-12">
            Trusted by Top Companies
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            <div className="text-2xl font-bold tracking-tighter text-white opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              Google
            </div>

            <div className="text-2xl font-semibold tracking-tight flex items-center gap-2 text-white opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
                <div className="w-3 h-3 bg-white"></div>
              </div>
              Microsoft
            </div>

            <div className="text-2xl font-bold tracking-tight text-white flex items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              amazon
            </div>

            <div className="text-3xl font-bold text-white tracking-widest opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              IBM
            </div>

            <div className="text-2xl font-bold text-white tracking-wide opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              Infosys
            </div>

            <div className="text-3xl font-bold text-white tracking-wide opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
              tcs
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
