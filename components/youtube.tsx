import Video from 'react-youtube';

const YouTube = ({ videoId }: {videoId: string}) => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
    };

    return <Video videoId={videoId} opts={opts}/>
}

export default YouTube;