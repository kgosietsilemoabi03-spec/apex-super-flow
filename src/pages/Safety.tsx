import React from 'react';
import { 
  Shield, ShieldAlert, Phone, 
  MapPin, UserCheck, Mic, 
  Eye, Share2, Bell, 
  ChevronRight, AlertTriangle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export function SafetyPage() {
  const handleSOS = () => {
    toast.error('SOS SIGNAL SENT! Emergency services and your contacts have been notified.', {
      duration: 10000,
      position: 'top-center'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col items-center text-center space-y-4 pt-4">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 animate-pulse">
          <ShieldAlert size={40} />
        </div>
        <h1 className="text-3xl font-black">Emergency Center</h1>
        <p className="text-muted-foreground max-w-md">Immediate assistance, live trip sharing, and professional verification to keep you safe on every journey.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-red-600 text-white border-none shadow-2xl shadow-red-200">
          <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter">SOS Panic Button</h2>
            <p className="text-white/80 text-sm">Pressing this will instantly share your live location with Apex Security and emergency services.</p>
            <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center p-4 border-4 border-white/30">
               <Button 
                variant="destructive" 
                className="w-full h-full rounded-full bg-white text-red-600 hover:bg-white/90 text-2xl font-black shadow-lg"
                onClick={handleSOS}
              >
                SOS
              </Button>
            </div>
            <p className="text-xs text-white/60 font-medium">STRICTLY FOR EMERGENCIES ONLY</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-lg flex items-center gap-2">
                 <Share2 className="text-primary" size={20} /> Live Trip Sharing
               </CardTitle>
               <CardDescription>Automatically share your trip status with loved ones.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-xl">
                  <div className="text-sm">
                    <p className="font-bold">Family Circle</p>
                    <p className="text-muted-foreground text-xs">3 Contacts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Button variant="outline" className="w-full rounded-full">Add Trusted Contacts</Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader className="pb-2">
               <CardTitle className="text-lg flex items-center gap-2">
                 <Mic className="text-primary" size={20} /> Audio Recording
               </CardTitle>
               <CardDescription>Record audio during your trip for extra security.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-accent/50 rounded-xl">
                  <div className="text-sm">
                    <p className="font-bold">Auto-Record Every Trip</p>
                    <p className="text-muted-foreground text-xs">Stored securely for 24h</p>
                  </div>
                  <Switch />
                </div>
                <p className="text-[10px] text-muted-foreground leading-tight italic"> recordings are encrypted and only accessible by security teams during an active dispute or incident.</p>
             </CardContent>
           </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { icon: UserCheck, label: 'Driver Verification', status: 'Active' },
           { icon: MapPin, label: 'Trip Tracking', status: 'Active' },
           { icon: Phone, label: '24/7 Helpline', status: 'Available' },
           { icon: Eye, label: 'Night Vision Cam', status: 'In Selected Vehicles' },
         ].map((item, idx) => (
           <Card key={idx} className="bg-card text-center hover:border-primary transition-colors">
             <CardContent className="p-4 flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{item.label}</span>
                <Badge variant="secondary" className="text-[8px]">{item.status}</Badge>
             </CardContent>
           </Card>
         ))}
      </div>

      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="p-6 flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0" />
          <div>
            <h4 className="font-bold text-amber-900">Safety Tip</h4>
            <p className="text-sm text-amber-800">Always check the vehicle's license plate and driver's face before entering. Use the "Verify Driver" button to scan the driver's QR code.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
