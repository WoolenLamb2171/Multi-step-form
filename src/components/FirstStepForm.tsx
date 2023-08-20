"use client"
import { useForm } from "react-hook-form";

interface FormData {
    email: string;
    phoneNumber: string;
    name: string;
}

const FirstStepForm = () => {
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset,
        getValues
    } = useForm<FormData>({
        mode: "onBlur"
    })

    const onSubmit = (data: FormData): void =>{
        alert("first form is submitted");
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <h1 className="font-Bold text-Marine-blue text-2xl mb-4">Personal Info</h1>
            <p className="font-Regular text-Cool-gray text-base mb-4">Please provide your name, emil address and phone nuber.</p>

            <form id="FirstStepForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between">
                    <label className="font-Regular text-xs text-blue-900" htmlFor="name">Name</label>
                    <div>{errors?.name && <p className="font-Regular text-xs text-Strawberry-red">{errors?.name?.message || "Error!"}</p>}</div>
                </div>
                
                <input className="w-full border border-Light-gray rounded-md text-Cool-gray font-Medium text-base p-3 mb-4" 
                    placeholder="e.g. Stephen King" 
                    {...register('name', {
                        required: 'Fill in the form.',
                    })}
                    name="name" 
                    type="text"
                />

                <div className="flex justify-between">
                    <label className="font-Regular text-xs text-blue-900" htmlFor="email">Email Address</label>
                    <div>{errors?.email && <p className="font-Regular text-xs text-Strawberry-red">{errors?.email?.message || "Error!"}</p>}</div>
                </div>

                <input className="w-full border border-Light-gray rounded-md text-Cool-gray font-Medium text-base p-3 mb-4" 
                    placeholder="e.g stephenking@lorem.com" 
                    {...register('email', {
                        required: 'Fill in the form.',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Invalid e-mail format.'
                        }
                    })}
                    name="email" 
                    type="email"
                />

                <div className="flex justify-between">
                    <label className="font-Regular text-xs text-blue-900" htmlFor="phoneNumber">Phone Number</label>
                    <div>{errors?.phoneNumber && <p className="font-Regular text-xs text-Strawberry-red">{errors?.phoneNumber?.message || "Error!"}</p>}</div>
                </div>

                <input className="w-full border border-Light-gray rounded-md text-Cool-gray font-Medium text-base p-3 mb-4" 
                    placeholder="e.g. +1-234-567-890" 
                    {...register('phoneNumber', {
                        required: 'Fill in the form.',
                        pattern: {
                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                            message: 'Invalid phone number format.'
                        }                    
                    })}
                    type="tel"
                    name="phoneNumber" 
                />
            </form>
        </div> 
    );
}
 
export default FirstStepForm;