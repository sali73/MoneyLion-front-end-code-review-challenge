import styles from '../app/page.module.css';

/** Interface representing the structure of a search card / navigation item. */
interface SearchCard {
    title: string;
    description: string;
    href: string;
}

/** Static collection of external reference links displayed in the grid. */
const searchLinks: SearchCard[] = [
    {
        title: "Docs",
        description: "Find in-depth information about Next.js features and API.",
        href: "https://nextjs.org/docs"
    },
    {
        title: "Learn",
        description: "Learn about Next.js in an interactive course with quizzes!",
        href: "https://nextjs.org/learn"
    },
    {
        title: "Templates",
        description: "Explore the Next.js playground and ready templates.",
        href: "https://vercel.com/templates?framework=next.js"
    },
    {
        title: "Deploy",
        description: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
        href: "https://vercel.com/new"
    }
];

/**
 * @component ArtSearchGrid
 * @description Encapsulates the rendering logic and mapping of navigation grid cards 
 * with robust accessibility (a11y) and semantic structure.
 */
export default function ArtSearchGrid() {
    return (
        <section aria-label="Quick Links and Resources" className={styles.grid}>
            {searchLinks.map((card, index) => (
                <a
                    key={index}
                    href={card.href}
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${card.title}: ${card.description} (opens in a new tab)`}
                >
                    <h2>
                        {card.title} <span aria-hidden="true">-&gt;</span>
                    </h2>
                    <p>{card.description}</p>
                </a>
            ))}
        </section>
    );
}