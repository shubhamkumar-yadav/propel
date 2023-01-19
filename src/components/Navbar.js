import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';

function Navbar() {
    return (
        <div className='d-flex px-4 pt-4 pb-2 justify-content-between'>
            <p className='fw-bold fs-5' style={{color:'#8181A5'}}>Welcome <span style={{color:'#36383F'}}>Rahul</span></p>
            <IoNotificationsOutline style={{fontSize:"23px",color:'#5516AA'}} />
        </div>
    )
}

export { Navbar };