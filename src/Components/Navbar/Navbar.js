import React from 'react';
import NavbarMenu from './NavbarMenu';
import NavbarTop from './NavbarTop';
import useWindowSize from './useWindowSize';


const Navbar = () => {
    const size = useWindowSize(); 
    return (
        <div>
            <NavbarTop />
            { size  >= 1280 &&<NavbarMenu />}
        </div>
    );
};

export default Navbar;