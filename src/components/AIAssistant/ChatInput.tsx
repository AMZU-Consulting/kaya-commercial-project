import React from "react";
import { Paperclip, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onSend(value);
      setValue("");
    }
  };

  return (
    <div className="border-t bg-card p-4">
      <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 text-muted-foreground hover:text-foreground"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Input
          placeholder="Ask anything about your projects..."
          className="flex-1 pr-24 focus-visible:ring-primary"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <div className="absolute right-2 flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button 
            type="submit" 
            size="icon" 
            className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={!value.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
      <div className="mt-2 text-center">
        <p className="text-[10px] text-muted-foreground">
          AI responses are generated from your project data. Always verify critical financial decisions with your finance team.
        </p>
      </div>
    </div>
  );
}