import { profitsConstants } from "../constants"
//Fetching
export const fetchProfitsDataRequest = () => {
    return {
        type: profitsConstants.fetch_profits_data
    };
};
export const fetchProfitsDataSuccess = profitsData => {
  return {
    type: profitsConstants.fetch_profits_data_success,
    profitsData
  };
};
export const fetchProfitsDataFail = () => {
  return {
    type: profitsConstants.fetch_profits_data_fail,
  };
};