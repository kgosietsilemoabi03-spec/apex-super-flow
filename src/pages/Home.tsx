import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, Truck, Package, ShoppingCart, 
  Wallet, TrendingUp, ShieldCheck, 
  ChevronRight, Star, Clock, MapPin 
} from 'lucide-react';
import { Sparkles, Zap, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const services = [
  { icon: Car, label: 'Taxi & Rides', color: 'bg-yellow-500', href: '#' },
  { icon: Truck, label: 'Freight', color: 'bg-blue-600', href: '/freight' },
  { icon: Package, label: 'Marketplace', color: 'bg-green-600', href: '/marketplace' },
  { icon: ShoppingCart, label: 'Rentals', color: 'bg-purple-600', href: '/rental' },
  { icon: Wallet, label: 'Financing', color: 'bg-amber-600', href: '/financing' },
  { icon: TrendingUp, label: 'Auctions', color: 'bg-red-600', href: '/auctions' },
];

export function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 md:pb-8">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/22b6903e-6232-405c-bc21-6a2401cedb33/super-app-hub-15bc5e28-1782493607162.webp" 
          alt="Apex Mobility Super App" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent flex flex-col justify-center p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-primary text-primary-foreground border-none">Africa's Mobility Super App</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              One App,<br />All Your Mobility.
            </h1>
            <p className="text-gray-300 max-w-md mb-8 text-lg">
              Taxi, Freight, Delivery, Financing, and more. Experience the future of African transport today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8">Book a Ride</Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20">Explore Services</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <Button variant="ghost" className="text-primary">View All <ChevronRight size={16} /></Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={service.href}>
                <Card className="hover:border-primary transition-colors cursor-pointer group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                      <service.icon size={24} />
                    </div>
                    <span className="font-semibold text-sm">{service.label}</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Wallet Banner */}
        <section className="bg-primary/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold">Apex Wallet</h3>
            <p className="text-muted-foreground">Store funds, pay for bookings, and earn cashback on every transaction. Fast, secure, and rewarding.</p>
            <Link to="/wallet">
              <Button className="rounded-full">Manage Wallet</Button>
            </Link>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
             <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
             <Wallet size={80} className="absolute inset-0 m-auto text-primary" />
          </div>
        </section>

        {/* Driver Rewards */}
        <section className="bg-secondary/30 rounded-2xl p-6 md:p-8 border flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-bold">Driver Rewards</h3>
            </div>
            <p className="text-muted-foreground">You're currently in the <span className="text-primary font-bold">Gold Tier</span>. Only 500 more points to reach Platinum!</p>
            <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[75%]" />
            </div>
          </div>
          <Button variant="outline" className="mt-6 rounded-full w-fit">View Benefits</Button>
        </section>
      </div>

      {/* Smart Dispatch Simulation */}
      <section className="bg-slate-50 border rounded-3xl p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <Sparkles size={18} />
              <span>Smart Dispatch AI</span>
            </div>
            <h3 className="text-3xl font-black">AI-Powered Routing</h3>
            <p className="text-muted-foreground text-sm">Our neural network optimizes driver allocation and traffic-aware routing in real-time. Experience 30% faster pickups and dynamic pricing that rewards efficiency.</p>
            <div className="flex flex-wrap gap-4 pt-2">
               <div className="flex items-center gap-2 text-xs font-bold"><Zap size={14} className="text-amber-500" /> Dynamic Pricing</div>
               <div className="flex items-center gap-2 text-xs font-bold"><Navigation size={14} className="text-green-500" /> Traffic-Aware</div>
               <div className="flex items-center gap-2 text-xs font-bold"><MapPin size={14} className="text-blue-500" /> Nearest Match</div>
            </div>
          </div>
          <Card className="w-full md:w-80 bg-white shadow-xl border-none">
            <CardContent className="p-6 space-y-4">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Live Demand Prediction</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-bold"><span>Gaborone West</span> <span className="text-red-500">High Demand</span></div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-red-500 h-full w-[90%]" /></div>
                <div className="flex justify-between text-sm font-bold"><span>Main Mall</span> <span className="text-green-500">Normal</span></div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden"><div className="bg-green-500 h-full w-[40%]" /></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="bg-slate-900 text-white rounded-2xl p-8 overflow-hidden relative">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-red-500">
              <ShieldCheck />
              <span className="font-bold uppercase tracking-widest text-sm">Emergency Center</span>
            </div>
            <h3 className="text-3xl font-extrabold">Your Safety is Our Priority</h3>
            <p className="text-slate-400 max-w-lg">
              Every trip is tracked. Share your live location, use the SOS button, and access 24/7 support in just one tap.
            </p>
            <Link to="/safety">
              <Button variant="destructive" className="rounded-full px-8 h-12">SOS Panic Button</Button>
            </Link>
          </div>
          <div className="flex gap-4">
             <Card className="bg-white/5 border-white/10 text-white w-40">
               <CardContent className="p-4 flex flex-col items-center gap-2">
                 <Clock className="text-blue-400" />
                 <span className="text-xs text-center font-medium">24/7 Support</span>
               </CardContent>
             </Card>
             <Card className="bg-white/5 border-white/10 text-white w-40">
               <CardContent className="p-4 flex flex-col items-center gap-2">
                 <MapPin className="text-green-400" />
                 <span className="text-xs text-center font-medium">Live Tracking</span>
               </CardContent>
             </Card>
          </div>
        </div>
        <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-0" />
      </section>
    </div>
  );
}
