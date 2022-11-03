import Link from "next/link";
import Logo from "./Logo";
import styles from "../styles/Footer.module.scss";

const Footer = () => {

    return (
        <div className={styles.container}>
            <Logo />
            <div className={styles.links}>
                <Link href="/posts">Posts</Link>
                <a href="/basokant_resume_august2022.pdf" target="_blank" rel="noreferrer">Resumé</a>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://github.com/basokant" target="_blank" rel="noreferrer">
                    <img className={styles.socialBtn} src="/github.svg" alt="My GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-asokanthan/" target="_blank" rel="noreferrer">
                    <img className={styles.socialBtn} src="/linkedin.svg" alt="My LinkedIn" />
                </a>
            </div>
        </div>
    );
}

export default Footer;