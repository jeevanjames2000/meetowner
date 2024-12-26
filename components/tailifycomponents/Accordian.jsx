'use client';
import React, { useState } from "react";

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full space-y-1">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-[#C2C2C2] shadow-sm"
                >
                    <div
                        className="flex items-center justify-between px-4 py-2 cursor-pointer"
                        onClick={() => handleToggle(index)}
                    >
                        <div className="flex items-center">
                            <span className="mr-2">{item.emoji}</span>
                            <span className="font-medium text-[#00609E] font-Montserrat">{item.value}</span>
                        </div>
                        <svg
                            className={`w-5 h-5 transition-transform transform ${activeIndex === index ? "rotate-180" : ""
                                }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? "max-h-screen" : "max-h-0"
                            }`}
                    >
                        <div className="px-4 py-2 text-gray-600">{item.description}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
