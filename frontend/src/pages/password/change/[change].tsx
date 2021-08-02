import { useState } from 'react';
import InputPlaceholderUp from '../../../components/InputPlaceholderUp';
import styles from '../../../styles/pages/ChangePassword.module.css';

export default function ChangePassword(){
  const [typeInput, togglerTypeInput] = useState(false);

  function toggleVisibilityInputContent(){
      togglerTypeInput(!typeInput);
  }

  return(
    <div className={styles.containerContent}>
        <div className={styles.contentChangePassword}>
            <div className={styles.changePasswordHeader}>
                <div>
                    <img src="" alt="Logo" />
                </div>
            </div>
            <div className={styles.changePasswordMain}>
                <InputPlaceholderUp label="Digite sua nova senha" type={false}/>
                <InputPlaceholderUp label="Confirme sua nova senha" type={typeInput}/>
                <div className={styles.areaPasswordActions}>
                    <div>
                        <input type="checkbox" onClick={toggleVisibilityInputContent}/>
                        <span>Mostrar minha senha</span>
                    </div>
                </div>
                <button className={styles.button}>Redefinir senha</button>
            </div>
        </div>
    </div>
);
}
