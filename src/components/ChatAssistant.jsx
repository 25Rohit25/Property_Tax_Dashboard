import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { askGemini } from '../services/geminiService';

const ChatAssistant = ({ data }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! I can help you analyze this property tax dataset.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const reply = await askGemini(userMessage, data);
    
    setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-[24px] shadow-apple flex flex-col h-[500px] lg:h-[830px] overflow-hidden border border-[#f5f5f7]">
      <div className="pt-6 pb-4 px-6 border-b border-[#f5f5f7] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-[#f0f4f9] p-2.5 rounded-full">
            <Sparkles className="text-apple-blue" size={18} strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-apple-text tracking-tight leading-none mb-1">AI Assistant</h3>
            <p className="text-[12px] text-apple-textMuted font-medium leading-none">Powered by Gemini</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-5 space-y-5 custom-scrollbar bg-white">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] px-4 py-2.5 text-[15px] leading-[1.4] ${
              msg.role === 'user' 
                ? 'bg-apple-chatUser text-white rounded-[20px] rounded-br-[4px]' 
                : 'bg-apple-chatBot text-apple-text rounded-[20px] rounded-bl-[4px]'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-apple-chatBot rounded-[20px] rounded-bl-[4px] px-4 py-3.5 flex space-x-1.5 items-center">
              <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white">
        <div className="relative flex items-center border border-[#e5e5ea] rounded-full focus-within:border-apple-blue focus-within:ring-4 focus-within:ring-apple-blue/10 transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask something..."
            className="w-full bg-transparent py-3 pl-5 pr-12 text-[15px] text-apple-text placeholder-[#86868b] focus:outline-none"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-1.5 p-2 text-white bg-apple-blue rounded-full transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="-ml-0.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatAssistant;
