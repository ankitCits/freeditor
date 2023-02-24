import {
  GLOBAL_DYNAMIC_SETTINGS_FORM_VISIBLE,
  GLOBAL_SIDER_COLLAPSED,
  GLOBAL_SIDER_MENU,
  GLOBAL_UPDATE_ROUTE,
  TODAYS_BIRTHDAY_LIST,
} from '../reduxConstant';

export const globalUpdateRoute = (routeParams) => (dispatch, getState) => {
  return dispatch({
    type: GLOBAL_UPDATE_ROUTE,
    payload: { ...routeParams },
  });
};
export const globalSiderCollapsed = (option) => (dispatch, getState) => {
  return dispatch({
    type: GLOBAL_SIDER_COLLAPSED,
    payload: !!option,
  });
};
export const globalSiderMenu = (value) => (dispatch, getState) => {
  return dispatch({
    type: GLOBAL_SIDER_MENU,
    payload: value[0],
  });
};

export const globalDynamicSettingsDrawerVisible =
  (option) => (dispatch, getState) => {
    return dispatch({
      type: GLOBAL_DYNAMIC_SETTINGS_FORM_VISIBLE,
      payload: option ? option : false,
    });
  };

export const updateTodaysBirthdayList = (option) => (dispatch, getState) => {
  return dispatch({
    type: TODAYS_BIRTHDAY_LIST,
    payload: option ? option : false,
  });
};
