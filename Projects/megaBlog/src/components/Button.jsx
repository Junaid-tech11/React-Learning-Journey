import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#06b6d4]",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button

            className={`px-4 py-2 rounded-lg font-semibold shadow-sm ${bgColor} ${textColor} ${className}

            
            hover:opacity-90

            
            active:scale-95 active:opacity-100

            
            transition-all duration-150 ease-in-out

        
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-gray-900
            `}
            {...props}
        >
            {children}
        </button>
    );
}