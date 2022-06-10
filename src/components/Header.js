import React from 'react';
import {ShoppingBagIcon} from '@heroicons/react/outline'

function Header(props) {
    return (
        <header className="relative bg-white">
            <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-gray-200">
                    <div className="h-16 flex items-center">
                        {/* Logo */}
                        <div className="flex">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        {/* Cart */}
                        <div className="flow-root ml-auto">
                            <a href="#" className="group -m-2 p-2 flex items-center">
                                <ShoppingBagIcon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                />
                                <span
                                    className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                <span className="sr-only">items in cart, view bag</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;