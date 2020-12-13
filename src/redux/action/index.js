export const SAVE_DATA_USER = 'SAVE_DATA_USER';

export const saveDataUser = (data) => {
  return {
    type: SAVE_DATA_USER,
    data,
  };
};
