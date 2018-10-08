import * as actionTypes from './actionTypes';

export const fetchRatesSuccess = rates => ({
  type: actionTypes.FETCH_RATES_SUCCESS,
  payload: { rates }
});

export const fetchRatesError = error => ({
  type: actionTypes.FETCH_RATES_FAILURE,
  payload: { error }
});

export function fetchRates() {
        console.log('fetchRates!');
        let header = new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
        });
        let sendData = {
            mode: 'cors',
            header: header
        };
        return dispatch => {
          return fetch("http://data.fixer.io/api/latest?access_key=aaa2c238d60887e2a8aafd17507dd67e", sendData)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
              console.log(json);
              dispatch(fetchRatesSuccess(json));
              return json;
            })
        };
}
  
function handleErrors(response) {
    if (!response.ok) {
        console.error(response);
        throw Error(response.statusText);
    }
    return response;
}