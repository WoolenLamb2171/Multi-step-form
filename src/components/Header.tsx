'use client'
import mobileBg from "../../public/images/bg-sidebar-mobile.svg"
import Image from "next/image";
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathName = usePathname()

    return ( 
        <div className="flex justify-center items-center ">
            <Image src={mobileBg} alt="back ground for sideBar" className="w-full x z-0 absolute"/>
            <div className="z-10 flex text-lg mt-7">
                <div className={`text-White font-Regular text-sm border-White border mx-2 py-1 px-2.5 rounded-full ${pathName === "/" && "bg-Light-blue"}`}>1</div>
                <div className={`text-White font-Regular text-sm border-White border mx-2 py-1 px-2.5 rounded-full ${pathName === "/SecondStep" && "bg-Light-blue"}`}>2</div>
                <div className={`text-White font-Regular text-sm border-White border mx-2 py-1 px-2.5 rounded-full ${pathName === "/ThirdStep" && "bg-Light-blue"}`}>3</div>
                <div className={`text-White font-Regular text-sm border-White border mx-2 py-1 px-2.5 rounded-full ${pathName === "/FourthStep" && "bg-Light-blue"}`}>4</div>
            </div>
        </div>
        

    )
}
 
export default Header;