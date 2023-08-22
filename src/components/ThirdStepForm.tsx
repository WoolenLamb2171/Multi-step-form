'use client';
import { useForm } from "react-hook-form";
import ThirdStepFormHeader from "./ThirsStepFormHeader";

const ThirdStepForm = () => {
    interface FormData {
        addsOns: string
    }

    const {register, getValues} = useForm<FormData>();

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <ThirdStepFormHeader />

        </div> 
    );
}
 
export default ThirdStepForm;