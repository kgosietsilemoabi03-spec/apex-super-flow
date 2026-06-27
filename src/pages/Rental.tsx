import React from 'react';
import { 
  Car, User, Calendar, 
  MapPin, Star, Shield, 
  ChevronRight, Filter, Search,
  Zap, Info, Clock, Truck, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const vehicles = [
  { name: 'Toyota Corolla 2024', category: 'Economy', price: '$45/day', rating: 4.8, type: 'Self-Drive', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=400&h=250&auto=format&fit=crop' },
  { name: 'Mercedes-Benz E-Class', category: 'Executive', price: '$120/day', rating: 4.9, type: 'Chauffeur', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&h=250&auto=format&fit=crop' },
  { name: 'Range Rover Sport', category: 'Luxury', price: '$250/day', rating: 5.0, type: 'Self-Drive', image: 'https://images.unsplash.com/photo-1563720223185-11003d516905?q=80&w=400&h=250&auto=format&fit=crop' },
  { name: 'Toyota Hiace 14-Seater', category: 'Vans', price: '$85/day', rating: 4.7, type: 'Event Rental', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&h=250&auto=format&fit=crop' },
];

export function RentalPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">Vehicle Rental Marketplace</h1>
          <p className="text-muted-foreground">Rent high-quality vehicles for any occasion — self-drive or with a chauffeur.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-full">Manage My Rentals</Button>
           <Button className="rounded-full bg-primary text-primary-foreground font-bold">List Your Vehicle</Button>
        </div>
      </div>

      <Card className="bg-primary/10 border-none">
        <CardContent className="p-6 md:p-8">
           <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                 <label className="text-xs font-black uppercase tracking-widest">Pickup Location</label>
                 <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-primary" size={18} />
                    <Input placeholder="Gaborone, Botswana" className="pl-10 h-12 rounded-xl bg-background border-none" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-black uppercase tracking-widest">Date Range</label>
                 <div className="relative">
                    <Calendar className="absolute left-3 top-3 text-primary" size={18} />
                    <Input placeholder="Select dates" className="pl-10 h-12 rounded-xl bg-background border-none" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-xs font-black uppercase tracking-widest">Vehicle Type</label>
                 <div className="relative">
                    <Car className="absolute left-3 top-3 text-primary" size={18} />
                    <Input placeholder="All Categories" className="pl-10 h-12 rounded-xl bg-background border-none" />
                 </div>
              </div>
              <div className="flex items-end">
                 <Button className="w-full h-12 rounded-xl font-bold">Search Vehicles</Button>
              </div>
           </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
         {['Economy', 'Executive', 'Luxury', 'Vans', 'Trucks', 'Event Rentals'].map(cat => (
           <Button key={cat} variant="outline" className="rounded-full whitespace-nowrap px-6">{cat}</Button>
         ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {vehicles.map((v, idx) => (
           <Card key={idx} className="overflow-hidden group hover:border-primary transition-all cursor-pointer">
              <div className="h-48 relative">
                 <img src={v.image} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute top-2 right-2">
                    <Badge className="bg-white/90 text-slate-900 border-none">{v.type}</Badge>
                 </div>
              </div>
              <CardContent className="p-4 space-y-4">
                 <div>
                    <div className="flex justify-between items-start mb-1">
                       <h3 className="font-bold group-hover:text-primary transition-colors line-clamp-1">{v.name}</h3>
                       <div className="flex items-center gap-1 text-xs font-bold shrink-0">
                          <Star className="text-yellow-500 fill-yellow-500" size={12} />
                          <span>{v.rating}</span>
                       </div>
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{v.category}</p>
                 </div>
                 
                 <div className="flex justify-between items-center pt-2 border-t">
                    <div className="flex items-baseline gap-1">
                       <span className="text-xl font-black">{v.price.split('/')[0]}</span>
                       <span className="text-[10px] text-muted-foreground uppercase font-bold">/Day</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary font-bold p-0">Book <ChevronRight size={14} /></Button>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
         <Card className="bg-slate-900 text-white overflow-hidden relative">
            <CardContent className="p-8 space-y-4 relative z-10">
               <Zap className="text-primary" size={32} />
               <h3 className="text-2xl font-black">Corporate Rentals</h3>
               <p className="text-slate-400 text-sm">Dedicated fleet for your company employees and events with monthly billing and 24/7 support.</p>
               <Button className="rounded-full bg-white text-slate-900 font-bold">Inquire Now</Button>
            </CardContent>
            <div className="absolute right-[-40px] top-[-40px] w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
         </Card>

         <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8 space-y-4">
               <Shield className="text-primary" size={32} />
               <h3 className="text-2xl font-black">Full Coverage Insurance</h3>
               <p className="text-muted-foreground text-sm">All our rentals include comprehensive insurance, roadside assistance, and GPS tracking as standard.</p>
               <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <CheckCircle2 size={16} /> Zero Deductible Plans Available
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
