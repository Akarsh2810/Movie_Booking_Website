export const getSessionToken = (key) => sessionStorage.getItem(key);

export const setSessionToken = (key, value) => sessionStorage.setItem(key, value);

export const removeSessionToken = (key) => sessionStorage.removeItem(key);
