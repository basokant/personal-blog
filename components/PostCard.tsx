import styles from '../styles/PostCard.module.scss'

type PostCardProps = {
    title: string,
    description: string,
    link: string,
    transparent?: boolean
}

const PostCard = ({title, description, link, transparent}: PostCardProps) => {
    
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>{title}</h3>
            <p className={styles.desc}>{description}</p>
            <a className={styles.link} href={link}>Read More</a>
        </div>
    )
}

export default PostCard;