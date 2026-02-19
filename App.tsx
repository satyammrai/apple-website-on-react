
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import AuraChat from './components/AuraChat';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Navbar />
      
      
      <main>
        <Hero />
        
        {/* Secondary Banner */}
        <section className="bg-white text-black py-4 text-center text-sm font-medium">
          <p>
            Experience the new Mac Quantum. <a href="#" className="text-blue-600 hover:underline">See how it redefines the possible ></a>
          </p>
        </section>

        {/* Product Grid / Sections */}
        <div className="space-y-0">
          {PRODUCTS.map((product, idx) => (
            <ProductCard 
              key={product.id} 
              product={product as any} 
              reverse={idx % 2 !== 0}
            />
          ))}
        </div>

        {/* Stats Section */}
        <section className="py-40 bg-gradient-to-b from-black to-[#1d1d1f]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
            <div className="space-y-4">
              <h3 className="text-6xl font-black">20Q</h3>
              <p className="text-xl text-[#86868b]">Dollars of R&D invested in human transcendence.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-6xl font-black">0ms</h3>
              <p className="text-xl text-[#86868b]">Latency between thought and hardware execution.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-6xl font-black">∞</h3>
              <p className="text-xl text-[#86868b]">Battery life cycles for the new fusion reactor line.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1d1d1f] py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-xs text-[#86868b] space-y-4 border-b border-[#424245] pb-8 leading-relaxed">
            <p>1. The Mac Quantum requires a Class A Neural Safety Certification. Direct brain connection carries a 0.0001% risk of permanent digital transcendence.</p>
            <p>2. The iPhone 100 Fusion Reactor is designed to outlast the current geological epoch. Disposal requires shipment to a stable star system.</p>
            <p>3. Apple Infinity is not responsible for any shifts in personal reality caused by the Vision Ultra direct-to-cortex feed.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-xs text-[#f5f5f7]">
            <div className="space-y-3">
              <p className="font-semibold">Shop and Learn</p>
              <ul className="space-y-2 opacity-60">
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Apple Wallet</p>
              <ul className="space-y-2 opacity-60">
                <li>Wallet</li>
                <li>Apple Card</li>
                <li>Apple Pay</li>
                <li>Apple Cash</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Account</p>
              <ul className="space-y-2 opacity-60">
                <li>Manage Your Apple ID</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">Entertainment</p>
              <ul className="space-y-2 opacity-60">
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-semibold">About Apple</p>
              <ul className="space-y-2 opacity-60">
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#424245] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[#86868b]">
            <p>Copyright © 2055 Apple Infinity Inc. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Sales and Refunds</a>
              <a href="#" className="hover:underline">Legal</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
            <p>Galactic Headquarters: Sector 7G, Low Earth Orbit</p>
          </div>
        </div>
      </footer>

      {/* Floating AI Aura Assistant */}
      <AuraChat />
    </div>
  );
};

export default App;
