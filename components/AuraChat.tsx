
import React, { useState, useRef, useEffect } from 'react';
import { auraAssistant } from '../services/geminiService';
import { ChatMessage, UIState } from '../types';

const AuraChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', content: "Welcome to the future. I am Aura, your concierge for the Apple Infinity ecosystem. How may I enlighten you today?" }
  ]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<UIState>(UIState.IDLE);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || status === UIState.LOADING) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setStatus(UIState.LOADING);

    try {
      const response = await auraAssistant.sendMessage(input, messages);
      setMessages(prev => [...prev, { role: 'model', content: response || "Something went wrong." }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', content: "I encountered a disturbance in the quantum field." }]);
    } finally {
      setStatus(UIState.IDLE);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="glass w-[350px] md:w-[400px] h-[500px] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-white/20 transition-all scale-100 origin-bottom-right">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="font-semibold text-sm tracking-wide">Aura Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#007AFF] text-white' 
                  : 'bg-white/10 text-white border border-white/5'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {status === UIState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-2xl flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Aura about the future..."
                className="flex-1 bg-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all border border-white/5"
              />
              <button 
                onClick={handleSend}
                disabled={status === UIState.LOADING}
                className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all disabled:opacity-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        >
          <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20 group-hover:opacity-40"></div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default AuraChat;
