import { Cloud, Database, LayoutTemplate, PenTool, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
}

export default async function Courses() {
  const courses: Course[] = [
    {
      _id: '1',
      title: 'Full Stack Development',
      description: 'Become a full stack web developer.',
      price: 99,
    },
    {
      _id: '2',
      title: 'Data Science & AI',
      description: 'Master data and build intelligent systems.',
      price: 129,
    },
    {
      _id: '3',
      title: 'UI/UX Design',
      description: 'Design beautiful and user-friendly interfaces.',
      price: 79,
    },
    {
      _id: '4',
      title: 'Cloud Computing',
      description: 'Learn cloud services and deployment.',
      price: 109,
    },
    {
      _id: '5',
      title: 'Cyber Security',
      description: 'Protect systems and secure digital assets.',
      price: 149,
    },
  ];

  const getIcon = (title: string) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('data')) return <Database className="h-6 w-6 text-red-500" />;
    if (titleLower.includes('design')) return <PenTool className="h-6 w-6 text-red-500" />;
    if (titleLower.includes('cloud')) return <Cloud className="h-6 w-6 text-red-500" />;
    if (titleLower.includes('security')) return <ShieldCheck className="h-6 w-6 text-red-500" />;
    return <LayoutTemplate className="h-6 w-6 text-red-500" />;
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[30vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Our <span className="text-red-500">Courses</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore industry-focused programs designed to build real-world skills and launch your
            career in technology.{' '}
          </p>
        </div>
      </section>

      <section className="py-10 pb-10 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card
                key={course._id || index}
                className="bg-[#111] border border-white/5 shadow-none h-full flex flex-col p-2"
              >
                <CardHeader className="pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    {getIcon(course.title)}
                  </div>

                  <div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {course.title}
                    </CardTitle>

                    <CardDescription className="text-gray-400 mt-2 line-clamp-2">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
                  <div className="text-2xl font-bold text-white">${course.price}</div>

                  <button className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors cursor-pointer">
                    Enroll Now →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
