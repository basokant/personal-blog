import Logo from './Logo';
import { Sun, Moon } from 'react-feather';
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link';

type NavbarProps = {
    recent: string,
    posts: string,
    resume: string,
};

const Navbar = ({ recent, posts, resume }: NavbarProps) => {
    return (
        <div className={styles.links}>
            <Logo />
            <Link href={recent}>Latest</Link>
            <Link href={posts}>Posts</Link>
            <a href={resume} target="_blank">Resumé</a>
        </div>
    );
}

export default Navbar;