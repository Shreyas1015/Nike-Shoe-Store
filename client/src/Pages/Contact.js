import React from "react";
import MainNav from "../Components/MainNav";
import Footer from "../Components/Footer";
// import { useAuth0 } from "@auth0/auth0-react";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  // const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <MainNav />
      <div className="container-fluid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.877802443174!2d72.82400107487469!3d19.113015982099267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e83c34362f%3A0x6d7c69d4f830e48!2sInternational%20Society%20for%20Krishna%20Consciousness%C2%AE%20(ISKCON%C2%AE%20-%20Juhu)!5e0!3m2!1sen!2sin!4v1688672555843!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ISKCON Juhu Map"
        />
        <div className="container">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
