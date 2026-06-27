import React from 'react';
import { 
  Gavel, Truck, Scale, 
  MapPin, Clock, ArrowRight,
  TrendingUp, ShieldCheck, Box,
  DollarSign, FileText, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export function AuctionsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black">Transport Auctions</h1>
          <p className="text-muted-foreground">Post your transport requests and receive competitive quotes from certified providers.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="rounded-full">My Bids</Button>
           <Button className="rounded-full bg-primary text-primary-foreground font-bold">Post New Load</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
         {/* Filters Sidebar */}
         <div className="lg:col-span-1 space-y-6">
            <Card>
               <CardHeader>
                  <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Filter Auctions</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase">Origin Country</label>
                     <Input placeholder="Search countries..." className="bg-accent/50 border-none" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase">Cargo Type</label>
                     <div className="grid grid-cols-1 gap-2">
                        {['Dry Van', 'Refrigerated', 'Flatbed', 'Container', 'Hazmat'].map(type => (
                           <div key={type} className="flex items-center gap-2 text-sm">
                              <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                              <span>{type}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="space-y-2 pt-4 border-t">
                     <label className="text-xs font-bold uppercase">Min. Budget</label>
                     <Input type="number" placeholder="$0" className="bg-accent/50 border-none" />
                  </div>
                  <Button className="w-full rounded-full">Apply Filters</Button>
               </CardContent>
            </Card>

            <Card className="bg-amber-50 border-amber-200">
               <CardContent className="p-4 flex gap-3">
                  <TrendingUp className="text-amber-600 shrink-0" size={20} />
                  <div className="text-xs">
                     <p className="font-bold text-amber-900 uppercase tracking-widest">Market Trend</p>
                     <p className="text-amber-800 mt-1">Rates for Gaborone ➔ Johannesburg routes are up 15% this week due to high demand.</p>
                  </div>
               </CardContent>
            </Card>
         </div>

         {/* Auction List */}
         <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
               <h2 className="text-xl font-bold flex items-center gap-2"><Gavel className="text-primary" /> Live Auctions (12)</h2>
               <div className="text-xs text-muted-foreground">Sorted by: <span className="font-bold text-primary cursor-pointer">Ending Soonest</span></div>
            </div>

            {[
              { id: 'AUC-881', route: 'Gaborone ➔ Maun', cargo: 'Furniture & Household', bids: 12, current: '$1,200', ends: '2h 15m', status: 'Active' },
              { id: 'AUC-880', route: 'Johannesburg ➔ Lusaka', cargo: 'Industrial Parts', bids: 5, current: '$3,450', ends: '4h 45m', status: 'Active' },
              { id: 'AUC-879', route: 'Francistown ➔ Bulawayo', cargo: 'Fresh Produce', bids: 8, current: '$850', ends: '1h 10m', status: 'Active' },
              { id: 'AUC-878', route: 'Walvis Bay ➔ Jwaneng', cargo: 'Mining Spare Parts', bids: 3, current: '$4,100', ends: '6h 30m', status: 'Active' },
              { id: 'AUC-877', route: 'Cape Town ➔ Windhoek', cargo: 'General Retail', bids: 15, current: '$2,800', ends: '12h 00m', status: 'Active' },
            ].map((auction, idx) => (
              <Card key={idx} className="group hover:border-primary transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6 space-y-4">
                       <div className="flex justify-between items-start">
                          <div className="space-y-1">
                             <h3 className="text-lg font-black group-hover:text-primary transition-colors">{auction.route}</h3>
                             <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{auction.id} • {auction.cargo}</p>
                          </div>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">{auction.status}</Badge>
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                          <div>
                             <p className="text-muted-foreground uppercase mb-1">Total Bids</p>
                             <p className="font-bold text-sm">{auction.bids}</p>
                          </div>
                          <div>
                             <p className="text-muted-foreground uppercase mb-1">Ends In</p>
                             <p className="font-bold text-sm text-red-500">{auction.ends}</p>
                          </div>
                          <div>
                             <p className="text-muted-foreground uppercase mb-1">Load Type</p>
                             <p className="font-bold text-sm">LTL (Partial)</p>
                          </div>
                          <div>
                             <p className="text-muted-foreground uppercase mb-1">Insurance</p>
                             <p className="font-bold text-sm text-green-600">Included</p>
                          </div>
                       </div>
                    </div>
                    <div className="w-full md:w-56 bg-accent/30 p-6 flex flex-col justify-between items-center text-center gap-4">
                       <div>
                          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter">Current Best Quote</p>
                          <p className="text-3xl font-black text-slate-900">{auction.current}</p>
                       </div>
                       <Button className="w-full rounded-full font-bold">Submit Quote</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="ghost" className="w-full py-8 text-muted-foreground font-bold uppercase tracking-widest hover:text-primary">Load More Auctions</Button>
         </div>
      </div>
    </div>
  );
}
