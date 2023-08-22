'use client'
import { useContext } from "react";
import FourthStepWindowHeader from "./FourthStepWindowHeader";
import { UserContext } from "./ContextProvider";

const FourthStepWindow = () => {
    const {user} = useContext(UserContext);

    function getTotal() {
        let total = 0;
        if(user.billingType === "yearly arcade"){
            total += 90;
        }
        if(user.billingType === "monthly arcade"){
            total += 9;
        }
        if(user.billingType === "yearly advanced"){
            total += 120;
        }
        if(user.billingType === "monthly advanced"){
            total += 12;
        }
        if(user.billingType === "yearly pro"){
            total += 150;
        }
        if(user.billingType === "monthly pro"){
            total += 15;
        }
        if(user.customizableProfile && user.billingType.includes("monthly")){
            total+= 2;
        }
        if(user.largerStorage && user.billingType.includes("monthly")){
            total += 2;
        }
        if(user.onlineService && user.billingType.includes("monthly")){
            total += 1;
        }
        if(user.customizableProfile && !user.billingType.includes("monthly")){
            total += 20;
        }
        if(user.largerStorage && !user.billingType.includes("monthly")){
            total += 20;
        }
        if(user.onlineService && !user.billingType.includes("monthly")){
            total += 10;
        }
        return total; 
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <FourthStepWindowHeader />
            <p>{getTotal()}</p>
        </div> 
    );
}
 
export default FourthStepWindow;