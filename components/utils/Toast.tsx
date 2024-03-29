

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return (
    <ToastContainer
      toastClassName={() => "relative flex p-3 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer text-primary border border-accent-2 shadow-md bg-primary"}
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  )
}

export default Toast;