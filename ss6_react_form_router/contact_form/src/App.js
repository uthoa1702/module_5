import './App.css';
import React from "react";
import {ContactForm} from "./components/ContactForm";
import {ToastContainer} from "react-toastify";



function App() {
    return (
        <>
            <ContactForm />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>
    );
}

export default App;
