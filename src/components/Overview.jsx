import React, { useState } from 'react';
import RevenueCard from "./RevenueCard"; 
import PayoutCard from './PayoutCard';

function OverView() {
    const buttonValue = {
        present: "This month",
        dropdown: ["This month","Past month", "Past 3 months", "Past 6 months"] 
    };

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(buttonValue.present);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelect = (value) => {
        setSelectedValue(value);
        setDropdownOpen(false);
    };

    return (
        <div className='grid gap-6'>
            <div className='flex justify-between items-center'>
                <div className="text-xl font-medium">Overview</div>
                <div className="relative flex h-10 ml-auto mr-4 justify-end items-center pl-3.5 pr-3.5 rounded border border-black-150 cursor-pointer" onClick={toggleDropdown}>
                    <p className='pr-3'>{selectedValue}</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z" fill="#4D4D4D" />
                    </svg>
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                            {buttonValue.dropdown.map((option, index) => (
                                <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSelect(option)}>
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <PayoutCard title={"Next payout"} amount={"2,312.23"} orders={23} />
                <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orders={13} />
                <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
            </div>
        </div>
    )
}

export default OverView;
