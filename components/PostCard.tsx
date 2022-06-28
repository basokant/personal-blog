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
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.date}>{date}</p>
            <a className={styles.category} href="">{category}</a>
            <p className={styles.desc}>{children}</p>
            <Link className={styles.link} href={link}>Read More</Link>
        </div>
    )
}

export default PostCard;