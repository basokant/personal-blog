import Video from 'react-youtube';
import styles from '../styles/youtube.module.scss';

const YouTube = ({ url }: {url: string}) => {
  const videoID = youtube_parser(url);

  const opts = {
      height: '360',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
  };

  return (
    <div className={styles.container} >
      <Video videoId={videoID} opts={opts} className={styles.iframe}/>
    </div>
  )
}

function youtube_parser(url: string): string{
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : "";
}

export default YouTube;