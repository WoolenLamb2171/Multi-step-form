'use client'
import { useContext } from "react";
import FourthStepWindowHeader from "./FourthStepWindowHeader";
import { User, UserContext } from "./ContextProvider";
import { useRouter } from "next/navigation";



const FourthStepWindow = () => {
    const {user, setUser} = useContext(UserContext);
    const router = useRouter()

    function getTotal(user: User) {
        let isMonthly = false; 
        
        const basePriceMap: {[key: string]: number } = {
            "yearly Arcade": 90,
            "monthly Arcade": 9,
            "yearly Advanced": 120,
            "monthly Advanced": 12,
            "yearly Pro": 150,
            "monthly Pro": 15,
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

    const handleButtonClick = () =>{
        setUser(prevUser => ({...prevUser, onlineService: false, largerStorage: false, customizableProfile: false, billingType: ""}))
        router.push('/SecondStep')
    }

    return ( 
        <div className="z-10 bg-White py-4 px-3 rounded-lg mt-[10%] w-[94%]">
        {user.isFormConfirmed ? 
            <div>
                <h1>Form confirmed</h1>
            </div> 
        : <>
            <FourthStepWindowHeader />
            <div className="bg-Light-gray py-4 px-3 rounded-lg mt-[10%] w-[94%]">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-Medium text-Marine-blue text-base">
                            {`${user.billingType.split(' ').pop()} (${isMonthly ? "Monthly" : "Yearly"})`}
                        </p>
                        <button onClick={handleButtonClick} className="underline font-Regular text-Cool-gray text-sm" >Change</button>
                    </div>

                    <p className="font-Medium text-Marine-blue text-base">
                        {`${basePrice}/${isMonthly ? "mo" : "yr"}`}
                    </p>
                </div>
                <hr className="h-px my-3 bg-Cool-gray border-0" />
                {selectedOptions.map((el) => {
                    return (<div className="flex items-center justify-between"> 
                        <p className="font-Regular text-Cool-gray" id={el}>{el.toString()}</p> 
                        <p className="font-Regular text-Marine-blue text-base">{isMonthly ? `+${additionalMonthlyPrices[el]}/mo` : `+${additionalYearlyPrices[el]}/yr`}</p>
                    </div>)
                })}
            </div>

            <div className="flex items-center justify-between py-4 px-3 w-[94%]">
                <p className="font-Regular text-Cool-gray">Total {isMonthly ? "(per month)" : "(per year)"}</p>
                <p className="font-Medium text-Purplish-blue text-lg">{`+${total}/${isMonthly ? "mo" : "yr"}`}</p>
            </div>
        </>}
        </div> 
    );
}
 
export default FourthStepWindow;