import emailJS from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {
    
    const sendEmail = e => {
        e.preventDefault();

        emailJS.sendForm('service_1g9q71j', 'template_ynd0nbo', e.target, 'user_wOget9jbIkVTkHWivXVUv')
            .then(res => console.log(res.text))
            .catch(error => console.log(error.text));
    };
    

    return (
        <div className="contact">
            <h1> Contact</h1>
            <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="subject" placeholder="Subject"/>
                <input type="text" name="content" placeholder="Your email"/>
                <input type="submit" className="btn-mail"/>
            </form>
        </div>
    );
};

export default Contact;