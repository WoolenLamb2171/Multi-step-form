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

    return ( 
        <div>
            <h1>Personal Info</h1>
            <p>Please provide your name, emil address and phone nuber.</p>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <div>{errors?.name && <p className="text-red-600">{errors?.name?.message || "Error!"}</p>}</div>
                </div>
                
                <input {...register('name', {
                    required: 'Fill in the form.',
                })}
                    name="name" 
                    type="text"
                />

                <div>
                    <label htmlFor="email">Email Address</label>
                    <div>{errors?.email && <p className="text-red-600">{errors?.email?.message || "Error!"}</p>}</div>
                </div>

                <input {...register('email', {
                    required: 'Fill in the form.',
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Invalid e-mail format.'
                    }
                })}
                    name="email" 
                    type="email"
                />

                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div>{errors?.phoneNumber && <p className="text-red-600">{errors?.phoneNumber?.message || "Error!"}</p>}</div>
                </div>

                <input {...register('phoneNumber', {
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