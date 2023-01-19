import React from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyToast() {

	return (
		<>
			<ToastContainer 
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				theme="light"
				style={{wordBreak: 'break-word'}}
			/>
		</>
	)
}

export {MyToast};