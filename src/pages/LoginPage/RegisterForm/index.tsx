import { RegisterFormContainer } from "./styles";
import { ArrowLeft,UserCheck } from "react-feather";
import { Button,Form } from "../styles";
import { useContext } from "use-context-selector";
import { UserContext } from "../../../contexts/UsersContext";


export function RegisterForm() {
  const { handleButtonState } = useContext(UserContext)
  return (
    <RegisterFormContainer>
      <Form action="">
        <label htmlFor="">Nome</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Informe seu nome"
        />
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
        <label htmlFor="">Confirme sua senha</label>
        <input
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          placeholder="Confirme sua senha"
        />
        <Button color="green">
          <UserCheck size={15} />
          Cadastrar
        </Button>
        <Button color="gray" onClick={handleButtonState}>
          <ArrowLeft size={15} />
          Voltar
        </Button>
      </Form>
    </RegisterFormContainer>
  );
}
