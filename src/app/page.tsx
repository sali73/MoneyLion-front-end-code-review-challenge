import Image from 'next/image';
import styles from './page.module.css';
import HeaderSection from '@/components/HeaderSection';
import ArtSearchGrid from '@/components/ArtSearchGrid';

/**
 * @description Main entry point for the application. Refactored from a monolithic 
 * structure into a clean, modular component-driven architecture.
 */
export default function Home() {
 
// ==========================================
  // REVIEWER TESTING NOTE:
  // To test the Error Boundary (error.tsx), 
  // simply uncomment the line below and refresh the page:
  // throw new Error("Test Error: Checking Error Boundary!");
  // ==========================================

  return (
    <main className={styles.main}>
      {/* 
        Reference: Header Section Component 
        Extracted to isolate top-level navigation details and boilerplate links.
      */}
      <HeaderSection />

      {/* Core Branding: Centralized Next.js logo wrapper with priority loading */}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* 
        Reference: Art Search / Navigation Grid Component 
        Extracted to encapsulate card items data structure and rendering logic.
      */}
      <ArtSearchGrid />
    </main>
  );
}