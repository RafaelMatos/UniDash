import {  useState, ReactNode } from "react";
import { createContext } from "use-context-selector";
// import { api } from "../lib/axios";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: string;
}

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

interface UsersContextType {
  users: User[];
  // createUser: (data: CreateUserInput) => Promise<void>;
  buttonState: boolean;
  handleButtonState: () => void;
}

export const UserContext = createContext({} as UsersContextType);

interface UserProviderProps {
  children: ReactNode;
}

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [buttonState, setButtonState] = useState(true);

  function handleButtonState() {
    setButtonState((state) => {
      return !state;
    });
  }

  // const createUser = useCallback(
  //   async (data : CreateUserInput ) => {
  //     const { name,email,password } = data
  //     const response = await api.post('users',{
  //       name,
  //       email,
  //       password,
  //       isAdmin:false,
  //       createdAt: new Date()
  //     } )
  //     setUsers((state) => [response.data, ...state])
  //   },
  //   [],
  // )

  return (
    <UserContext.Provider
      value={{ users,  buttonState, handleButtonState }}
    >
      {children}
    </UserContext.Provider>
  );
}
