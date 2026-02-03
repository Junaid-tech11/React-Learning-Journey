import React from 'react'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <div>
            <main>
                <Outlet /> {/* This is where Dashboard or UserDetail will appear */}
            </main>
        </div>
    )
}

export default Layout 