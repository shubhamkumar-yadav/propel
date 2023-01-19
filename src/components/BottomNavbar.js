import React from 'react';
import BottomNavigation from 'reactjs-bottom-navigation';
import 'reactjs-bottom-navigation/dist/index.css';
import {AiOutlineHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {IoIosTimer} from 'react-icons/io';


function BottomNavbar() {
    // items
  
    const bottomNavItems = [
      {
        title: 'Home',
  
        icon: <AiOutlineHome style={{ fontSize: '23px',color:'#898989' }} />,
  
        activeIcon: <AiOutlineHome style={{ fontSize: '23px', color: '#5516AA' }} />
      },
  
      {
        title: 'Portfolio',
  
        icon: <IoIosTimer style={{ fontSize: '23px',color:'#898989' }} />,
  
        activeIcon: <IoIosTimer style={{ fontSize: '23px', color: '#5516AA' }} />
      },
  
      {
        title: 'Profile',
  
        icon: <CgProfile style={{ fontSize: '23px',color:'#898989' }} />,
  
        activeIcon: <CgProfile style={{ fontSize: '23px', color: '#5516AA' }} />
      }
    ]
  
    return (
      <div>
        <BottomNavigation
          items={bottomNavItems}
          defaultSelected={0}
          onItemClick={(item) => console.log(item)}
        />
      </div>
    )
  }
export {BottomNavbar};