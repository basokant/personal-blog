

const CodePen = ({url}: {url: string}) => {
    
    return (
        <iframe height="300" style={{width: "100%", height: "400px"}} scrolling="no" src={url} frameBorder="no" loading="lazy"></iframe>
    )
}

export default CodePen;