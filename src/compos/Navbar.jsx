import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className="bg-[#03045e] px-8 py-4 text-white shadow-md w-full">
            <div className='container mx-auto flex items-center'>

                <div className='text-2xl font-bold pl-0 sm:pl-15 pr-8'>
                    NoteNinja
                </div>
                <div className='flex-grow'></div>
                <div className='flex gap-10 text-lg'>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold transition-colors duration-200":"hover:text-blue-700 transition-colors duration-200"}>
                        Home
                    </NavLink>

                    <NavLink
                        to="/pastes"
                        className={({ isActive }) =>
                            isActive ? "text-blue-300 font-semibold transition-colors duration-200":"hover:text-blue-700 transition-colors duration-200"}>
                        Pastes
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
