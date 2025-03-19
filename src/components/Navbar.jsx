import React from 'react';

const Navbar = () => {
    return (
        <div className="flex items-center justify-end space-x-4 text-sm py-4 mb-5 border-b border-b-gray-300 px-6">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Login
            </button>
            <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Sign Up
            </button>
        </div>
    );
}

export default Navbar;
