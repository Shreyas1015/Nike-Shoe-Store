import React from "react";

const ContactForm = () => {
  return (
    <>
      <form
        className="mx-auto contact-form my-4"
        action="https://formspree.io/f/mjvqvkqy"
        method="post"
      >
        <input
          type="text"
          className="form-control mb-3"
          name="username"
          placeholder="username"
          required
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="email"
          required
          autoComplete="off"
        />
        <textarea
          name="message"
          className="form-control mb-3"
          required
          placeholder="enter your message"
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" className="btn btn-dark" value="Submit" />
      </form>
    </>
  );
};

export default ContactForm;
