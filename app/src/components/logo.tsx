'use client';

import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <path 
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" 
          fill="#10B981" 
          fillOpacity="0.2"
        />
        <path 
          d="M12.5 6.5c0 0-3.5 2.5-3.5 6.5c0 1.5 0.5 2 1 3s1.5 2 1.5 3.5c-2.5-2-4.5-3-5.5-6s0-7 2.5-8.5s4-0.5 4 1.5z" 
          fill="#10B981"
        />
        <path 
          d="M11.5 6.5c0 0 3.5 2.5 3.5 6.5c0 1.5-0.5 2-1 3s-1.5 2-1.5 3.5c2.5-2 4.5-3 5.5-6s0-7-2.5-8.5s-4-0.5-4 1.5z" 
          fill="#10B981"
        />
      </svg>
      <span className="text-green-500 text-2xl font-semibold">Sustain</span>
      <span className="text-black text-2xl font-semibold">Versity</span>
    </Link>
  );
};

export default Logo; 