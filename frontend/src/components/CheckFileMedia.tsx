import { FiCheckCircle } from 'react-icons/fi';
import { BsCircle } from 'react-icons/bs';
import MediaProvider, { MediaContext } from '../contexts/MediaContext';
import styles from '../styles/components/CheckFileMedia.module.css';
import { useContext } from 'react';

type DataFileMedia = {
    isVisualized: boolean;
    nameLesson: string;
    nameMediaVideo: string;
}

const CheckFileMedia: React.FC<DataFileMedia> = ({isVisualized, nameLesson, nameMediaVideo}) => {
    const { urlMediaVideo, updateUrlMediaVideo, updateNameLesson } = useContext(MediaContext);
    function playerMediaVideo(){
      console.log(nameMediaVideo)
      updateUrlMediaVideo(nameMediaVideo);
      updateNameLesson(nameLesson);
    }
    return (
        <div className={styles.containerContent}>
            <div className={styles.content} onClick={playerMediaVideo}>
                {isVisualized ? (<FiCheckCircle className={styles.iconsCheck}/>) : (<BsCircle className={styles.iconCircle}/>)}
                <span className={styles.spanNameClassRoom}>
                    {nameLesson}
                </span>
            </div>
        </div>
    );
}

export default CheckFileMedia;
