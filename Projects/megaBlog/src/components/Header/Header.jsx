import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ThemeBtn from './ThemeBtn'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: 'Login', slug: "/login", active: !authStatus },
        { name: 'Signup', slug: "/signup", active: !authStatus },
        { name: 'All Posts', slug: "/all-posts", active: authStatus },
        { name: 'Add Post', slug: "/add-post", active: authStatus },
    ]

    return (
        // ✅ STYLE FIX: Always dark background (brand-dark) with blur effect
        <header className='py-4 shadow-lg sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-700'>
            <Container>
                <nav className='flex items-center justify-between'>
                    <div className='mr-4'>
                        <Link to='/'>
                            {/* Logo wrapper */}
                            <div className="w-24 hover:scale-105 transition-transform duration-200">
                                <Logo width='100%' />
                            </div>
                        </Link>
                    </div>

                    <ul className='flex ml-auto items-center space-x-4'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        // ✅ STYLE FIX: White text with Cyan hover glow
                                        className='inline-block px-4 py-2 duration-200 text-gray-200 hover:text-[#06b6d4] hover:bg-white/5 rounded-full font-medium transition-all'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}

                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}

                        {/* Theme Toggle Separator */}
                        <li className="pl-4 border-l border-gray-600">
                            <ThemeBtn />
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header