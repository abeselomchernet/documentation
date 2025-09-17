"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { commandGroups } from '@/config/commands';
import { Bot, File, User } from 'lucide-react';

export function CoPilot() {
  const [selectedCommand, setSelectedCommand] = useState("venture-assess");
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Welcome, Country Architect. Select a function and provide your directive.' }
  ]);

  const handleSendCommand = () => {
    if (!inputText.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', content: inputText },
      // Placeholder for AI response
      { role: 'ai', content: `Executing command '${selectedCommand}'... (Backend logic pending)` }
    ];
    setMessages(newMessages);
    setInputText("");
  };

  return (
    <Card className="h-[calc(100vh-8rem)] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Co-Pilot</CardTitle>
        <Select value={selectedCommand} onValueChange={setSelectedCommand}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a function..." />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(commandGroups).map(([group, commands]) => (
              <SelectGroup key={group}>
                <SelectLabel>{group}</SelectLabel>
                {commands.map(cmd => (
                  <SelectItem key={cmd.id} value={cmd.id}>{cmd.label}</SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden">
        <ScrollArea className="flex-1 pr-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'ai' && <Bot className="h-8 w-8 text-primary" />}
                <div className={`rounded-lg p-3 max-w-[80%] ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
                {msg.role === 'user' && <User className="h-8 w-8" />}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex w-full items-center space-x-2">
          <Textarea
            placeholder="Enter your directive..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendCommand();
              }
            }}
            className="min-h-[60px]"
          />
          <Button onClick={handleSendCommand}>Send</Button>
          <Button variant="outline" size="icon"><File className="h-4 w-4" /><span className="sr-only">Attach File</span></Button>
        </div>
      </CardContent>
    </Card>
  );
}
