import React from 'react';
import unMarkModelPic from '../assets/images/unMarkModelPic.png';



function PopUpContentForUnmarkFund({setOpenUnMarkModel}) {

  return (
    <div>
      <p style={{ color: '#1C1D21', fontWeight: 600, fontSize: '24px', textAlign: 'center' }}>
        Are you sure you want to unmark these funds as collateral?
      </p>
      <div className='d-flex justify-content-center'>
        <img src={unMarkModelPic} alt="unMarkModelPic" />
      </div>
      <p className='text-center'>
        <span style={{ fontWeight: 400, fontSize: '12x', color: '#8181A5' }}>Your Credit line value will decrease.</span><br />
        <span style={{ fontWeight: 400, fontSize: '14px', color: '#040919' }}>New Credit Line Value <b>₹ 23000</b></span>
      </p>
      <div className='d-flex gap-2 justify-content-center'>
        <button className='btn w-100' style={{ background: '#E9DCFA', color: '#5516AA', fontWeight: 700, fontSize: '16px', borderRadius: '150px' }} onClick={()=>setOpenUnMarkModel(false)}>Go back</button>
        <button className='btn w-100' style={{ background: '#EF4F53', color: '#fff', fontWeight: 700, fontSize: '16px', borderRadius: '150px' }}>Confirm</button>
      </div>
    </div>
  )
}

export { PopUpContentForUnmarkFund };