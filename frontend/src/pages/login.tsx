import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import InputPlaceholderUp from '../components/InputPlaceholderUp';
import styles from '../styles/pages/Login.module.css';
import { validationLogin, login } from  '../service/validations';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function Login() {
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function toggleIsShowingPassword() {
    setIsShowingPassword(!isShowingPassword);
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    const { status, message } = validationLogin({email, password});

    if(status == "error"){
      alert(message);
      return;
    }

    const data = {
      email: email,
      password: password
    }

    const { success } = await login(data);

    if(success){
      router.push("/");
    }else{
      alert("Não foi possivel logar");
    }

  }

  useEffect(() => {
    const idStudent = Cookies.get("idStudent");
    if(idStudent){
      router.push("/")
    }
  }, [])

  return (
    <div className={styles.containerContent}>
      <div className={styles.contentLogin}>
        <div className={styles.loginHeader}>
          <div>
            <img src="" alt="Logo" />
          </div>
        </div>
        <form onSubmit={submit} className={styles.loginMain}>
            <InputPlaceholderUp
              label="Seu e-mail"
              type="text"
              value={email}
              onChange={(event) => {setEmail(event.target.value)}}
            />
            <InputPlaceholderUp
              label="Sua senha"
              type={isShowingPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {setPassword(event.target.value)}}
            />
            <div className={styles.areaPasswordActions}>
              <div>
                <input type="checkbox" onClick={toggleIsShowingPassword} />
                <span>Mostrar minha senha</span>
              </div>
              <Link href="/password/redefine" passHref>
                Esqueci minha senha !
              </Link>
            </div>
            <button type="submit" className={styles.button}>Entrar</button>
          </form>
      </div>
    </div>
  );
}
