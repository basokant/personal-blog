import styles from '../styles/Hero.module.scss';
import Image from 'next/image';
import { Mail } from 'react-feather';

type HeroProps = {
    isDesktop: boolean
}

const Hero = ({isDesktop}: HeroProps) => {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.col1}>
                <h1 className={styles.welcome}><span className={styles.blue}>Hey!</span> I'm Ben.</h1>
                <p className={styles.desc}>I'm a computer science student and aspiring software developer who loves designing, learning, and creating.</p>
                <a className={styles.btn} href="mailto:basokanthan@gmail.com">
                    <Mail className={styles.mailIcon} strokeWidth="3px"/>{ isDesktop && "Let's Chat" }
                </a>
                <a className={styles.link} href="/basokant_resume_april2022.pdf" target="_blank" rel="noreferrer">PDF Resumé</a>
                <br />
                <a href="https://github.com/basokant" target="_blank" rel="noreferrer">
                    <img className={styles.socialBtn} src="/github.svg" alt="My GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-asokanthan/" target="_blank" rel="noreferrer">
                    <img className={styles.socialBtn} src="/linkedin.svg" alt="My LinkedIn" />
                </a>
            </div>
            { isDesktop &&
                <div className={styles.col2}>
                    <Image className={styles.image} src="/self_portrait.svg" width={396*1.1} height={592*1.1} ></Image>
                </div>
            }
        </div>
        { !isDesktop &&
            <div className={styles.col2}>
                <Image className={styles.image} src="/self_portrait.svg" width={360*1.1} height={592*1.1} ></Image>
            </div>
        }
        </>
    )

}

export default Hero

