import React from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage.jsx";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("form di submit");

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <AnimatedPage>
      <div>
        <h1>Contact Page</h1>
        <p>ini adalah halaman contact</p>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
