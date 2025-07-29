import React from "react";
import "../../styles/contact.css"
function Contact() {
    return (
        <div className="contact_main">
            <h2>Contact Me</h2>
            <p></p>

            <ul className="contact">
                <li><strong>Email:</strong> <a href="mailto:violentvicky5@gmail.com">violentvicky5@gmail.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+911234567890">+91 12345 67890</a></li>
                <li><strong>GitHub:</strong> <a href="https://github.com/Violentvicky5" target="_blank">Violentvicky5</a></li>
            </ul>

        </div>
    )
}

export default Contact;