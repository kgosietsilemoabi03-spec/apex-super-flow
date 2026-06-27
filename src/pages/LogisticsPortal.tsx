import React from 'react';
import { 
  BarChart3, Users, Truck, 
  Calendar, FileText, Map,
  Clock, CheckCircle2, Search,
  ArrowRight, LayoutDashboard, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function LogisticsPortalPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">Business Logistics Portal</h1>
          <p className="text-muted-foreground">Manage your fleet, employees, and bulk deliveries in one place.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-full"><Settings size={18} className="mr-2" /> Portal Settings</Button>
           <Button className="rounded-full bg-primary text-primary-foreground font-bold">New Bulk Request</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { label: 'Active Fleet', value: '42', icon: Truck, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: "Today's Deliveries", value: '128', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
          { label: 'Total Employees', value: '850', icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
          { label: 'Monthly Spend', value: '$12,450', icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-100' },
        ].map((stat, idx) => (
          <Card key={idx}>
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Fleet Tracking & Route Planning</CardTitle>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">38 Online</Badge>
              <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">4 Delayed</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="aspect-video bg-accent/50 rounded-2xl relative overflow-hidden flex items-center justify-center border-2 border-dashed">
                <div className="text-center space-y-2">
                  <Map className="mx-auto text-muted-foreground" size={40} />
                  <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Live Interactive Map</p>
                  <Button variant="outline" size="sm" className="rounded-full">Launch Full Screen Map</Button>
                </div>
                {/* Simulated markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg animate-bounce" />
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg" />
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
             </div>

             <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2"><Clock size={18} /> Upcoming Scheduled Pickups</h3>
                <div className="divide-y border rounded-xl overflow-hidden">
                   {[
                     { route: 'Gaborone ➔ Maun', time: '14:30 Today', items: '24 Pallets', truck: 'TR-992' },
                     { route: 'Francistown ➔ Lobatse', time: '08:00 Tomorrow', items: 'Medical Supplies', truck: 'TR-451' },
                     { route: 'Palapye ➔ Jwaneng', time: '11:15 Tomorrow', items: 'Retail Stock', truck: 'TR-118' },
                   ].map((item, idx) => (
                     <div key={idx} className="p-4 flex items-center justify-between hover:bg-accent/30">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                             <LayoutDashboard size={20} />
                           </div>
                           <div>
                              <p className="text-sm font-bold">{item.route}</p>
                              <p className="text-xs text-muted-foreground">{item.items} • {item.truck}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-sm font-bold">{item.time}</p>
                           <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">Details <ArrowRight size={14} className="ml-1" /></Button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
           <Card>
             <CardHeader>
                <CardTitle>Employee Transport</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Manage monthly shuttle services for your staff across the city.</p>
                <div className="space-y-2">
                   <div className="flex justify-between text-xs font-bold uppercase">
                     <span>Total Routes</span>
                     <span>12</span>
                   </div>
                   <div className="flex justify-between text-xs font-bold uppercase">
                     <span>Pickup Points</span>
                     <span>45</span>
                   </div>
                </div>
                <Button className="w-full rounded-full">Optimize Routes</Button>
                <Button variant="outline" className="w-full rounded-full">Download Usage Report</Button>
             </CardContent>
           </Card>

           <Card className="bg-slate-900 text-white border-none">
             <CardContent className="p-6 space-y-4">
                <FileText className="text-primary" size={32} />
                <h3 className="text-xl font-black">Monthly Invoicing</h3>
                <p className="text-slate-400 text-sm">Automated billing for all logistics services. Currently on net-30 terms.</p>
                <div className="pt-4 border-t border-white/10">
                   <p className="text-xs text-slate-500 uppercase font-bold mb-1">Unbilled Amount</p>
                   <p className="text-2xl font-black text-white">$4,821.50</p>
                </div>
                <Button className="w-full bg-white text-slate-900 font-bold rounded-full">View Invoices</Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
