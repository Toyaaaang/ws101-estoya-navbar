import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:contact@webdev101demo.com">contact@webdev101demo.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+123 456 7890 </a></p>
    </div>
  );
};

export default Contact;
