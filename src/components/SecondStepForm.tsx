'use client'
import { useRouter } from "next/navigation";
import SecondStepFormHeader from "./SecondStepFormHeader";
import Image from "next/image";
import advancedIcon from "../../public/images/icon-advanced.svg";
import arcadeIcon from "../../public/images/icon-arcade.svg";
import proIcon from "../../public/images/icon-pro.svg"
import { FormEvent, useContext, useState } from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { User, UserContext } from "./ContextProvider";

interface FormData {
    "billing-type": string
}

const SeconsStepForm = () => {
    const router = useRouter();
    const [isSelected, setIsSelected] = useState(false);
    const {setUser, user} = useContext(UserContext);
    const {register, handleSubmit, getValues} = useForm<FormData>({
        defaultValues: {
          "billing-type": ""
        },
        mode: "onChange"
    });

    const handleSecondFormSubmit = () =>{
        if(getValues("billing-type") !== ""){
            setUser({...user, billingType: getValues("billing-type")});
            router.push('/ThirdStep');
        } else{
            alert("Select the option");
        }
        
    }

    return ( 
    <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
        <SecondStepFormHeader />
        <form className="w-full" id="SecondStepForm" onSubmit={handleSubmit(handleSecondFormSubmit)}>
            <fieldset>

                <div className="relative mb-4">
                    <input {...register("billing-type")} className="opacity-0 cursor-pointer absolute h-full w-full m-0 z-20 peer/firstButton" id="firstButton" value={isSelected ? "yearly Arcade" : "monthly Arcade"} type="radio"/>
                    <div className="border border-Light-gray rounded-md peer-checked/firstButton:border-Purplish-blue peer-checked/firstButton:bg-Magnolia">
                        <label className="flex justify-start items-start p-3"  htmlFor="firstButton">
                            <Image className="mr-3" width={45} src={arcadeIcon} alt="Arcade icon"/>
                            <div>
                                <h1 className="font-Medium text-Marine-blue text-base">Arcade</h1>
                                <p className="font-Regular text-Cool-gray">{isSelected ? "$90/yr" : "$9/mo"}</p>
                                {isSelected && <p className="font-Regular text-blue-900 text-xs">2 months free</p>}
                            </div>
                        </label>
                    </div>

                </div>

                <div className="relative mb-4"> 
                    <input {...register("billing-type")}  className="opacity-0 cursor-pointer absolute h-full w-full m-0 z-20 peer/secondButton" type="radio" id="secondButton" value={isSelected ? "yearly Advanced" : "monthly Advanced"}/>
                    <div className="border border-Light-gray rounded-md peer-checked/secondButton:border-Purplish-blue peer-checked/secondButton:bg-Magnolia">
                        <label className="flex justify-start items-start p-3" htmlFor="secondButton">
                            <Image className="mr-3" width={45} src={advancedIcon} alt="Advanced icon" />
                            <div>
                                <h1 className="font-Medium text-Marine-blue text-base">Advanced</h1>
                                <p className="font-Regular text-Cool-gray">{isSelected ? "$120/yr" :  "$12/mo"}</p>
                                {isSelected && <p className="font-Regular text-blue-900 text-xs">2 months free</p>}
                            </div>
                        </label>
                    </div>
                </div>

                <div className="relative mb-4">
                    <input {...register("billing-type")}  className="opacity-0 cursor-pointer absolute h-full w-full m-0 z-20 peer/thirdButton" type="radio"  id="thirdButton" value={isSelected ? "yearly Pro" : "monthly Pro"}/>
                    <div className="border border-Light-gray rounded-md peer-checked/thirdButton:border-Purplish-blue peer-checked/thirdButton:bg-Magnolia">
                        <label className="flex justify-start items-start p-3" htmlFor="thirdButton">
                            <Image className="mr-3" width={45}  src={proIcon} alt="Pro icon" />
                            <div>
                                <h1 className="font-Medium text-Marine-blue text-base">Pro</h1>
                                <p className="font-Regular text-Cool-gray">{isSelected ? "$150/yr" : "$15/mo"}</p>
                                {isSelected && <p className="font-Regular text-blue-900 text-xs">2 months free</p>}
                            </div>
                        </label>
                    </div>
                </div>
            </fieldset>
        </form>

        <div className="w-full bg-Magnolia py-4 px-14 rounded-md flex justify-between items-center">
            <p className={classNames("text-Cool-gray transition-all duration-100", {
                'text-Marine-blue': !isSelected,
            })}>Monthly</p>
            <button onClick={() => setIsSelected(!isSelected)} className="flex w-[45px] h-[20px] bg-Marine-blue rounded-full items-center">
                <span className={classNames("h-[21px] w-[21px] bg-White rounded-full transition-all duration-100", {
                    'ml-[24px]': isSelected,
                })} />
            </button>
            <p className={classNames("text-Cool-gray transition-all duration-100", {
                'text-Marine-blue': isSelected,
            })}>Yearly</p>
        </div>
    </div> 
    );
}
 
export default SeconsStepForm;