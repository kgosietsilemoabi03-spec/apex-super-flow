import React from 'react';
import { 
  Bus, Users, Calendar, 
  MapPin, QrCode, Ticket, 
  Settings, TrendingUp, BarChart3,
  Clock, CheckCircle2, AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export function BusManagementPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">Bus Operator Management</h1>
          <p className="text-muted-foreground">Fleet, seat inventory, and QR boarding system for inter-city operators.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-full"><QrCode size={18} className="mr-2" /> Scanner Mode</Button>
           <Button className="rounded-full bg-primary text-primary-foreground font-bold">New Route</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
         {[
           { label: 'Total Fleet', value: '18', sub: '2 in maintenance' },
           { label: "Today's Bookings", value: '452', sub: '+12% from yesterday' },
           { label: 'Seat Occupancy', value: '82%', sub: 'Avg. across all routes' },
           { label: 'Revenue Today', value: '$8,240', sub: 'Paid via Wallet' },
         ].map((stat, idx) => (
           <Card key={idx}>
             <CardContent className="p-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{stat.sub}</p>
             </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-6">
            <section className="space-y-4">
               <h2 className="text-xl font-bold flex items-center gap-2"><Bus className="text-primary" /> Active Routes</h2>
               {[
                 { route: 'Gaborone ➔ Francistown', time: '14:00', bus: 'Apex-Elite 04', seats: '48/52', status: 'Boarding' },
                 { route: 'Johannesburg ➔ Gaborone', time: '16:30', bus: 'Apex-Grand 12', seats: '22/60', status: 'Scheduled' },
                 { route: 'Maun ➔ Gaborone', time: '18:00', bus: 'Apex-Sprint 08', seats: '12/32', status: 'Scheduled' },
               ].map((item, idx) => (
                 <Card key={idx} className="hover:border-primary transition-all">
                   <CardContent className="p-6">
                     <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex-1 space-y-1">
                           <div className="flex items-center gap-2">
                              <h3 className="text-lg font-black">{item.route}</h3>
                              <Badge variant={item.status === 'Boarding' ? 'default' : 'secondary'}>{item.status}</Badge>
                           </div>
                           <p className="text-sm text-muted-foreground">{item.bus} • Departure: {item.time}</p>
                        </div>
                        <div className="w-full md:w-48 space-y-2">
                           <div className="flex justify-between text-xs font-bold">
                              <span>Seats Sold</span>
                              <span>{item.seats}</span>
                           </div>
                           <Progress value={parseInt(item.seats.split('/')[0]) / parseInt(item.seats.split('/')[1]) * 100} className="h-2" />
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full shrink-0">Manage Seats</Button>
                     </div>
                   </CardContent>
                 </Card>
               ))}
            </section>

            <section className="space-y-4">
               <h2 className="text-xl font-bold">Revenue Reporting</h2>
               <Card>
                 <CardHeader>
                    <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Earnings Overview</CardTitle>
                 </CardHeader>
                 <CardContent className="h-[250px] flex items-center justify-center bg-accent/20 rounded-xl mx-6 mb-6 border-2 border-dashed">
                    <div className="text-center space-y-2">
                       <BarChart3 className="mx-auto text-muted-foreground" size={40} />
                       <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Interactive Revenue Chart</p>
                    </div>
                 </CardContent>
               </Card>
            </section>
         </div>

         <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-none">
               <CardContent className="p-6 space-y-6 text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl mx-auto flex items-center justify-center">
                     <QrCode size={40} />
                  </div>
                  <div>
                     <h3 className="text-xl font-black">QR Boarding System</h3>
                     <p className="text-primary-foreground/80 text-sm mt-2">Scan passenger tickets instantly for faster boarding and real-time inventory updates.</p>
                  </div>
                  <Button variant="secondary" className="w-full rounded-full font-bold h-12">Launch Scanner</Button>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Maintenance Alerts</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="flex gap-3 p-3 bg-red-50 text-red-700 rounded-xl border border-red-100">
                     <AlertCircle size={18} className="shrink-0 mt-0.5" />
                     <div className="text-xs">
                        <p className="font-bold">Apex-Elite 02</p>
                        <p>Brake service due in 250km</p>
                     </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-amber-50 text-amber-700 rounded-xl border border-amber-100">
                     <AlertCircle size={18} className="shrink-0 mt-0.5" />
                     <div className="text-xs">
                        <p className="font-bold">Apex-Grand 05</p>
                        <p>Oil change due tomorrow</p>
                     </div>
                  </div>
                  <Button variant="ghost" className="w-full text-xs text-primary font-bold uppercase tracking-widest">View Maintenance Log</Button>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Recent Tickets</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y">
                     {[
                       { id: '#TK-9021', name: 'James M.', seat: 'A12', status: 'Paid' },
                       { id: '#TK-9020', name: 'Sarah L.', seat: 'B04', status: 'Paid' },
                       { id: '#TK-9019', name: 'Kabo T.', seat: 'C15', status: 'Cancelled' },
                     ].map((ticket, idx) => (
                       <div key={idx} className="p-3 flex items-center justify-between text-xs">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">{ticket.name[0]}</div>
                             <div>
                                <p className="font-bold">{ticket.name}</p>
                                <p className="text-muted-foreground">{ticket.id} • Seat {ticket.seat}</p>
                             </div>
                          </div>
                          <Badge variant={ticket.status === 'Paid' ? 'outline' : 'destructive'} className="text-[8px]">{ticket.status}</Badge>
                       </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
