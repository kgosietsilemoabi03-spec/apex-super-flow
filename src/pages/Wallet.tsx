import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ArrowDownLeft, Plus, 
  CreditCard, Send, History, 
  Gift, Percent, UserPlus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useWallet } from '@/hooks/use-wallet';
import { toast } from 'sonner';

export function WalletPage() {
  const { balance, loyaltyPoints, transactions, addTransaction } = useWallet();
  const [showAddMoney, setShowAddMoney] = useState(false);

  const handleDeposit = () => {
    addTransaction('deposit', 100, 'Top up via Bank Transfer');
    toast.success('Funds added successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Balance Card */}
        <Card className="flex-1 bg-primary text-primary-foreground overflow-hidden relative border-none shadow-xl">
          <CardContent className="p-8 space-y-8 relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-primary-foreground/80 font-medium">Apex Wallet Balance</p>
                <h2 className="text-5xl font-black mt-1">${balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <CreditCard size={24} />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="secondary" className="flex-1 rounded-full font-bold h-12" onClick={handleDeposit}>
                <Plus className="mr-2" size={20} /> Add Money
              </Button>
              <Button variant="outline" className="flex-1 rounded-full font-bold h-12 bg-white/10 border-white/20 hover:bg-white/20">
                <Send className="mr-2" size={20} /> Transfer
              </Button>
            </div>
          </CardContent>
          {/* Decorative circles */}
          <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-[-40px] left-[-20px] w-60 h-60 bg-white/5 rounded-full" />
        </Card>

        {/* Loyalty Points Card */}
        <Card className="md:w-72 bg-card border-2 border-primary/20 overflow-hidden">
          <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center space-y-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
              <Gift size={32} />
            </div>
            <div>
              <p className="text-muted-foreground font-medium">Loyalty Points</p>
              <h3 className="text-3xl font-bold">{loyaltyPoints}</h3>
            </div>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 uppercase tracking-widest text-[10px] font-bold">
              Convert to Credits
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="transactions">History</TabsTrigger>
          <TabsTrigger value="referrals">Referrals</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold">Recent Transactions</CardTitle>
              <Button variant="ghost" size="sm">View All <History className="ml-2" size={14} /></Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tx.amount > 0 ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {tx.amount > 0 ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{tx.description}</p>
                        <p className="text-xs text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-slate-900'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referrals">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
              <CardContent className="p-8 space-y-4">
                <UserPlus size={40} />
                <h3 className="text-2xl font-bold">Refer a Friend</h3>
                <p className="text-white/80">Invite friends to Apex and earn $10 credit when they take their first trip.</p>
                <div className="bg-white/20 p-3 rounded-lg flex justify-between items-center border border-white/30">
                  <span className="font-mono font-bold tracking-widest">APEX-X7Y2</span>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 font-bold uppercase text-[10px]">Copy</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col justify-center p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="font-bold text-lg">Your Referrals</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Successful Referrals</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pending</span>
                  <span className="font-bold">4</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Earned</span>
                  <span className="text-green-600 font-bold">$120.00</span>
                </div>
              </div>
              <Button className="w-full rounded-full">Share Link</Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rewards">
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Bronze', points: '0+', active: false, color: 'bg-orange-100 text-orange-700' },
                { title: 'Silver', points: '1000+', active: false, color: 'bg-slate-200 text-slate-700' },
                { title: 'Gold', points: '2500+', active: true, color: 'bg-amber-100 text-amber-700 border-2 border-amber-400' },
                { title: 'Platinum', points: '5000+', active: false, color: 'bg-blue-100 text-blue-700' },
              ].map((tier) => (
                <div key={tier.title} className={`p-4 rounded-xl flex flex-col items-center text-center gap-2 ${tier.color}`}>
                  <span className="text-xs font-black uppercase tracking-widest">{tier.title}</span>
                  <span className="font-bold text-lg">{tier.points}</span>
                  {tier.active && <Badge className="bg-amber-600 text-[8px]">ACTIVE</Badge>}
                </div>
              ))}
            </div>

            <Card>
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Percent className="text-primary" /> Current Benefits (Gold Tier)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between items-center py-2 border-b">
                    <span>Priority Ride Allocation</span>
                    <Badge variant="secondary">Active</Badge>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span>Lower Platform Fees (12%)</span>
                    <Badge variant="secondary">Active</Badge>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span>VIP Customer Support</span>
                    <Badge variant="secondary">Active</Badge>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b">
                    <span>Birthday Credits ($25)</span>
                    <Badge variant="secondary">Active</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
