import React, { useState, useRef, useEffect } from "react";
import { AppLayout } from "@/components/AppLayout";
import { Sparkles, Plus, History, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChatMessage,
  BudgetTable,
  RiskList
} from "@/components/AIAssistant/ChatMessage";
import { ChatInput } from "@/components/AIAssistant/ChatInput";
import { QuickActionChips } from "@/components/AIAssistant/QuickActionChips";
import { ContextPanel } from "@/components/AIAssistant/ContextPanel";

type Message = { role: "user" | "assistant"; content: React.ReactNode; timestamp?: string };

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user" as const,
      content: "What's the current budget variance for Meridian Quarter?",
      timestamp: "10:30 AM"
    },
    {
      role: "assistant" as const,
      content: (
        <div className="space-y-3">
          <p>
            The current budget variance for <strong>Meridian Quarter</strong> is showing a healthy position.
            The total approved budget is <strong>£52.4M</strong>, with actual expenditure to date at <strong>£32.1M</strong>.
          </p>
          <BudgetTable />
          <p>
            Overall, the variance is within the acceptable range (+3.2% against forecast). No immediate corrective action is required at this stage.
          </p>
        </div>
      ),
      timestamp: "10:30 AM"
    },
    {
      role: "user" as const,
      content: "Which projects are most at risk this quarter?",
      timestamp: "10:32 AM"
    },
    {
      role: "assistant" as const,
      content: (
        <div className="space-y-3">
          <p>
            Based on the latest project reports and financial tracking, the following projects have the highest risk scores for Q4:
          </p>
          <RiskList />
          <p>
            Material cost inflation continues to be the primary driver for high-risk flags across the portfolio.
          </p>
        </div>
      ),
      timestamp: "10:32 AM"
    },
    {
      role: "user" as const,
      content: "Summarise the Harbour Point funding position",
      timestamp: "10:35 AM"
    },
    {
      role: "assistant" as const,
      content: (
        <div className="space-y-3">
          <p>
            The funding position for <strong>Harbour Point</strong> is currently 85% secured. Here is the summary:
          </p>
          <div className="rounded-md border bg-muted/20 p-3 text-xs space-y-2">
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Total Facility</span>
              <span className="font-semibold">£24.5M</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Total Drawn</span>
              <span className="font-semibold">£18.2M</span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span className="text-muted-foreground">Available Headroom</span>
              <span className="font-semibold">£6.3M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Next Drawdown</span>
              <span className="font-semibold">Nov 15 (Est. £1.2M)</span>
            </div>
          </div>
          <p>
            <strong>Next Action:</strong> Ensure Valuation Report #8 is submitted by Nov 5th to meet the next drawdown deadline.
          </p>
        </div>
      ),
      timestamp: "10:35 AM"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (content: string) => {
    const newMessage = {
      role: "user" as const,
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        role: "assistant" as const,
        content: `I've received your query about "${content}". I'm analyzing the project data and will provide a detailed summary shortly.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 2000);
  };

  return (
    <AppLayout>
      <div className="flex flex-col h-screen max-h-screen overflow-hidden">
        {/* PAGE HEADER */}
        <header className="flex items-center justify-between border-b bg-card px-6 py-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm border border-primary/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none mb-1">AI Project Assistant</h1>
              <p className="text-xs text-muted-foreground">Ask questions about your projects, budgets, and financials</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="outline" className="h-7 bg-muted/50 border-border text-[10px] font-medium gap-1.5 px-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-status-green animate-pulse" />
              Kaya AI v2.1
            </Badge>
            <Button size="sm" className="h-9 gap-2 shadow-sm">
              <Plus className="h-4 w-4" />
              New Conversation
            </Button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* LEFT — CHAT INTERFACE */}
          <div className="flex flex-col flex-1 bg-background overflow-hidden">
            {/* TOP BAR / TABS */}
            <div className="flex items-center justify-between px-6 py-2 border-b bg-card/50 backdrop-blur-sm shrink-0">
              <Tabs defaultValue="current" className="w-auto">
                <TabsList className="bg-muted/50 h-8 p-1">
                  <TabsTrigger value="current" className="text-xs px-4 h-6">Current</TabsTrigger>
                  <TabsTrigger value="analysis" className="text-xs px-4 h-6">Deep Analysis</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="ghost" size="sm" className="h-8 text-xs gap-1.5 text-muted-foreground hover:text-foreground">
                <History className="h-3.5 w-3.5" />
                History
              </Button>
            </div>

            {/* CHAT MESSAGES AREA */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
            >
              <div className="max-w-3xl mx-auto">
                {messages.map((msg, i) => (
                  <ChatMessage
                    key={i}
                    role={msg.role}
                    content={msg.content}
                    timestamp={msg.timestamp}
                  />
                ))}
                {isTyping && (
                  <ChatMessage
                    role="assistant"
                    content=""
                    isTyping
                  />
                )}
              </div>
            </div>

            {/* BOTTOM INPUT BAR */}
            <div className="p-4 bg-gradient-to-t from-background via-background to-transparent shrink-0">
              <div className="max-w-3xl mx-auto">
                <QuickActionChips />
                <ChatInput onSend={handleSendMessage} />
              </div>
            </div>
          </div>

          {/* RIGHT CONTEXT PANEL */}
          <aside className="w-80 border-l shrink-0 hidden lg:block">
            <ContextPanel />
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}