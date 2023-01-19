import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {useNavigate} from 'react-router-dom';

function SubNavbar() {
    const navigate = useNavigate();
  return (
    <div className='p-4 d-flex align-items-base' onClick={()=>navigate('/')}>
        <IoIosArrowBack fontSize={"25px"} color={"#1C1D21"}/>&nbsp;
        <p style={{color:'#1C1D21',fontSize:'14px'}}>Back</p>
    </div>
  )
}

export {SubNavbar};