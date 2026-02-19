
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  reverse?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, reverse }) => {
  return (
    <section className={`py-32 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 px-6 max-w-7xl mx-auto`}>
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">{product.name}</h2>
        <p className="text-2xl md:text-3xl text-gradient font-medium">{product.tagline}</p>
        <p className="text-[#86868b] text-lg leading-relaxed max-w-md">
          {product.description}
        </p>
        <div className="pt-4 flex items-center gap-6">
          <button className="text-[#007AFF] hover:underline flex items-center gap-1 font-medium group">
            Learn more 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="text-[#007AFF] hover:underline flex items-center gap-1 font-medium group">
            Buy 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
      <div className="flex-1 w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-auto rounded-3xl shadow-2xl transform transition-all group-hover:scale-[1.02] border border-white/10"
        />
      </div>
    </section>
  );
};

export default ProductCard;
