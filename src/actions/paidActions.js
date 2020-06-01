import { paidConstants } from "../constants"
//Fetching
export const paidRequest = salesDate => {
    return {
        type: paidConstants.paid_request,
        salesDate
    };
};
export const paidSuccess = paidData => {
    return {
        type: paidConstants.paid_success,
        paidData
    };
};
export const paidFail = () => {
  return {
    type: paidConstants.paid_fail
  };
};