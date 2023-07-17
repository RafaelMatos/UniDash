import { Button, Form } from "../styles";
import { LoginFormContainer } from "./styles";
import { LogIn, UserPlus } from "react-feather";
import { useContext } from "use-context-selector";
import { UserContext } from "../../../contexts/UsersContext";

export function LoginForm() {
  const { handleButtonState } = useContext(UserContext)
  
  return (
    <LoginFormContainer>
      <Form action="">
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Informe seu e-mail"
        />
        <label htmlFor="">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Informe sua senha"
        />
        <Button color="green">
          <LogIn size={15} />
          Entrar
        </Button>
        <Button color="gray" onClick={handleButtonState}>
          <UserPlus size={15} />
          Não tenho conta
        </Button>
      </Form>
    </LoginFormContainer>
  );
}
