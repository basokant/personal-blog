import Logo from './Logo';
import { Sun, Moon } from 'react-feather';
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link';
import useViewport from '../hooks/useViewport';

type NavbarProps = {
    isDesktop: boolean
}

const Navbar = ( {isDesktop}: NavbarProps ) => {

    return (
        <div className={styles.container}>
            <Logo marginRight={isDesktop ? "20px" : "0px"}/>

            { isDesktop && 
                <>
                    <Link className={styles.link} href="/blog">Blog</Link>
                    <a className={styles.link} href="/basokant_resume_april2022.pdf" target="_blank" rel="noreferrer">Resumé</a>
                </>
            }

            { !isDesktop && 
                <div className={styles.links}>
                    <Link className={styles.link} href="/blog">Blog</Link>
                    <a className={styles.link} href="/basokant_resume_april2022.pdf" target="_blank" rel="noreferrer">Resumé</a>
                </div>
            }
        </div>
    );
}

export default Navbar;