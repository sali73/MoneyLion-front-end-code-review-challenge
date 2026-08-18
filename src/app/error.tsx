'use client';

import React from 'react';
import styles from './page.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className={styles.main} style={{ justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ 
        padding: '32px', 
        borderRadius: '12px', 
        background: '#ffffff08', 
        border: '1px solid #ffffff1a', 
        textAlign: 'center',
        maxWidth: '450px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#ff4d4f' }}>
          Oops, something went wrong!
        </h2>
        <p style={{ color: '#a1a1aa', fontSize: '0.95rem', marginBottom: '24px', lineHeight: '1.5' }}>
          {error.message || 'An unexpected error occurred while loading this section.'}
        </p>
        <button 
          onClick={() => reset()}
          style={{ 
            padding: '10px 24px', 
            background: '#ffffff', 
            color: '#000000', 
            border: 'none', 
            borderRadius: '6px', 
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'opacity 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.85'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
        >
          Try Again
        </button>
      </div>
    </main>
  );
}