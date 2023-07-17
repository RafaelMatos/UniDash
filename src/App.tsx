import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { LoginPage } from "./pages/LoginPage"
import { UsersProvider } from "./contexts/UsersContext"


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <UsersProvider>
        <LoginPage/>
      </UsersProvider>
    </ThemeProvider>
    
  )
}

