import React, { useState } from 'react';
import SectionHeader from '@/components/lyra/SectionHeader';
import ProductGrid from '@/components/lyra/ProductGrid';
import { products, categories } from '@/lib/products';

export default function Catalogue() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? products : products.filter(p => p.cat.includes(active));

  return (
    <>
      <SectionHeader label="Our Collection" title="Full Catalogue" />

      {/* Filters */}
      <div className="flex gap-2 flex-wrap px-6 md:px-10 mb-8 max-w-[1440px] mx-auto">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`font-mono text-[11px] tracking-[0.1em] uppercase px-5 py-2.5 border transition-colors min-h-[44px] ${
              active === cat.key
                ? 'bg-primary border-primary text-primary-foreground'
                : 'bg-card border-border text-muted-foreground hover:border-primary hover:text-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ProductGrid items={filtered} />

      {/* Bottom spacer */}
      <div className="h-16" />
    </>
  );
}
