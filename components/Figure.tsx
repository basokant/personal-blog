import Image from 'next/image';

type FigureProps = {
    src: string;
    caption: string | null;
}

export default function Figure({ src, caption }: FigureProps) {
    return (
        <figure>
            <Image src={src} layout="responsive" width="100%" height="100%" objectFit="contain" />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}