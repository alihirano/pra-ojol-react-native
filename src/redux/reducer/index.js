import {combineReducers} from 'redux';
import {SAVE_DATA_USER} from '../action';

const initialState = {
  user: {
    fullName: 'Mubarak Ali',
    email: '',
    password: '',
  },
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA_USER:
      return {
        ...state,
        user: action.data,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  user: userReducer,
});
