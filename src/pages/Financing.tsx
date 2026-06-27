import React from 'react';
import { 
  Banknote, Award, CheckCircle2, 
  ArrowRight, FileCheck, Landmark, 
  CarFront, Bus, Truck,
  HelpCircle, Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export function FinancingPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      <section className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/22b6903e-6232-405c-bc21-6a2401cedb33/apex-wallet---financing-14ec575f-1782493605767.webp" 
          alt="Driver Financing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
          <Badge className="w-fit mb-4 bg-amber-500 text-white border-none">Apex Driver Financing</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">Own Your Journey</h1>
          <p className="text-gray-200 max-w-lg text-lg">
            Vehicle lease-to-own programs for drivers and transport entrepreneurs. Fast approval based on your performance.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Credit Score & Eligibility */}
        <div className="md:col-span-1 space-y-6">
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-sm font-black uppercase tracking-widest text-muted-foreground">Your Credit Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 flex flex-col items-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-accent stroke-current" strokeWidth="10" fill="transparent" r="40" cx="50" cy="50" />
                  <circle className="text-primary stroke-current" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black">745</span>
                  <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Excellent</span>
                </div>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">Your score is based on ride completion rate, customer ratings, and platform loyalty.</p>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none">High Loan Eligibility</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Why Apex Financing?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { icon: CheckCircle2, text: 'Lower interest sharing partnerships' },
                { icon: CheckCircle2, text: 'Referral-based commissions' },
                { icon: CheckCircle2, text: 'No traditional bank history needed' },
                { icon: CheckCircle2, text: 'Performance-linked repayments' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <item.icon className="text-primary" size={18} />
                  <span>{item.text}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Financing Programs */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black">Financing Programs</h2>
            <Button variant="ghost" className="text-primary">Help Center <HelpCircle className="ml-2" size={16} /></Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: CarFront, title: 'Taxi Lease-to-Own', duration: '36 Months', rate: '12% APR', desc: 'Own your sedan or hatchback while you drive for Apex.' },
              { icon: Truck, title: 'Truck Financing', duration: '48-60 Months', rate: '10.5% APR', desc: 'Expand your freight business with new or used trucks.' },
              { icon: Bus, title: 'Bus Operator Fund', duration: '36 Months', rate: '11% APR', desc: 'For inter-city bus operators looking to upgrade their fleet.' },
              { icon: Landmark, title: 'Partner Bank Loan', duration: 'Flexible', rate: 'Varies', desc: 'Direct financing from our partner banks with Apex guarantee.' },
            ].map((program, idx) => (
              <Card key={idx} className="hover:border-primary transition-all group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform">
                    <program.icon size={24} />
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <CardDescription>{program.desc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase text-muted-foreground">
                    <span>{program.duration}</span>
                    <span>{program.rate}</span>
                  </div>
                  <Button className="w-full rounded-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-slate-900 text-white overflow-hidden relative">
            <CardContent className="p-8 space-y-4 relative z-10">
              <h3 className="text-2xl font-black">Marketplace Commission</h3>
              <p className="text-slate-400 max-w-md">Earn up to 2% commission on every vehicle sold through the Apex Marketplace referral program.</p>
              <Button className="bg-primary text-primary-foreground font-bold rounded-full">Become an Agent</Button>
            </CardContent>
            <Banknote size={150} className="absolute right-[-20px] bottom-[-20px] text-white/5 -rotate-12" />
          </Card>
        </div>
      </div>
    </div>
  );
}
