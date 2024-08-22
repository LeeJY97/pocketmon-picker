import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToast = (text) => toast.success(text);
export const errorToast = (text) => toast.error(text);

const Toast = () => {
  return <ToastContainer />;
};

export default Toast;
