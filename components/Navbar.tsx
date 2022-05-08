import Logo from './Logo';
import { Sun, Moon } from 'react-feather';
import styles from '../styles/Navbar.module.scss'

type NavbarProps = {
    latest: string,
    posts: string,
    resume: string,
    switchTheme(): void;
};

const Navbar = ({ latest, posts, resume }: NavbarProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                <Logo />
                <a href={latest}>Latest</a>
                <a href={posts}>Posts</a>
                <a href={resume} target="_blank">Resumé</a>
            </div>
            <Sun />
        </div>
    );
}

export default Navbar;