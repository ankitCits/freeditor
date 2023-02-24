import { REPORT_DATE_RANGE } from "../reduxConstant";

export const reportDateRangeAction = (dateRange) => (dispatch, getState) => {
  return dispatch({
    type: REPORT_DATE_RANGE,
    payload: { ...dateRange },
  });
};
