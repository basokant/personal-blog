import styles from '../styles/Hero.module.scss';
import Image from 'next/image';

const Hero = ({}) => {

    return (
        <div className={styles.container}>
            <div className={styles.col1}>
                <h1 className={styles.welcome}><span className={styles.blue}>Hey!</span> I'm Ben.</h1>
                <p className={styles.desc}>I'm a computer science student and aspiring software developer who loves designing, learning, and creating.</p>
                <a className={styles.btn} href="mailto:basokanthan@gmail.com">Let's Chat</a>
                <a className={styles.link} href="/basokant_resume_april2022.pdf" target="_blank">PDF Resumé</a>
                <br />
                <a href="https://github.com/basokant" target="_blank">
                    <img className={styles.socialBtn} src="/github.svg" alt="My GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-asokanthan/" target="_blank">
                    <img className={styles.socialBtn} src="/linkedin.svg" alt="My LinkedIn" />
                </a>
            </div>
            <div className={styles.col2}>
                <Image className={styles.image} src="/self_portrait.svg" width={360} height={592} ></Image>
            </div>
        </div>
    )

}

export default Hero

