import { toast } from "react-toastify";
import { LoginDTO, User } from "./types";
import useAuthStore from "./store";
import { UpdateToastConfig } from "../../config/toast";

const errors = ["Não foi possível realizar o login!", "Nome não informado!", "Email não informado!", "Senha não informada!", "Usuário não encontrado!"];

export default async function Login(user: LoginDTO) {
  const Toast = toast.loading("Carregando...");
  const AuthStore = useAuthStore();
  try {
    if (AuthStore.user !== null) throw errors[0];
    if (!user.email) throw errors[2];
    if (!user.password) throw errors[3];

    //todo: implementar chamada da API para realizar o login
    //todo: retirar mock abaixo
    const mockUser: User = {
      _id: "1",
      name: "Pedro",
      last_name: "Foltram",
      email: "pedro.foltram@email.com",
    };

    // Simulando delay de 2 segundos para realizar o login
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await AuthStore.login(mockUser);

    toast.update(Toast, {
      render: "Login realizado com sucesso!",
      ...UpdateToastConfig("success"),
    });
  } catch (error) {
    toast.update(Toast, {
      render: errors.includes(error as string) ? (error as string) : errors[0],
      ...UpdateToastConfig("error"),
    });
  }
}
