import { useState } from 'react';
import { VscFolder, VscFolderOpened } from 'react-icons/vsc';
import styles from '../styles/components/FolderFileMedia.module.css';
import CheckFileMedia  from './CheckFileMedia';

type LessonsTypes = {
  idLesson: string,
  nameLesson: string,
  nameModule: string,
  orderModule: number,
  isVisualized: boolean
}

type PropsType = {
  name: string,
  dataLesson: LessonsTypes[],
  order: number
}

export function FolderFileMedia({name, dataLesson, order}: PropsType){
    const [hidden, togglerHidden] = useState(false);
    const [isIconFolderOpen, togglerIsIconFolderOpen] = useState(false);

    let coutVisualizedLessons = 0;
    dataLesson.forEach((lesson) => {
      if(lesson.isVisualized){
        coutVisualizedLessons++;
      }
    })

    function updateVisibilityContainer(){
        togglerHidden(!hidden);
        togglerIsIconFolderOpen(!isIconFolderOpen);
    }

    return (
        <div className={styles.containerContent} >
            <div className={styles.headerFolderFileMedia} onClick={updateVisibilityContainer}>
                {isIconFolderOpen ? (<VscFolderOpened className={styles.icons}/>) : (<VscFolder className={styles.icons} />)}
                <div className={styles.informationModule}>
                    <span className={styles.nivelModule}>Nivel {order}</span>
                    <span className={styles.nameModule}>{name}</span>
                </div>
                <span className={styles.progressModule}>{coutVisualizedLessons} / {dataLesson.length}</span>
            </div>
            <div className={(hidden == true ? styles.mainFileVisible : styles.mainFileInvisible)}>
              {dataLesson.map((lesson) => {
                return <CheckFileMedia key={lesson.idLesson} {...{isVisualized: lesson.isVisualized, nameLesson: lesson.nameLesson, nameMediaVideo: lesson.nameLesson}}/>
              })}
            </div>
        </div>
    );
}
