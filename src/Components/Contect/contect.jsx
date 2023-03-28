import React from "react";
import "./contect.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const contect = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__option">
        
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icones"/>
            <h4>Email</h4>
            <h5>naveenkuma0852@gmail.com</h5>
            <a href="mailto:naveenkuma0852@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icones"/>
            <h4>Messenger</h4>
            <h5>Naveen Sharma</h5>
            <a href="https://m.me/naveensharma.naveen.338" target={"_blank"}>Send a message</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icones"/>
            <h4>Email</h4>
            <h5>+917091523700</h5>
            <a href="https://api.whatsapp.com/send?phone=+917091523700" target={"_blank"}>Send a message</a>
          </article>
        </div>

        {/* END CONTACT OPTION */}
        <form action="">
          <input type="text" name="name" placeholder="your Full Name" required></input>
          <input type="text" name="email" placeholder="your Email" required></input>
          <textarea name="message" rows="7" placeholder="your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  );
};

export default contect;
