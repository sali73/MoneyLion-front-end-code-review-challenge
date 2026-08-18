import Image from 'next/image';
import styles from '../app/page.module.css';

export default function HeaderSection() {
    return (
        <header className={styles.description}>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>src/app/page.tsx</code>
            </p>
            <div>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Vercel website (opens in a new tab)"
                >
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel enterprise hosting platform logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div>
        </header>
    );
}