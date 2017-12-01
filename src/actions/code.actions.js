export const ADD_CODE = 'ADD_CODE';

export const addCode = (newCode) => {
  return function(dispatch) {

    dispatch({
      type : ADD_CODE,
      code : newCode
    });

  };
};