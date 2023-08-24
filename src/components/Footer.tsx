'use client'
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { UserContext } from "./ContextProvider";
import { useContext, useEffect } from "react";

const Footer = () => {
    const path = usePathname();
    const router = useRouter();

    const {user,setUser} = useContext(UserContext);

    const handleButtonClick = (): void =>{
        if(path === '/SecondStep'){
            router.push('/');
        } else if(path === '/ThirdStep'){
            router.push('/SecondStep');
        } else if(path === '/FourthStep') {
            router.push('/ThirdStep');
        }
    }

    const handleConfirmButtonClick = () => {
        setUser(prevUser => ({...prevUser, isFormConfirmed: true}));
    }

    const currentForm = () =>{
        if(path === '/SecondStep'){
            return "SecondStepForm";
        } else if(path === '/ThirdStep'){
            return "ThirdStepForm";
        } else if(path === '/FourthStep') {
            return "FourthStepForm";
        } else if(path === '/'){
            return "FirstStepForm"
        }
    }

    return ( 
        <div className=" flex bg-White  w-full p-4 justify-between mt-auto">
            {!(path === '/') ? <button onClick={handleButtonClick} className="font-Regular text-base border-none text-Light-gray ">Go Back</button> : <div></div>}
            {path === '/FourthStep' ? <button onClick={handleConfirmButtonClick} className="bg-Purplish-blue text-White font-Regular text-sm p-4 rounded-md">Confirm</button> : (
                <button 
                    form={currentForm()}
                    type="submit" 
                    className="rounded-md bg-Marine-blue text-White font-Regular text-sm p-4"
                >
                    Next step
                </button>
            )}
        </div>
     );
}
 
export default Footer;