import styles from '../styles/components/Video.module.css';
import {MediaContext} from '../contexts/MediaContext';
import { useContext, useState } from 'react';

type urlMediaLesson = {
  urlMedia: string
}

export default function Video({ urlMedia }: urlMediaLesson){
  const { urlMediaVideo } = useContext(MediaContext);
  const [url, setUrl ] = useState(`http://localhost:3333/lessons/${urlMedia}.mp4`)

  return (
      <div className={styles.container}>
        <video controls >
          <source src={url} type="video/mp4" />
          {console.log(url)}
        </video>
      </div>
  );
}
