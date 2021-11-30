import emailJS from 'emailjs-com';
import React, { useRef } from 'react';
import './Contact.css';
import apiKey from './apiKey';

import { useForm } from "react-hook-form";

const Contact = () => {

    const { register, handleSubmit, formState: { errors ,reset } } = useForm();
    const form = useRef();

    const onSubmit = (data) => {
        emailJS.sendForm(apiKey.serviceID, apiKey.templateID, form.current, apiKey.userID)
            .then(res => {
                reset();
            })
            .catch(error => console.log(error.text));
    };
    

    return (
        <div className="contact">
            <h1> Contact</h1>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="py-5">
                <input type="text" name="name" placeholder="Name" {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="text-center text-danger fs-5 my-0 ">{errors.name.message}</p>}
                <input type="email" name="email" placeholder="Email" {...register("email", { required: "Email is required" })}/>
                {errors.email && <p className="text-center text-danger fs-5 my-0 ">{errors.email.message}</p>}
                <input type="text" name="subject" placeholder="Subject" {...register("subject", { required: "Subject is required" })}/>
                {errors.subject && <p className="text-center text-danger fs-5 my-0 ">{errors.subject.message}</p>}
            <input type="text" name="content" placeholder="Your Message" {...register("content", { required: "No message to send" })}/>
                {errors.content && <p className="text-center text-danger fs-5 my-0 ">{errors.content.message}</p>}
                <input type="submit" className="btn-mail"/>
            </form>
        </div>
    );
};

export default Contact;