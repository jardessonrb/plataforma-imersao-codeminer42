import styles from '../styles/pages/Home.module.css'
import { BsBell, BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';
import { BiExit } from 'react-icons/bi';
import { FolderFileMedia } from '../components/FolderFileMedia';
import { MainAsideInformationProgress } from '../components/MainAsideInformationProgress';
import Video from '../components/Video';
import MediaProvider, { MediaContext } from '../contexts/MediaContext';
import { useContext } from 'react';
import api from '../service/api';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


type LessonsTypes = {
  idLesson: string,
  nameLesson: string,
  nameModule: string,
  orderModule: number,
  isVisualized: boolean
}

type ObjectModule = {
  nameModule: string;
  lessons: LessonsTypes[];
}

type DataModuleType = {
  dataModule: ObjectModule[],
  coutLessons: number;
  viewsLessons: number;
  nameStudent: string;
}

export default function Home({ dataModule, coutLessons, viewsLessons, nameStudent }: DataModuleType) {
  const { urlMediaVideo, nameLesson } = useContext(MediaContext);
  const router = useRouter();
  function handleLogout(){
    Cookies.remove("idStudent");
    router.push("/login");
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerContent}>
          <div className={styles.header}>
              <div className={styles.headerLogo}>
                  <h3>Logo</h3>
              </div>
              <div className={styles.headerTop}>
                  <div className={styles.headerTopInformations}>
                    <div className={styles.notification}>
                      <BsBell className={styles.icons}/>
                      <span>0</span>
                    </div>
                    <div className={styles.headerTopDataUser} >
                        <span>{nameStudent}</span>
                        <button onClick={handleLogout} className={styles.button}>
                          <BiExit />
                        </button>
                    </div>
                  </div>
              </div>
          </div>
          <div className={styles.main}>
              <div className={styles.mainLateral}>
                  <div className={styles.mainAside}>
                      <MainAsideInformationProgress countLessons={coutLessons} viewsLessons={viewsLessons} />
                  </div>
                  {dataModule.map((value) => {
                    return <FolderFileMedia key={value.nameModule} name={value.nameModule} dataLesson={value.lessons} order={value.lessons[0].orderModule}/>
                  })}
              </div>
              <div className={styles.mainCenter}>
                  <div className={styles.controlPreviouNext}>
                      <div className={styles.controlActionsPrevious}>
                          <BsBoxArrowInLeft className={styles.icons}/>
                          <div className={styles.paginationMedia}>
                              <span>Aula anterior</span>
                              <span>Aula sobre listas encadeadas 01</span>
                          </div>
                      </div>
                      <div className={styles.controlActionsNext}>
                          <div className={styles.paginationMedia}>
                              <span>Proxima aula </span>
                              <span>Aula sobre listas encadeadas 03</span>
                          </div>
                          <BsBoxArrowInRight className={styles.icons}/>
                      </div>
                  </div>
                  <div className={styles.containerMedia}>
                    <div className={styles.areMedia}>
                      <Video urlMedia={urlMediaVideo}/>
                    </div>
                    <h2>{nameLesson}</h2>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const {idStudent }  = context.req.cookies;

  if(!idStudent) {
    return {redirect: {
      destination: "/login"
    }}
  }

  const res = await api.get(`student/${idStudent}`).then((response) => {
      return response.data;
  });



  return {
    props: {
      dataModule: res.data.modules,
      coutLessons: res.data.countLessons,
      viewsLessons: res.data.countViews,
      nameStudent: res.data.nameStudent
    }
  }
}
