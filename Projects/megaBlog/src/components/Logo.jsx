import React from 'react'
import logoSrc from '../assets/logo.png' // <--- 1. Import the image file

function Logo({ width = '100px' }) {
    return (
        <div>
            {/* 2. Use the variable in the src, NOT a string */}
            <img src={logoSrc} style={{ width }} alt="Logo" />
        </div>
    )
}

export default Logo