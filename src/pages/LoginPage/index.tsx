
import logoUnimed from "../../assets/logo_unimed.png";
import {
  AuthContainer,
  ImageContainer,
  LoginImage,
  LoginPageContainer,
  Title,
  TitleContainer,
} from "./styles";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";
import { useContext } from "use-context-selector";
import { UserContext } from "../../contexts/UsersContext";
export function LoginPage() {

  const { buttonState } = useContext(UserContext)
  
  return (
    <LoginPageContainer>
      <ImageContainer>
        <LoginImage src="src\assets\back_login.png" alt="" />
      </ImageContainer>

      <AuthContainer>
        <TitleContainer>
          <Title>{buttonState ? "Login" : "Faça seu cadastro"}</Title>
        </TitleContainer>
        {buttonState ? <LoginForm /> : <RegisterForm />}
        <img src={logoUnimed} alt="" height={80} />
      </AuthContainer>
    </LoginPageContainer>
  );
}
