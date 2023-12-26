import { useNavigate } from "react-router-dom";
import useAuthStore from "./store";

export default async function Logout() {
  const AuthStore = useAuthStore();
  const Navigate = useNavigate();
  await AuthStore.logout();
  return Navigate("/");
}
