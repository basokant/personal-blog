import Link from 'next/link';
import styles from '../styles/PostCard.module.scss'

type PostCardProps = {
    title: string;
    link: string;
    transparent?: boolean;
    date: string;
    category: string;
    children?: React.ReactNode;
}

const PostCard = ({title, link, transparent, date, category, children}: PostCardProps) => {

    return (
        <Link href={link}>
            <div className={styles.container}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.date}>{date}</p>
                <Link href={`/blog?q=${category}`}><a className={styles.category}>{category}</a></Link>
                <p className={styles.desc}>{children}</p>
                <Link href={link}><a className={styles.link}>Read More</a></Link>
            </div>
        </Link>
    )
}

export default PostCard;