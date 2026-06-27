import React, { useState } from 'react';
import { 
  Package, Search, ShoppingBag, 
  MapPin, Clock, Shield, 
  ChevronRight, Bike, Truck, 
  Car, Box, Utensils, Hammer 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const categories = [
  { icon: Box, label: 'Parcels', color: 'bg-blue-100 text-blue-600' },
  { icon: Utensils, label: 'Groceries', color: 'bg-green-100 text-green-600' },
  { icon: ShoppingBag, label: 'Furniture', color: 'bg-orange-100 text-orange-600' },
  { icon: Hammer, label: 'Building', color: 'bg-slate-100 text-slate-600' },
  { icon: Truck, label: 'Business', color: 'bg-purple-100 text-purple-600' },
  { icon: Bike, label: 'Courier', color: 'bg-red-100 text-red-600' },
];

export function MarketplacePage() {
  const [step, setStep] = useState(1);

  const handleRequest = () => {
    toast.success('Delivery request submitted! Tracking code: APX-9921-KB');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Delivery Request Form */}
        <Card className="flex-1 md:max-w-md h-fit">
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-black">Request Delivery</h2>
              <p className="text-muted-foreground text-sm">Instant or scheduled delivery for anything.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Pickup Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-muted-foreground" size={18} />
                  <Input placeholder="Enter pickup address" className="pl-10 h-12 rounded-xl bg-accent/50 border-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Dropoff Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-primary" size={18} />
                  <Input placeholder="Enter destination" className="pl-10 h-12 rounded-xl bg-accent/50 border-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Item Type</label>
                  <Input placeholder="e.g. Sofa" className="h-12 rounded-xl bg-accent/50 border-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Weight (kg)</label>
                  <Input placeholder="e.g. 50" type="number" className="h-12 rounded-xl bg-accent/50 border-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Delivery Speed</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="h-12 rounded-xl border-primary bg-primary/5 text-primary font-bold">Instant</Button>
                  <Button variant="outline" className="h-12 rounded-xl">Scheduled</Button>
                </div>
              </div>

              <div className="pt-4 border-t flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold">Estimated Cost</p>
                  <p className="text-2xl font-black">$24.50</p>
                </div>
                <Button size="lg" className="rounded-full px-8 h-12 font-bold" onClick={handleRequest}>
                  Request Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marketplace Explorer */}
        <div className="flex-1 space-y-8">
          <section className="space-y-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <ShoppingBag className="text-primary" /> Delivery Categories
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {categories.map((cat, idx) => (
                <Card key={idx} className="hover:border-primary transition-all cursor-pointer">
                  <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${cat.color}`}>
                      <cat.icon size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter">{cat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
             <div className="relative z-10 space-y-4 max-w-sm">
               <Badge className="bg-green-500 text-white border-none uppercase text-[10px] font-black">Feature</Badge>
               <h3 className="text-3xl font-black">Delivery Insurance</h3>
               <p className="text-slate-400 text-sm">Protect your items up to $5,000 against damage or loss for just $1.50 per delivery.</p>
               <Button className="bg-white text-slate-900 hover:bg-white/90 rounded-full font-bold">Learn More</Button>
             </div>
             <Shield size={160} className="absolute right-[-20px] bottom-[-20px] text-white/5 rotate-12" />
          </section>

          <section className="space-y-4">
             <h3 className="text-xl font-bold">Recent Deliveries</h3>
             <Card>
               <CardContent className="p-0">
                 <div className="divide-y">
                   {[
                     { id: '#9921', item: 'Office Chair', status: 'Delivered', time: '2 hours ago', icon: ShoppingBag },
                     { id: '#9918', item: 'Grocery Batch', status: 'In Transit', time: '15 mins left', icon: Utensils },
                     { id: '#9915', item: 'Contract Papers', status: 'Delivered', time: 'Yesterday', icon: Package },
                   ].map((item) => (
                     <div key={item.id} className="p-4 flex items-center justify-between hover:bg-accent/30 transition-colors">
                       <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                           <item.icon size={20} className="text-primary" />
                         </div>
                         <div>
                           <p className="font-bold text-sm">{item.item}</p>
                           <p className="text-xs text-muted-foreground">Order {item.id} • {item.time}</p>
                         </div>
                       </div>
                       <Badge variant={item.status === 'Delivered' ? 'secondary' : 'default'} className="rounded-full">
                         {item.status}
                       </Badge>
                     </div>
                   ))}
                 </div>
               </CardContent>
             </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
