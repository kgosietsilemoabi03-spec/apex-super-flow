import React, { useState } from 'react';
import { 
  Search, Phone, Video, 
  MoreVertical, Send, Paperclip, 
  Image, Mic, Smile, 
  CheckCheck, Globe, User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const contacts = [
  { id: 1, name: 'David (Driver)', lastMsg: 'I have arrived at the pickup point.', time: '2m ago', active: true, unread: 1, avatar: 'D' },
  { id: 2, name: 'Apex Support', lastMsg: 'Your refund has been processed.', time: '1h ago', active: false, unread: 0, avatar: 'AS' },
  { id: 3, name: 'Sarah (Dispatcher)', lastMsg: 'Route updated to avoid traffic.', time: 'Yesterday', active: false, unread: 0, avatar: 'S' },
];

export function ChatPage() {
  const [msg, setMsg] = useState('');

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-120px)] flex flex-col md:flex-row gap-6">
      {/* Contact List */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-muted-foreground" size={18} />
          <Input placeholder="Search chats..." className="pl-10 h-11 rounded-xl" />
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
          {contacts.map((contact) => (
            <div 
              key={contact.id} 
              className={`p-4 rounded-2xl cursor-pointer transition-all flex items-center gap-3 ${
                contact.active ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
              }`}
            >
              <Avatar className="h-12 w-12 border-2 border-background/20">
                <AvatarFallback className="bg-secondary text-secondary-foreground font-bold">{contact.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <p className="font-bold truncate text-sm">{contact.name}</p>
                  <span className={`text-[10px] ${contact.active ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{contact.time}</span>
                </div>
                <p className={`text-xs truncate ${contact.active ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{contact.lastMsg}</p>
              </div>
              {contact.unread > 0 && !contact.active && (
                <Badge className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                  {contact.unread}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-card rounded-3xl border flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b flex items-center justify-between bg-accent/20">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground font-bold">D</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-bold text-sm">David (Driver)</h3>
              <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest">Online • On Trip</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full"><Phone size={18} /></Button>
            <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10 rounded-full"><Video size={18} /></Button>
            <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical size={18} /></Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex flex-col gap-1 items-center mb-4">
             <Badge variant="outline" className="text-[10px] uppercase font-bold text-muted-foreground border-none">Today</Badge>
          </div>

          {/* Incoming */}
          <div className="flex gap-3 max-w-[80%]">
            <Avatar className="h-8 w-8 mt-1">
              <AvatarFallback className="text-[10px]">D</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="bg-accent p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                Hello! I'm David, your Apex driver. I've arrived at the Gaborone Main Mall pickup point.
              </div>
              <p className="text-[10px] text-muted-foreground px-1">10:45 AM</p>
            </div>
          </div>

          <div className="flex gap-3 max-w-[80%]">
            <Avatar className="h-8 w-8 mt-1 opacity-0">
              <AvatarFallback className="text-[10px]">D</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="bg-accent p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed">
                I'm in a white Toyota Corolla, plate B 123 ABC.
              </div>
              <p className="text-[10px] text-muted-foreground px-1">10:45 AM</p>
            </div>
          </div>

          {/* Outgoing */}
          <div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto text-right">
            <div className="space-y-1">
              <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-none text-sm leading-relaxed text-left">
                Great! I'm coming out now. Just a second.
              </div>
              <div className="flex items-center justify-end gap-1 px-1">
                <p className="text-[10px] text-muted-foreground">10:46 AM</p>
                <CheckCheck size={12} className="text-blue-500" />
              </div>
            </div>
          </div>

          {/* System Message */}
          <div className="flex justify-center">
             <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[10px] font-bold flex items-center gap-2">
               <Globe size={12} /> TRANSLATION ACTIVE: ENG ➔ TSW
             </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-accent/10 border-t">
          <div className="flex items-center gap-2 bg-background border rounded-2xl p-2 px-4 focus-within:ring-2 ring-primary/20 transition-all">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Paperclip size={20} /></Button>
            <Input 
              placeholder="Type your message..." 
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className="border-none bg-transparent focus-visible:ring-0 px-0 h-10" 
            />
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Smile size={20} /></Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Image size={20} /></Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Mic size={20} /></Button>
              <Button size="icon" className="rounded-xl ml-2 bg-primary text-primary-foreground h-9 w-9">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
