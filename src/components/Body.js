import React from 'react';
import { BodyCards } from './BodyCards';
import {useNavigate} from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ borderRadius: '8px', lineHeight: .6, padding: '16px 15px 16px 15px' }}>
        <p style={{ color: '#696D7C', fontSize: '12px' }}>Total portfolio value</p>
        <p style={{ color: '#41C0D2', fontWeight: 600, fontSize: 24 }}>₹ 1500000.00</p>
      </div>
      <div className='d-flex justify-content-between align-items-center' style={{ borderRadius: '8px', padding: '16px 15px 16px 15px', border: '1.5px solid #E9DCFA', marginTop: "15px" }}>
        <div style={{ lineHeight: .6 }}>
          <p style={{ color: '#696D7C', fontSize: '12px' }}>Loan to Value</p>
          <p style={{ color: '#5516AA', fontWeight: 600, fontSize: 24 }}>Healthy!!</p>
        </div>
        <div>
          <button className='btn' style={{ color: '#41C0D2', background: '#E7F7F9', borderRadius: '150px' }}>Learn more</button>
        </div>
      </div>
      <div style={{ marginTop: '18px' }}>
        <button className='btn w-100 text-white' style={{ backgroundColor: '#5516AA', padding: '16px', borderRadius: '150px' }} onClick={()=>navigate('/portfolioFetch')}>Increase credit limit</button>
      </div>
      <div className='d-flex justify-content-between' style={{ marginTop: '25px' }}>
        <div>
          <p style={{ color: '#8181A5', fontWeight: 600,fontSize:16 }}>Marked mutual funds-</p>
        </div>
        <div>
          <button className='btn' style={{ background: '#FDE9EA', borderRadius: '150px', opacity: '80%', color: '#EF4F53',fontSize:12 }} onClick={()=>navigate('/unmarkFunds')}>Unmark funds</button>
        </div>
      </div>
      <BodyCards/>
    </>
  )
}

export { Body };