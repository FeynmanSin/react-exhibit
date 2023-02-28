export const setToken = (data) => {
  sessionStorage.setItem('token', JSON.stringify(data));
};

export const getToken = () => {
  return JSON.parse(sessionStorage.getItem('token'));
}








