import React from 'react';
import { SubNavbar } from '../components/SubNavbar';
import { IoIosArrowForward } from 'react-icons/io';

function PortfolioFetch() {
  return (
    <>
      <SubNavbar />
      <div className='px-4'>
        <p style={{ color: '#1C1D21', fontSize: '24px', fontWeight: 600 }}>Increase your credit limit</p>
        <p style={{ color: '#8181A5', fontSize: '14px', fontWeight: 400 }}>Mark additional funds as collateral to increase your credit limit futher.</p>
        <button className='btn w-100 d-flex justify-content-between align-items-baseline' style={{ background: '#F6F0FE', color: '#5516AA', fontWeight: 700, fontSize: 16, padding: '16px 20px', borderRadius: '150px' }}>
          Fetch my Kfin portfolio
          <IoIosArrowForward style={{ background: 'white', borderRadius: '50%', color: '#BC91F6', height: '24px', width: '24px' }} />
        </button>
        <button className='btn w-100 d-flex justify-content-between align-items-baseline mt-4' style={{ background: '#F6F0FE', color: '#5516AA', fontWeight: 700, fontSize: 16, padding: '16px 20px', borderRadius: '150px' }}>
          Fetch my CAMS portfolio
          <IoIosArrowForward style={{ background: 'white', borderRadius: '50%', color: '#BC91F6', height: '24px', width: '24px' }} />
        </button>
      </div>
      <div style={{position:'absolute',bottom:15}} className='px-4'>
        <p style={{ color: '#A1A1BC', fontSize: 12, textAlign: 'center',width:'60%' }} className='mx-auto'>
          Make sure your overall MF portfoli is greater than Rs 25,000.
        </p>
        <button className='btn w-100 mt-4' style={{ background: '#F6F6F6', color: '#898989', fontWeight: 700, fontSize: 16, padding: '16px 20px', borderRadius: '150px' }}>
          Fetch my portfolio
        </button>
      </div>
    </>
  )
}

export { PortfolioFetch };