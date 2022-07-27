

const Replit = ({url}: {url: string}) => {
    
    return (
        <iframe frameBorder="0" width="100%" height="500px" src={url + "?embed=true"}></iframe>
    )
}

export default Replit;