import { LayoutTemplate, Database, PenTool, Cloud, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CoursesPage() {
  const courses = [
    {
      icon: <LayoutTemplate className="h-6 w-6 text-red-500" />,
      title: "Full Stack Development",
      description: "Become a full stack web developer",
    },
    {
      icon: <Database className="h-6 w-6 text-red-500" />,
      title: "Data Science & AI",
      description: "Master data and build intelligent systems",
    },
    {
      icon: <PenTool className="h-6 w-6 text-red-500" />,
      title: "UI/UX Design",
      description: "Design beautiful and user-friendly interfaces",
    },
    {
      icon: <Cloud className="h-6 w-6 text-red-500" />,
      title: "Cloud Computing",
      description: "Learn cloud services and deployment",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-red-500" />,
      title: "Cyber Security",
      description: "Protect systems and secure digital assets.",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white font-sans selection:bg-red-500/30 w-full overflow-hidden pt-20">
      <section className="relative py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Our <span className="text-red-500">Courses</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our comprehensive curriculum designed to launch your career in tech.
          </p>
        </div>
      </section>

      <section className="py-10 pb-24 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="bg-[#111] border border-white/5 shadow-none hover:border-red-500/30 transition-colors h-full flex flex-col p-2">
                <CardHeader className="pb-4 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    {course.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-gray-400 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
