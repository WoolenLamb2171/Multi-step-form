'use client'
import { useContext } from "react";
import FourthStepWindowHeader from "./FourthStepWindowHeader";
import { User, UserContext } from "./ContextProvider";
import Link from "next/link";



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
        let selectedOptions: string[] = [];
        
        if (user.billingType.includes("monthly")) {
            isMonthly = true;
            selectedOptions = Object.keys(additionalMonthlyPrices).filter(option => user[option]);
            additionalPrices += selectedOptions.reduce((sum, option) => sum + additionalMonthlyPrices[option], 0);
        } else {
            selectedOptions = Object.keys(additionalYearlyPrices).filter(option => user[option]);
            additionalPrices += selectedOptions.reduce((sum, option) => sum + additionalYearlyPrices[option], 0);
        }
    
        let total = basePrice + additionalPrices;
    
        return { basePrice, additionalPrices, total, isMonthly, selectedOptions, basePriceMap, additionalMonthlyPrices, additionalYearlyPrices };
    }
    

    const {basePrice, total, isMonthly, selectedOptions, additionalMonthlyPrices, additionalYearlyPrices} = getTotal(user);

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
            <FourthStepWindowHeader />
            <div className="bg-Light-gray py-4 px-3 rounded-lg mt-[10%] w-[94%]">
                <div>
                    <div>
                        <p>
                            {`${user.billingType[1]} (${isMonthly ? "Monthly" : "Yearly"})`}
                        </p>
                        <Link href="/SecondStep">Change</Link>
                    </div>

                    <p>
                        {`${basePrice}/${isMonthly ? "mo" : "yr"}`}
                    </p>
                </div>
                <hr className="h-px my-8 bg-Cool-gray border-0" />
                {selectedOptions.map((el) => {
                    return (<div> 
                        <p id={el}>{el.toString()}</p> 
                        <p>{isMonthly ? `+${additionalMonthlyPrices[el]}/mo` : `+${additionalYearlyPrices[el]}/yr`}</p>
                    </div>)
                })}
            </div>
            <div>
                <p>Total {isMonthly ? "(per month)" : "(per year)"}</p>
                <p>{`+${total}/${isMonthly ? "mo" : "yr"}`}</p>
            </div>
        </div> 
    );
}
 
export default FourthStepWindow;