import { expencesConstants } from "../constants";
//Fetching
export const fetchExpencesRequest = () => {
    return {
        type: expencesConstants.fetch_expences
    };
};
export const fetchExpencesSuccess = Expences => {
  return {
    type: expencesConstants.fetch_expences_success,
    Expences
  };
};
export const fetchExpencesFail = () => {
  return {
    type: expencesConstants.fetch_expences_fail,
  };
};