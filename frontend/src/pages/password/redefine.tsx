import InputPlaceholderUp from '../../components/InputPlaceholderUp';
import styles from '../../styles/pages/RedefinePassword.module.css';

export default function RedefinePassword(){

  return(
    <div className={styles.containerContent}>
        <div className={styles.contentReset}>
            <div className={styles.resetHeader}>
                <div>
                    <img src="" alt="Logo" />
                </div>
            </div>
           <span>
             <p>.Digite abaixo o email que você costuma usar para logar na plataforma, em seguida click em enviar.</p>
             <p>.Verifique sua caixa de email.</p>
             <p>.Click no link presente no email.</p>
           </span>
            <div className={styles.resetMain}>
                <InputPlaceholderUp label="Seu e-mail" type="text"/>
                <button className={styles.button}>Enviar</button>
            </div>
        </div>
    </div>
);
}
