import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MyToast } from './MyToast';
import {getPortfolioDetailData} from '../services/PortfolioDetailsService';

function BodyCards() {
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        getPortfolioDetailData()
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                // throw error here
                return response.json().then(e => { throw new Error(e.message) });
            })
            .then((data) => {
                if (data) {
                    console.log(data.portfolio);
                    setCardsData(data.portfolio);
                }
            })
            .catch((error) => {
                console.log(error.message);
                toast.error(error.message);
            });
    }, [])
    return (
        <>
            <MyToast />
            <div className='pb-4 mb-5'>
                {
                    cardsData && cardsData.map((value, index) => {
                        return (
                            <div style={{ borderRadius: '8px', padding: '16px 15px 16px 15px', border: '1.5px solid #E9DCFA', marginTop: "15px" }} key={index}>
                                <div>
                                    <p style={{ color: '#1C1D21', fontSize: '14px', fontWeight: 600 }}>{value.scheme_name}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ color: '#8181A5', fontSize: '10px', fontWeight: 500 }}>Current Value</p>
                                    <p style={{ color: '#41C0D2', fontSize: '12px', fontWeight: 700 }}>$ {value.current_value}</p>
                                    <p style={{ color: '#8181A5', fontSize: '10px', fontWeight: 500 }}>Units</p>
                                    <p style={{ color: '#1C1D21', fontSize: '12px', fontWeight: 700 }}>{value.units}</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p style={{ color: '#8181A5', fontSize: '10px', fontWeight: 500 }}>Folio Number</p>
                                    <p style={{ color: '#5516AA', fontSize: '12px', fontWeight: 700 }}>{value.folio_number}</p>
                                    <p style={{ color: '#8181A5', fontSize: '10px', fontWeight: 500 }}>Nav</p>
                                    <p style={{ color: '#5516AA', fontSize: '12px', fontWeight: 700 }}>{value.nav}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export { BodyCards };