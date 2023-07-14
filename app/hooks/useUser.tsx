import { createContext } from "react";

type UserContextType = {
    
}

export const userContext = createContext<UserContextType | undefined>(undefined)

export interface Props{
    [propName: string] : any
}

export const MyUserContextProvider = (props: Props) => {
    
}
