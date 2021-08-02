import { useState } from 'react';
import { ReactNode } from 'react';
import { createContext } from 'react';


type MediaContextType = {
  updateUrlMediaVideo: (name: string) => void;
  updateNameLesson: (name: string) => void;
  urlMediaVideo: string;
  nameLesson: string;
}

type ChildrenType = {
  children: ReactNode;
  countLessons: number;
  viewsLessons: number;
  dataModules: object[]
}

export const MediaContext = createContext({} as MediaContextType);
const MediaProvider = ({children, countLessons, viewsLessons, dataModules}: ChildrenType) => {
  const [urlMediaVideo, setUrlMediaVideo] = useState("listas-encadeadas");
  const [nameLesson, setNameLesson] = useState("");

  function updateUrlMediaVideo(name: string){
    setUrlMediaVideo(name);
  }
  function updateNameLesson(name: string){
    setNameLesson(name);
  }

  return (
    <MediaContext.Provider
      value={{
        updateUrlMediaVideo: (name) => updateUrlMediaVideo(name),
        updateNameLesson: (name) => updateNameLesson(name),
        urlMediaVideo,
        nameLesson
      }}
    >
      {children}

    </MediaContext.Provider>
  );
}
// const useMediaProvider = () => useContext(MediaContext)

export default MediaProvider;
