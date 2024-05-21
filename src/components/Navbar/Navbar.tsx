
import React from 'react';

  const Navbar = () => {
    return (
      <nav className="bg-darkgreen shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-30 w-30 mr-3"
                  src="src/assets/Brand.svg"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="bg-white text-customColor px-3 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;
