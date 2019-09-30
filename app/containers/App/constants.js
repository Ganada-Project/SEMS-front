/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_USER_INFO = 'SEMS/App/GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'SEMS/App/GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_ERROR = 'SEMS/App/GET_USER_INFO_ERROR';

export const theme = {
  mainColor: '#374A5C',
  mainColorDark: '#1b252e',
  pointColor: '#EE7860',
  subColor: '#70BDE6',
  borderColor: '#CDD0D9',
  textColor: '#5b5e6d',
  backgroundColor: '#f5f6fa',
  navigation: {
    topNaviHeight: '75px',
    leftNaviWidth: '250px',
  },
  content: {
    paddingTop: '80px',
  },
};
