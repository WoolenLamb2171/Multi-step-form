'use client';
import { useForm } from "react-hook-form";
import ThirdStepFormHeader from "./ThirsStepFormHeader";
interface FormData {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
}

const ThirdStepForm = () => {

    const {register, getValues, handleSubmit} = useForm<FormData>();

    const handleThirdFormSubmit = () =>{
        alert(`onlineService:  ${getValues('onlineService')} largerStorage: ${getValues('largerStorage')} customizableProfile: ${getValues('customizableProfile')}`);
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <ThirdStepFormHeader />
            <form id="ThirdStepForm" onSubmit={handleSubmit(handleThirdFormSubmit)}>
                <div>
                    <input type='checkbox' {...register('onlineService')} />
                </div>

                <div>
                    <input type='checkbox' {...register('largerStorage')} />
                </div>

                <div>
                    <input type='checkbox' {...register('customizableProfile')} />
                </div>
            </form>
        </div> 
    );
}
 
export default ThirdStepForm;