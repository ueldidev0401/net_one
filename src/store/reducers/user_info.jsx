import { SET_USER_ROLE, SET_ALL_USER_INFO } from '../actions/ActionTypes';

const initialState = {
  full_name: 'Kevin Mark',
  email_addr: 'km657***3@gmail.com',
  role: 'client',             // or 'recruiter'

  company_name: 'Individual'
};

export default function user_info(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ROLE:
      return { ...state, role: action.payload };

    case SET_ALL_USER_INFO:
      console.log("sdfsadf", {
        ...state,
        ...action.payload
      })
      return {
        ...state,
        // full_name: action.payload.name,
        // email_addr: action.payload.email,
        // company_name: action.payload.company,

        ...action.payload
      };

    default:
      return state;
  }
}
