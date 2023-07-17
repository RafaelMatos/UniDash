import { styled } from "styled-components";

export const LoginPageContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50% ;
  height: 100vh;
`
export const ImageContainer =styled.div`
  height: 100vh ;
  width: 100%;
` 
export const LoginImage =styled.img`
  display: block;
  width:50vw ;
  height: 100vh ;
` 
export const AuthContainer =styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content:space-around ;
  align-items: center ;
  /* width: 100% ; */
`
export const Title =styled.p`
  font-size: x-large ;
  margin-top:5%; 
`
export const TitleContainer =styled.div`
  display: flex ;
  align-items:center ;
  justify-content:center ;
`


interface LoginButtonProps {
  color: 'green' | 'gray' 
}
export const Button = styled('button')<LoginButtonProps>`
  display: flex ;
  justify-content:center ;
  align-items:center ;
  gap: 0.25rem ;
  padding: 0.5rem 0 ;
  border: none ;
  font-size:small ;
  color:${(props) => props.theme['white']};
  background: ${(props) => props.theme[props.color]};
  transition: 0.3s ease-in-out ;

  &:hover {
    opacity: 0.8 ;
    scale:  1.01;
  }
`
export const Form = styled.form`
  display:flex ;
  flex-direction: column ;
  width: 15rem;
  gap: 1rem ;
`