import { paidConstants } from "../constants"
//Fetching
export const paidRequest = salesDate => {
    return {
        type: paidConstants.paid_request,
        salesDate
    };
};
export const paidSuccess = () => {
    return {
        type: paidConstants.paid_success
    };
};
export const paidFail = () => {
  return {
    type: paidConstants.paid_fail
  };
};