import React from 'react';
import { BottomNavbar } from '../components/BottomNavbar';
import { Navbar } from '../components/Navbar';
import { Body } from '../components/Body';

function Home() {
    return (
        <>
            <Navbar />
            <div className='px-4'>
                <Body />
            </div>
            <BottomNavbar />
        </>
    )
}

export { Home };