import { toast } from "react-toastify";
import { UpdateToastConfig } from "../../config/toast";
import useAuthStore from "../auth/store";
import { useNavigate } from "react-router-dom";
import { CreateUserDto } from "./types";

const errors = ["Não foi possível realizar o cadastro!", "Nome não informado!", "Email não informado!", "Senha não informada!", "Email já utilizado!"];

export default async function CreateUser(user: CreateUserDto) {
  const Toast = toast.loading("Carregando...");
  const AuthStore = useAuthStore();
  const Navigate = useNavigate();
  try {
    if (!user.name) throw errors[1];
    if (!user.email) throw errors[2];
    if (!user.password) throw errors[3];

    // todo: implementar chamada da API para realizar o cadastro

    // todo: retirar mock abaixo
    // Simulando delay de 2 segundos para realizar o cadastro
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const resp = {
      status: 200,
      data: {
        message: "Usuário criado com sucesso!",
      },
    };

    if (resp.status !== 200) throw errors[0];

    await AuthStore.login({
      _id: "1",
      name: user.name,
      last_name: user.last_name,
      email: user.email,
    });

    toast.update(Toast, {
      render: "Cadastro realizado com sucesso!",
      ...UpdateToastConfig("success"),
    });

    return Navigate("/dashboard");
  } catch (error) {
    toast.update(Toast, {
      render: errors.includes(error as string) ? (error as string) : errors[0],
      ...UpdateToastConfig("error"),
    });
  }
}
