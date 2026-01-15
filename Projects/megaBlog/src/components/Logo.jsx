import React from 'react'
import logoSrc from '../assets/logo.png'

function Logo({ width = '100px' }) {
    return (
        <div>


            <img src={logoSrc} style={{ width }} alt="Logo" />
        </div>
    )
}

export default Logo