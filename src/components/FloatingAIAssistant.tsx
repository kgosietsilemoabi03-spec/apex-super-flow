import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Zap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I am your Apex AI Assistant. How can I help you today? I can provide fare estimates, route suggestions, or help with your bookings.' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Simulated AI response
    setTimeout(() => {
      let response = "I'm analyzing your request...";
      if (userMsg.toLowerCase().includes('fare')) {
        response = "Based on current demand and traffic, a ride from Gaborone Main Mall to the Airport is approximately $18.50 for Apex Go.";
      } else if (userMsg.toLowerCase().includes('freight')) {
        response = "I see you're interested in freight. Our next available truck to Johannesburg leaves in 4 hours. Would you like me to reserve a spot?";
      } else if (userMsg.toLowerCase().includes('wallet')) {
        response = "Your current Apex Wallet balance is $1,250.50. You have 450 loyalty points ready for conversion.";
      } else {
        response = "That's a great question! I've logged your interest and one of our human dispatchers will be notified if you need further assistance.";
      }
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    }, 1000);
  };

  return (
    <>
      <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className={`h-14 w-14 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'rotate-90 bg-slate-900' : 'bg-primary'}`}
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-40 right-6 md:bottom-24 md:right-8 w-[350px] md:w-[400px] z-50"
          >
            <Card className="border-none shadow-2xl overflow-hidden rounded-3xl">
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Bot size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-bold">Apex AI Assistant</CardTitle>
                      <p className="text-[10px] text-primary-foreground/80 font-medium uppercase tracking-widest">Active & Learning</p>
                    </div>
                  </div>
                  <Sparkles size={18} className="text-white/40" />
                </div>
              </CardHeader>
              <CardContent className="p-0 flex flex-col h-[450px]">
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                   {messages.map((msg, idx) => (
                     <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                          msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground rounded-tr-none' 
                            : 'bg-white text-slate-900 border shadow-sm rounded-tl-none'
                        }`}>
                           {msg.text}
                        </div>
                     </div>
                   ))}
                </div>
                
                <div className="p-2 bg-slate-100 flex flex-wrap gap-2">
                   {[
                     { label: 'Fare Estimate', icon: Zap },
                     { label: 'Freight Info', icon: MapPin },
                     { label: 'Support', icon: MessageSquare }
                   ].map(chip => (
                     <Badge 
                      key={chip.label} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-white transition-colors py-1 px-3 border-none flex items-center gap-1"
                      onClick={() => setInput(chip.label)}
                    >
                       <chip.icon size={10} /> {chip.label}
                     </Badge>
                   ))}
                </div>

                <div className="p-4 bg-white border-t flex items-center gap-2">
                  <Input 
                    placeholder="Ask me anything..." 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="border-none bg-slate-100 rounded-xl focus-visible:ring-1 ring-primary/20"
                  />
                  <Button size="icon" className="rounded-xl shrink-0" onClick={handleSend}>
                    <Send size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
