import React from 'react';
import { 
  Truck, Globe, Ship, 
  MapPin, Anchor, Scale, 
  ArrowRight, Box, ShieldCheck,
  TrendingUp, Users, FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function FreightPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <section className="relative h-[300px] rounded-3xl overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/22b6903e-6232-405c-bc21-6a2401cedb33/freight-logistics-58a9d17f-1782493607792.webp" 
          alt="Apex Freight" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center p-8 md:p-12">
          <Badge className="w-fit mb-4 bg-primary text-primary-foreground border-none">Long Distance & Cross-Border</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Apex Freight</h1>
          <p className="text-gray-300 max-w-xl text-lg">
            Reliable long-distance logistics across Southern Africa. Botswana, South Africa, Namibia, Zambia, and Zimbabwe.
          </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Market Stats & Quick Tools */}
        <div className="space-y-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold">Transport Auction</h3>
              <p className="text-primary-foreground/80 text-sm">Post your transport request and get competitive quotes from hundreds of certified carriers.</p>
              <Button variant="secondary" className="w-full rounded-full font-bold">Post Load Request</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Quick Booking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold">Origin</label>
                <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-xl">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">Gaborone, Botswana</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold">Destination</label>
                <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-xl">
                  <Globe size={16} className="text-primary" />
                  <span className="text-sm">Johannesburg, South Africa</span>
                </div>
              </div>
              <Button className="w-full rounded-full">Search Carriers</Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
             <Card className="bg-slate-50 border-none">
               <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                 <Scale size={24} className="text-blue-600" />
                 <span className="text-[10px] font-black uppercase tracking-tighter">Container</span>
               </CardContent>
             </Card>
             <Card className="bg-slate-50 border-none">
               <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                 <Ship size={24} className="text-green-600" />
                 <span className="text-[10px] font-black uppercase tracking-tighter">Port Logistics</span>
               </CardContent>
             </Card>
          </div>
        </div>

        {/* Tabs for Logistics Portal & Marketplace */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="marketplace" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="marketplace">Freight Marketplace</TabsTrigger>
              <TabsTrigger value="business">Business Portal</TabsTrigger>
            </TabsList>

            <TabsContent value="marketplace" className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Available Loads</h3>
                <Button variant="ghost" size="sm" className="text-primary">Refresh <TrendingUp className="ml-2" size={14} /></Button>
              </div>

              {[
                { route: 'Gaborone ➔ Lusaka', cargo: 'Mining Equipment', weight: '24 Tons', price: '$4,200', date: 'Ready Mar 12' },
                { route: 'Cape Town ➔ Gaborone', cargo: 'Retail Goods', weight: '12 Tons', price: '$1,850', date: 'Ready Mar 14' },
                { route: 'Walvis Bay ➔ Ndola', cargo: 'Container (40ft)', weight: '28 Tons', price: '$5,900', date: 'Ready Mar 15' },
              ].map((load, idx) => (
                <Card key={idx} className="group hover:border-primary transition-all cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-black">{load.route}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Box size={14} /> {load.cargo}</span>
                          <span className="flex items-center gap-1"><Scale size={14} /> {load.weight}</span>
                          <span className="flex items-center gap-1"><ShieldCheck size={14} /> Insured</span>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-2">
                        <span className="text-2xl font-black text-primary">{load.price}</span>
                        <Button size="sm" className="rounded-full group-hover:bg-primary group-hover:text-primary-foreground">Place Bid</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="business" className="space-y-6">
               <div className="grid md:grid-cols-2 gap-4">
                 <Card className="bg-accent/50 border-none">
                   <CardContent className="p-6 space-y-4">
                     <Users size={32} className="text-primary" />
                     <h4 className="font-black text-lg">Fleet Management</h4>
                     <p className="text-sm text-muted-foreground">Track all your trucks in real-time, monitor driver performance, and manage fuel costs.</p>
                     <Button variant="outline" className="w-full rounded-full">Open Fleet Dashboard</Button>
                   </CardContent>
                 </Card>
                 <Card className="bg-accent/50 border-none">
                   <CardContent className="p-6 space-y-4">
                     <FileText size={32} className="text-primary" />
                     <h4 className="font-black text-lg">Bulk Invoicing</h4>
                     <p className="text-sm text-muted-foreground">Manage monthly invoices for all your employee transportation and freight contracts.</p>
                     <Button variant="outline" className="w-full rounded-full">Manage Invoices</Button>
                   </CardContent>
                 </Card>
               </div>

               <Card>
                 <CardHeader>
                    <CardTitle className="text-lg">Recent Fleet Activity</CardTitle>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="divide-y">
                      {[
                        { truck: 'Truck-001', location: 'Entering Botswana Border', status: 'On Schedule', time: '5 mins ago' },
                        { truck: 'Truck-012', location: 'Johannesburg Depot', status: 'Loading', time: '1 hour ago' },
                        { truck: 'Truck-007', location: 'Lusaka Outer Ring Road', status: 'Delayed (Traffic)', time: '2 hours ago' },
                      ].map((activity, idx) => (
                        <div key={idx} className="p-4 flex items-center justify-between text-sm">
                          <div className="space-y-1">
                            <p className="font-bold">{activity.truck}</p>
                            <p className="text-muted-foreground">{activity.location}</p>
                          </div>
                          <div className="text-right">
                             <p className={`font-medium ${activity.status.includes('Delayed') ? 'text-red-500' : 'text-green-600'}`}>{activity.status}</p>
                             <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                 </CardContent>
               </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
