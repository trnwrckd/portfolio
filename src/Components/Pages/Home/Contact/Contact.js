import emailJS from "emailjs-com";
import React, { useRef } from "react";
import apiKey from "./apiKey";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

import "./Contact.css";

const Contact = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef();

  const { setShowModal } = props;

  const notify = () => toast.success("Email Sent!", { theme: "dark" });

  const onSubmit = (data) => {
    emailJS
      .sendForm(
        apiKey.serviceID,
        apiKey.templateID,
        form.current,
        apiKey.userID
      )
      .then((res) => {
        form.current.reset();
        setShowModal(false);
      })
      .catch((error) => console.log(error.text));
    notify();
  };

  return (
    <div className="contact">
      <h1 className="pt-3"> Contact</h1>
      <ToastContainer position="top-left" />
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="pb-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="text-center text-danger fs-5 my-0 ">
            {errors.name.message}
          </p>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-center text-danger fs-5 my-0 ">
            {errors.email.message}
          </p>
        )}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="text-center text-danger fs-5 my-0 ">
            {errors.subject.message}
          </p>
        )}
        {/* <input type="text" name="content"   /> */}
        <textarea
          name="content"
          placeholder="Your Message.."
          cols="30"
          rows="5"
          {...register("content", { required: "No message to send" })}
        ></textarea>
        {errors.content && (
          <p className="text-center text-danger fs-5 my-0 ">
            {errors.content.message}
          </p>
        )}
        <button type="submit" className="btn-mail">
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default Contact;
