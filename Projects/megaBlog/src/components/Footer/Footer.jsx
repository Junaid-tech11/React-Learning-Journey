import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (

        <section className="relative overflow-hidden py-10 bg-[#0f172a] border-t border-gray-700 font-medium">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <div className="w-16">
                                    <Logo width="100%" />
                                </div>
                                <span className="ml-4 text-2xl font-bold text-white tracking-wide">
                                    InkFlow
                                </span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">
                                    &copy; 2026 InkFlow. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                            Company
                        </h3>
                        <ul className="space-y-4">
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Features</Link></li>
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Pricing</Link></li>
                        </ul>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                            Support
                        </h3>
                        <ul className="space-y-4">
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Account</Link></li>
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Help</Link></li>
                        </ul>
                    </div>

                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <h3 className="tracking-px mb-6 text-xs font-semibold uppercase text-gray-400">
                            Legals
                        </h3>
                        <ul className="space-y-4">
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Privacy Policy</Link></li>
                            <li><Link className="text-base text-gray-300 hover:text-[#06b6d4] transition-colors" to="/">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer