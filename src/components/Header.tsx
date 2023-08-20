import mobileBg from "../../public/images/bg-sidebar-mobile.svg"
import Image from "next/image";

const Header = () => {
    return ( 
        <div className="flex justify-center items-center ">
            <Image src={mobileBg} alt="back ground for sideBar" className="w-full x z-0 absolute"/>
            <p className="z-10 text-lg mt-5">test Test test</p>
        </div>
        

    )
}
 
export default Header;