import React from "react";
import emailjs from '@emailjs/browser';
export const DemoEmail = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        alert("ok")
        emailjs.sendForm('service_pfktko9' , 'template_74jd9mx' , e.target,'ClrVOP7fFBx9cYzX-')
    }
    return (
        <form onSubmit={sendEmail}>
            <label>Name</label>
            <br/>
            <input type="text" name="user_name" />
            <br/>
            <label>Email</label>
            <br/>
            <input type="email" name="user_email" />
            <br/>
            <label>Message</label>
            <br/>
            <textarea name="message" />
            <br/>
            <button type="submit" value="Send" >Submit</button>
        </form>
    );
}
