'use client'
import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

export type User = {
    name: string;
    email: string;
    phoneNumber: string;
    billingType: string;
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
    isFormConfirmed: boolean;
    [key: string]: string | boolean; 
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
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
        isFormConfirmed: false,
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
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
        isFormConfirmed: false,
    })

    return ( 
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}
 
export default ContextProvider;