'use client'
import { useContext } from "react";
import FourthStepWindowHeader from "./FourthStepWindowHeader";
import { User, UserContext } from "./ContextProvider";


const FourthStepWindow = () => {
    const {user} = useContext(UserContext);

    function getTotal(user: User) {
        let isMonthly = false;
        const basePriceMap: {[key: string]: number } = {
            "yearly arcade": 90,
            "monthly arcade": 9,
            "yearly advanced": 120,
            "monthly advanced": 12,
            "yearly pro": 150,
            "monthly pro": 15,
        };
    
        const additionalMonthlyPrices: Record<string, number> = {
            customizableProfile: 2,
            largerStorage: 2,
            onlineService: 1,
        };
    
        const additionalYearlyPrices: Record<string, number> = {
            customizableProfile: 20,
            largerStorage: 20,
            onlineService: 10,
        };
     
        let basePrice = basePriceMap[user.billingType] || 0;
        let additionalPrices = 0;
    
        if (user.billingType.includes("monthly")) {
            isMonthly = true;
            additionalPrices += Object.keys(additionalMonthlyPrices)
                .filter(option => user[option])
                .reduce((sum, option) => sum + additionalMonthlyPrices[option], 0);
        } else {
            additionalPrices += Object.keys(additionalYearlyPrices)
                .filter(option => user[option])
                .reduce((sum, option) => sum + additionalYearlyPrices[option], 0);
        }

        let total = basePrice + additionalPrices;
    
        return {basePrice, additionalPrices, total, isMonthly};
    }

    const {basePrice, additionalPrices, total, isMonthly} = getTotal(user);

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <FourthStepWindowHeader />
            <div>

            </div>
        </div> 
    );
}
 
export default FourthStepWindow;