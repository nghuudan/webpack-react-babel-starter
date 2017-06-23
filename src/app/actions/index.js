export const APP_TITLE = 'APP_TITLE';

export const appTitle = title => {
  return {
    type: APP_TITLE,
    title
  };
};

export const fetchAppTitle = good => {
  return new Promise((resolve, reject) => {
    if (good) {
      setTimeout(() => resolve('App Works!'), 200);
    } else {
      setTimeout(() => reject('App Broke!'), 400);
    }
  });
};

export const setAppTitle = good => {
  return dispatch => fetchAppTitle(good).then(
    title => dispatch(appTitle(title)),
    error => dispatch(appTitle(error))
  );
};
