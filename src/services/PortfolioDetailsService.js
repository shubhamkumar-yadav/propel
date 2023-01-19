import {get_all_portfolio_details_api} from './api';

export function getPortfolioDetailData (){
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        mode: 'cors'
    };
    return fetch(get_all_portfolio_details_api, requestOptions);
}