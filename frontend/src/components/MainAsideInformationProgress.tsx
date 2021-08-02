import styles from '../styles/components/MainAsideInformationProgress.module.css'

type PropsTypes = {
  countLessons: number,
  viewsLessons: number
}

export function MainAsideInformationProgress({countLessons, viewsLessons}: PropsTypes){
    const percent = viewsLessons * 100 / countLessons;

    return(
        <div className={styles.containerContent}>
            <div className={styles.circleProgress}>
                <span>{Math.trunc(percent)}%</span>
            </div>
            <div className={styles.dataCourseProgress}>
                <span className={styles.nameCourse}>Estrutura de dados básico, médio e avançado</span>
                <span className={styles.attendedClasses}>Você já concluiu {viewsLessons} aulas de {countLessons}.</span>
            </div>
        </div>
    );
}
