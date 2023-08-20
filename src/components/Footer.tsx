'use client'
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Footer = () => {
    const path = usePathname();
    const router = useRouter();

    const handleButtonClick = (): void =>{
        if(path === '/SecondStep'){
            router.push('/');
        } else if(path === '/ThirdStep'){
            router.push('/SecondStep');
        } else if(path === 'FourthStep') {
            router.push('/ThirdStep');
        }
    }

    return ( 
        <div className=" flex bg-White  w-full p-4 justify-between mt-auto">
            {!(path === '/') ? <button onClick={handleButtonClick} className="font-Regular text-base border-none text-Light-gray ">Go Back</button> : <div></div>}
            <button form="FirstStepForm" type="submit" className="rounded-sm bg-Marine-blue text-White font-Regular text-base p-1">Next step</button>
        </div>
     );
}
 
export default Footer;