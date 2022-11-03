import Logo from './Logo';
import { Sun, Moon } from 'react-feather';
import styles from '../styles/Navbar.module.scss'
import Link from 'next/link';
import useViewport from '../hooks/useViewport';

type NavbarProps = {
    isDesktop: boolean
    background?: "bg1" | "bg2"
    sticky?: boolean
}

const Navbar = ( {isDesktop, background, sticky}: NavbarProps ) => {

    return (
        <nav id={background} className={styles.container} 
            style={
                sticky && isDesktop? {
                position: "sticky",
                top: 0}: {}
            }
        >
            <Logo marginRight={isDesktop ? "20px" : "0px"}/>

            { isDesktop && 
                <div className={styles.links}>
                    <Link className={styles.link} href="/blog">Blog</Link>
                    <a className={styles.link} href="/basokant_resume_august2022.pdf" target="_blank" rel="noreferrer">Resumé</a>
                </div>
            }

            { !isDesktop && 
                <div className={styles.links}>
                    <Link className={styles.link} href="/blog">Blog</Link>
                    <a className={styles.link} href="/basokant_resume_august2022.pdf" target="_blank" rel="noreferrer">Resumé</a>
                </div>
            }
        </nav>
    );
}

export default Navbar;