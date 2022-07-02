import Navbar from './Navbar';
import Footer from './Footer';

type LayoutProps = {
    isDesktop: boolean;
    post: Post;
    children?: React.ReactNode;
}

type Post = {
    slug: string;
    data: {
        title: string;
        date: string;
        description: string;
        category: string;
    }
}

const Layout = ( {isDesktop, post, children}: LayoutProps ) => {

    return (
        <>
            <Navbar isDesktop={false} />
            <h1>{post.data.title}</h1>
            {children}
            <Footer />
        </>
    )
}