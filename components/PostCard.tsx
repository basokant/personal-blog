import styles from '../styles/PostCard.module.scss'

type PostCardProps = {
    title: string,
    link: string,
    transparent?: boolean
    children?: React.ReactNode; 
}

const PostCard = ({title, link, transparent, children}: PostCardProps) => {
    
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{title}</h3>
            <p className={styles.desc}>{children}</p>
            <a className={styles.link} href={link}>Read More</a>
        </div>
    )
}

export default PostCard;