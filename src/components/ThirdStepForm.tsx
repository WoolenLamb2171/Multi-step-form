'use client';
import { useForm } from "react-hook-form";
import ThirdStepFormHeader from "./ThirsStepFormHeader";
import { UserContext } from "./ContextProvider";
import { useContext } from "react";
interface FormData {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
}

const ThirdStepForm = () => {
    const {register, getValues, handleSubmit} = useForm<FormData>();
    const {user, setUser} = useContext(UserContext);

    const handleThirdFormSubmit = () =>{
        alert(`onlineService:  ${getValues('onlineService')} largerStorage: ${getValues('largerStorage')} customizableProfile: ${getValues('customizableProfile')}`);
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <ThirdStepFormHeader />
            <form className="w-full" id="ThirdStepForm" onSubmit={handleSubmit(handleThirdFormSubmit)}>
                <div className="relative mb-4">
                    <input type='checkbox' {...register('onlineService')} className="m-0 z-20 peer/onlineService absolute top-[40%] left-2 scale-x-110" id="onlineService"/>
                    <div className="border border-Light-gray rounded-md peer-checked/onlineService:border-Purplish-blue peer-checked/onlineService:bg-Magnolia">
                        <label htmlFor="onlineService" className="flex p-3 items-center justify-between">
                            <div className="ml-4">
                                <h1 className="font-Medium text-Marine-blue text-base">Online Service</h1>
                                <p className="font-Regular text-Cool-gray">Access to multiplayer games</p>
                            </div>
                            <p className="font-Regular text-blue-900 text-xs">{user.billingType.includes("monthly") ? "+$1/mo" : "+$10/yr"}</p>
                        </label>
                    </div>
                </div>

                <div className="relative mb-4">
                    <input type='checkbox' {...register('largerStorage')} className="m-0 z-20 peer/largerStorage absolute top-[40%] left-2 scale-110" id="largerStorage"/>
                    <div className="border border-Light-gray rounded-md peer-checked/largerStorage:border-Purplish-blue peer-checked/largerStorage:bg-Magnolia">
                        <label className="flex p-3 items-center justify-between" htmlFor="largerStorage">
                            <div className="ml-4">
                                <h1 className="font-Medium text-Marine-blue text-base">Larger Storage</h1>
                                <p className="font-Regular text-Cool-gray">Extra 1TB of cloud save</p>
                            </div>
                            <p className="font-Regular text-blue-900 text-xs">{user.billingType.includes("monthly") ? "+$2/mo" : "+$20/yr"}</p>
                        </label>
                    </div>
                </div>

                <div className="relative mb-4">
                    <input type='checkbox' {...register('customizableProfile')} className="m-0 z-20 peer/customizableProfile absolute top-[40%] left-2 scale-110" id="customizableProfile"/>
                    <div className="border border-Light-gray rounded-md peer-checked/customizableProfile:border-Purplish-blue peer-checked/customizableProfile:bg-Magnolia">
                        <label className="flex p-3 items-center justify-between" htmlFor="customizableProfile">
                            <div className="ml-4">
                                <h1 className="font-Medium text-Marine-blue text-base">Customizable Profile</h1>
                                <p className="font-Regular text-Cool-gray">Custom theme on your profile</p>
                            </div>
                            <p className="font-Regular text-blue-900 text-xs">{user.billingType.includes("monthly") ? "+$2/mo" : "+$20/yr"}</p>
                        </label>
                    </div>
                </div>
            </form>
        </div> 
    );
}
 
export default ThirdStepForm;