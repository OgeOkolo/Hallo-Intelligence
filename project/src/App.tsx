import React from 'react';
import { MessageCircle, RefreshCw, Settings, TrendingUp, Target, Clock, Heart, Bot } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#0D0D0D'}}>
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xl font-medium ml-2">Hallo</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 relative">
        <div className="max-w-6xl mx-auto text-center relative">
          {/* Robot Icon */}
          <div className="absolute right-8 top-0 opacity-30 hidden lg:block">
            <div className="w-32 h-32 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20">
              <Bot className="w-16 h-16 text-blue-400/60" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI Business Brain.
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-200">
            Your tireless, intelligent employee.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Speaks, Listens, Thinks, Remembers, Converts.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">24/7 follow-up</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">300% more responses</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-sm font-medium">Zero drop-offs</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Try Hallo Now
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Conversational AI */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-gray-300 leading-relaxed">
                Human-like conversations that understand, respond, and retain
              </p>
            </div>
            
            {/* Automated Follow-Up */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Follow-Up</h3>
              <p className="text-gray-300 leading-relaxed">
                Hallo handles texts, calls, emails with soft persistence & emotional intelligence
              </p>
            </div>
            
            {/* API-Ready SaaS */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">API-Ready SaaS</h3>
              <p className="text-gray-300 leading-relaxed">
                Easily integrates into your platform and syncs with your tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hallo Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Hallo?</h2>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-lg">Boost engagement by </span>
                  <span className="text-blue-400 font-semibold">400%</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="text-lg">Increase conversion/sales by </span>
                  <span className="text-green-400 font-semibold">10x</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <span className="text-lg">Save </span>
                  <span className="text-yellow-400 font-semibold">hours</span>
                  <span className="text-lg"> in mental follow-ups</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <span className="text-lg">Understand your leads deeply through smart </span>
                  <span className="text-purple-400 font-semibold">sentiment analysis</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-300 text-lg">
            Businesses use Hallo to generate, qualify, and convert leads — all on autopilot.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Talk Now —</h2>
          <h3 className="text-2xl font-light mb-8">Try Hallo or Book a Demo</h3>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Let's Talk Now
          </button>
          
          <p className="text-gray-400 text-sm mt-8">
            We'll never share your information with a third party.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;