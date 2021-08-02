import api from "./api"
import useCookies from 'react-cookies';
import cookie from 'js-cookie';

type ParamsType = {
  email: string;
  password: string
}
const validationLogin = ({ email, password }: ParamsType) => {
  if (email == undefined || email == null || email.length < 6) {
    return { status: "error", message: "Erro in field email" }
  }

  if (password == undefined || password == null || password.length < 6) {
    return { status: "error", message: "Erro in field password" }
  }

  return { status: "success", message: "Validated fields" }
}


const login = async ({ email, password }: ParamsType) => {

  try {
    const response = await api.get("login", {
      params: {
        email_student: email,
        password_student: password
      }
    })

    const { id_student } = response.data.response;
    cookie.remove("idStudent");
    cookie.set("idStudent", id_student);

    return { success: true }

  } catch (error) {

    return { success: false }
  }

}

export { validationLogin, login };
