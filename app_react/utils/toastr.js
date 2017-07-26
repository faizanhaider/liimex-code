import toastr from 'toastr';


const showToast = (type, message, title) => {
  toastr[type](message, title);
};

export const error = (title = '', message = '') => {
  showToast('error', message, title);
};

export const success = (title = '', message = '') => {
  showToast('success', message, title);
};
