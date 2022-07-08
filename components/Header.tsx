import Link from 'next/link';
import dateToString from '../helpers/dateToString';
import styles from '../styles/Header.module.scss';

type HeaderProps = {
    title: string;
    category: string;
    date: string;
    readingTime: string;
}

const Header = ({title, category, date, readingTime}: HeaderProps) => {
    return (
        <div className={styles.container}>
            <Link href={`/blog?q=${category}`}><a className={styles.category}>{category}</a></Link>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.row}>
                <p className={styles.date}>{dateToString(new Date(date))}</p>
                <p className={styles.dot}>·</p>
                <p className={styles.readTime}>{readingTime}</p>
            </div>
        </div>
    )
}

export default Header;