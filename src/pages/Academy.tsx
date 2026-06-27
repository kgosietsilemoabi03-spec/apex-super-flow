import React from 'react';
import { 
  GraduationCap, Play, FileText, 
  CheckCircle, Clock, Star,
  BookOpen, Award, Users,
  ChevronRight, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const courses = [
  { 
    title: 'Customer Service Excellence', 
    category: 'Soft Skills', 
    duration: '2.5 Hours', 
    rating: 4.9, 
    students: '12k', 
    progress: 100,
    thumbnail: 'https://images.unsplash.com/photo-1556740734-7f9a2b774159?q=80&w=400&h=250&auto=format&fit=crop'
  },
  { 
    title: 'Defensive Driving Masterclass', 
    category: 'Safety', 
    duration: '4 Hours', 
    rating: 4.8, 
    students: '8k', 
    progress: 45,
    thumbnail: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&h=250&auto=format&fit=crop'
  },
  { 
    title: 'Financial Literacy for Drivers', 
    category: 'Business', 
    duration: '3 Hours', 
    rating: 5.0, 
    students: '5k', 
    progress: 0,
    thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=400&h=250&auto=format&fit=crop'
  },
  { 
    title: 'Basic First Aid & Road Safety', 
    category: 'Emergency', 
    duration: '5 Hours', 
    rating: 4.7, 
    students: '15k', 
    progress: 0,
    thumbnail: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=400&h=250&auto=format&fit=crop'
  },
];

export function AcademyPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">Apex Academy</h1>
          <p className="text-muted-foreground">Certified training to boost your earnings and safety.</p>
        </div>
        <div className="flex gap-4">
           <Card className="bg-primary/10 border-none px-4 py-2">
             <div className="flex items-center gap-2">
               <Award className="text-primary" />
               <div className="text-xs">
                 <p className="font-bold">4 Certificates</p>
                 <p className="text-muted-foreground text-[10px] uppercase">Earned</p>
               </div>
             </div>
           </Card>
           <Card className="bg-primary/10 border-none px-4 py-2">
             <div className="flex items-center gap-2">
               <GraduationCap className="text-primary" />
               <div className="text-xs">
                 <p className="font-bold">Gold Level</p>
                 <p className="text-muted-foreground text-[10px] uppercase">Qualification</p>
               </div>
             </div>
           </Card>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
        <Input placeholder="Search for courses (e.g. business skills, road safety...)" className="pl-10 h-12 rounded-xl" />
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-bold">Continue Learning</h2>
            {courses.filter(c => c.progress > 0 && c.progress < 100).map((course, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-32 relative">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <Play fill="currentColor" size={16} />
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <Badge className="mb-1 text-[10px]">{course.category}</Badge>
                      <h3 className="font-bold">{course.title}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{course.progress}% Complete</span>
                        <span>{course.duration} remaining</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Popular Courses</h2>
              <Button variant="ghost" className="text-primary">View All <ChevronRight size={16} /></Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {courses.filter(c => c.progress === 0).map((course, idx) => (
                <Card key={idx} className="overflow-hidden group cursor-pointer hover:border-primary transition-all">
                  <div className="h-40 relative">
                    <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-bold">{course.duration}</div>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest">{course.category}</Badge>
                      <h3 className="font-bold mt-1 group-hover:text-primary transition-colors">{course.title}</h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                       <div className="flex items-center gap-1">
                         <Star className="text-yellow-500 fill-yellow-500" size={14} />
                         <span>{course.rating}</span>
                       </div>
                       <div className="flex items-center gap-1">
                         <Users size={14} />
                         <span>{course.students}</span>
                       </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
           <Card className="bg-slate-900 text-white border-none">
             <CardContent className="p-6 space-y-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-black">Driver Certification</h3>
                  <p className="text-slate-400 text-sm mt-2">Become an Apex Verified Professional and earn 15% more on every trip.</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Defensive Driving</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Customer Service</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-600" /> Financial Literacy</li>
                  <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-600" /> First Aid Basics</li>
                </ul>
                <Button className="w-full rounded-full font-bold">Start Certification</Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle className="text-sm uppercase tracking-widest font-black text-muted-foreground">Skill Badges</CardTitle>
             </CardHeader>
             <CardContent className="flex flex-wrap gap-2">
               {['Eco-Driver', 'Top-Rated', 'Night-Owl', 'Long-Haul'].map(badge => (
                 <Badge key={badge} variant="secondary" className="rounded-full px-3">{badge}</Badge>
               ))}
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
