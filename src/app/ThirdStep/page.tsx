'use client'
import { UserContext } from "@/components/ContextProvider";
import { useContext } from "react";

const ThirdStep = () => {
    const {user} = useContext(UserContext)

    return ( 
        <main className="flex justify-center items-center">
            <h1 className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">{JSON.stringify(user)}</h1>
        </main> 
    );
}
 
export default ThirdStep;