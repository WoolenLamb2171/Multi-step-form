'use client'
import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export type User = {
    name: string;
    email: string;
    phoneNumber: string;
    billingType: string;
}

export interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
}

const defaultState = {
    user: {
        name: "",
        email: "",
        phoneNumber: "",
        billingType: "",
    },
    setUser: (user: User) =>{}
} as UserContextInterface

export const UserContext = createContext(defaultState);

type UserProviderProps = {
    children: ReactNode
}

const ContextProvider = ({children}: UserProviderProps) => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        phoneNumber: "",
        billingType: "",
    })

    return ( 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}
 
export default ContextProvider;