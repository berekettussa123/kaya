import axios from 'axios';

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    
    const res = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/checkPartnerLogin`,
      userCredential
    );

    
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
export const logOutCall = async (dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
  
    dispatch({ type: 'LOGOUT'});
  } catch (err) {
    dispatch({ type: 'LOGIN_FAILURE', payload: err });
  }
};
