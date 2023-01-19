import React, { useState } from 'react';
import { PopUp } from '../components/PopUp';
import { SubNavbar } from '../components/SubNavbar';
import {PopUpContentForUnmarkFund} from '../components/PopUpContentForUnmarkFund';

function UnMarkFunds() {
  const [openUnMarkModel,setOpenUnMarkModel] = useState(false);
  return (
    <>
      <SubNavbar />
      <div className='px-4'>
        <div style={{ lineHeight: .7 }}>
          <p style={{ color: '#1C1D21', fontSize: '24px', fontWeight: 600 }}>Unmark funds as collateral</p>
          <p style={{ color: '#8181A5', fontSize: '14px', fontWeight: 400 }}>Select the funds you wish to unmark as collateral.</p>
        </div>
        <p style={{ fontWeight: 600, fontSize: 16, color: '#8181A5' }}>List of mututal funds-</p>
      </div>
      <div className='px-4'>
        <div className='d-flex align-items-base' style={{gap:'13px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',borderRadius:'8px',padding:15,paddingTop:27}}>
          <div>
            <input type="checkbox" className="form-check-input" style={{height:'24px',width:'24px',borderRadius:'4px'}} />
          </div>
          <div style={{lineHeight:.7}}>
            <p style={{ color: '#1C1D21', fontSize: '12px', fontWeight: 500 }}>SBI Mutual Fund</p>
            <p style={{ color: '#8181A5', fontSize: '12px', fontWeight: 500 }}>Marked value ₹ 50000</p>
          </div>
        </div>
      </div>
      <div className='position-absolute bottom-0 w-100 py-3 bg-white' style={{boxShadow: '0px -4px 16px 0px #5516AA26'}}>
        <div className='d-flex justify-content-between px-4'>
          <p style={{color:'#36383F',size:'14px',fontWeight:500}}>New Credit Line Value</p>
          <p style={{color:'#1C1D21',size:'14px',fontWeight:700}}>₹ 23000</p>
        </div>
        <div className='px-4'>
          <PopUp openUnMarkModel={openUnMarkModel} content={<PopUpContentForUnmarkFund setOpenUnMarkModel={setOpenUnMarkModel}/>} triggerButton={<button className='btn w-100 text-white' style={{background:'#EF4F53',borderRadius:'150px',padding:'16px'}}>Unmark funds</button>}/>
        </div>
      </div>
    </>
  )
}

export { UnMarkFunds };