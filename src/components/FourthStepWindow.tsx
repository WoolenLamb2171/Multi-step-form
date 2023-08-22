'use client'
import { useContext } from "react";
import FourthStepWindowHeader from "./FourthStepWindowHeader";
import { User, UserContext } from "./ContextProvider";


const FourthStepWindow = () => {
    const {user} = useContext(UserContext);

    function getTotal(user: User): number {
        const basePriceMap = {
            "yearly arcade": 90,
            "monthly arcade": 9,
            "yearly advanced": 120,
            "monthly advanced": 12,
            "yearly pro": 150,
            "monthly pro": 15,
        };
    
        const additionalMonthlyPrices = {
            customizableProfile: 2,
            largerStorage: 2,
            onlineService: 1,
        };
    
        const additionalYearlyPrices = {
            customizableProfile: 20,
            largerStorage: 20,
            onlineService: 10,
        };
    
        let total = basePriceMap[user.billingType] || 0;
    
        if (user.billingType.includes("monthly")) {
            total += Object.keys(additionalMonthlyPrices)
                .filter(option => user[option])
                .reduce((sum, option) => sum + additionalMonthlyPrices[option], 0);
        } else {
            total += Object.keys(additionalYearlyPrices)
                .filter(option => user[option])
                .reduce((sum, option) => sum + additionalYearlyPrices[option], 0);
        }
    
        return total;
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <FourthStepWindowHeader />
            <p>{getTotal(user)}</p>
        </div> 
    );
}
 
export default FourthStepWindow;