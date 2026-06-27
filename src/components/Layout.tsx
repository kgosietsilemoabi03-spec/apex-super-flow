import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Home, Wallet, ShoppingBag, Truck, Shield, MessageSquare, GraduationCap, Menu, X, Bell, User, Gavel, Bus, Building2, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { FloatingAIAssistant } from '@/components/FloatingAIAssistant';
import { useWallet } from '@/hooks/use-wallet';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Wallet, label: 'Wallet', href: '/wallet' },
  { icon: ShoppingBag, label: 'Market', href: '/marketplace' },
  { icon: Truck, label: 'Freight', href: '/freight' },
  { icon: Shield, label: 'Safety', href: '/safety' },
  { icon: Gavel, label: 'Auctions', href: '/auctions' },
  { icon: Bus, label: 'Buses', href: '/bus-management' },
  { icon: Building2, label: 'Logistics', href: '/logistics' },
  { icon: Car, label: 'Rentals', href: '/rental' },
  { icon: MessageSquare, label: 'Chat', href: '/chat' },
  { icon: GraduationCap, label: 'Academy', href: '/academy' },
];

export function Layout() {
  const { balance } = useWallet();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card sticky top-0 h-screen">
        <div className="p-6 border-b flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">A</div>
          <span className="text-xl font-bold tracking-tight">Apex Mobility</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent text-muted-foreground'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t space-y-4">
          <div className="bg-accent/50 p-3 rounded-lg">
            <p className="text-xs text-muted-foreground font-medium uppercase">Wallet Balance</p>
            <p className="text-lg font-bold">${balance.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <User size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Alex Driver</p>
              <p className="text-xs text-muted-foreground truncate">Gold Partner</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 border-b bg-background sticky top-0 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-6 border-b font-bold text-xl">Apex Mobility</div>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg ${
                      isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        
        <div className="font-bold">Apex Mobility</div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <User size={18} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
        <div className="flex-1 p-4 md:p-8">
          <Outlet />
        </div>

        <FloatingAIAssistant />
        
        {/* Bottom Nav for Mobile */}
        <nav className="md:hidden border-t bg-background flex items-center justify-around p-2 sticky bottom-0 z-50">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `flex flex-col items-center p-2 rounded-lg transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground'
                }`
              }
            >
              <item.icon size={20} />
              <span className="text-[10px] mt-1">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </main>
    </div>
  );
}
