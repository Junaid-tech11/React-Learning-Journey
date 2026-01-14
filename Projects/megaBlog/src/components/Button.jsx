import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-[#06b6d4]", // Default Brand Cyan
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            // ✅ Changed shadow-md to shadow-sm for a flatter look
            className={`px-4 py-2 rounded-lg font-semibold shadow-sm ${bgColor} ${textColor} ${className}

            /* ✨ SIMPLE HOVER: Just slightly transparent, no brightness boost */
            hover:opacity-90

            /* 👆 CLICK (ACTIVE): The important part. It physically shrinks when pressed. */
            active:scale-95 active:opacity-100

            /* 🎬 SMOOTH TRANSITION for the click effect */
            transition-all duration-150 ease-in-out

            /* focus logic remains the same */
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 dark:focus:ring-offset-gray-900
            `}
            {...props}
        >
            {children}
        </button>
    );
}