import styles from "../styles/Layout.module.scss";

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout = ( {children}: LayoutProps ) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout;