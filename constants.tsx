
import React from 'react';

export const COLORS = {
  primary: '#007AFF',
  bg: '#000000',
  text: '#FFFFFF',
  textSecondary: '#86868b',
};

export const Icons = {
  Apple: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-1.99 1.1-3.15-1.04.04-2.3.69-3.05 1.56-.67.77-1.26 1.97-1.1 3.1 1.16.09 2.32-.68 3.05-1.51z"/>
    </svg>
  ),
  Search: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
  Bag: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
};

export const PRODUCTS = [
  {
    id: 'mac-quantum',
    name: 'Mac Quantum',
    tagline: 'Infinite power. Zero latency.',
    description: 'Featuring the M-Infinity chip with 1,000 core GPU and neural processing that anticipates your next thought.',
    price: 'From $2,999,999',
    imageUrl: 'https://picsum.photos/seed/mac/1200/800',
    category: 'Mac',
  },
  {
    id: 'iphone-pro-max-inf',
    name: 'iPhone 100 Pro Max',
    tagline: 'Titanium. Solid-state. Indestructible.',
    description: 'The first smartphone powered by a miniature fusion reactor. Lasts 50 years on a single charge.',
    price: 'From $1,499,999',
    imageUrl: 'https://picsum.photos/seed/iphone/1200/800',
    category: 'iPhone',
  },
  {
    id: 'vision-ultra',
    name: 'Vision Ultra',
    tagline: 'The end of reality.',
    description: 'Direct neural interface. Experience memories in 32K resolution with tactile feedback.',
    price: 'From $9,999,999',
    imageUrl: 'https://picsum.photos/seed/vision/1200/800',
    category: 'Vision',
  },
];
