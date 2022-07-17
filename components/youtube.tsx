import Video from 'react-youtube';

const YouTube = ({ url }: {url: string}) => {
  const videoID = youtube_parser(url);

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
  };

  return <Video videoId={videoID} opts={opts}/>
}

function youtube_parser(url: string): string{
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : "";
}

export default YouTube;