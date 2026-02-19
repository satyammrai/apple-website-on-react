
import React from 'react';
import { Icons } from '../constants';

const Navbar: React.FC = () => {
  const navItems = ['Store', 'Mac', 'iPhone', 'iPad', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'];

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-[1024px] mx-auto px-4 h-12 flex items-center justify-between text-[#f5f5f7] text-xs font-light tracking-tight">
        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
          <Icons.Apple />
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a key={item} href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-6 opacity-80">
          <button className="hover:opacity-100 transition-opacity"><Icons.Search /></button>
          <button className="hover:opacity-100 transition-opacity"><Icons.Bag /></button>
          <button className="md:hidden hover:opacity-100 transition-opacity"><Icons.Menu /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
