// src/Form.jsx
import React from "react";

const Form = () => {
    return (
        <form
            name="customContact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="customContact" />
            <input type="hidden" name="bot-field" />

            <div>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
            </div>

            <div>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
            </div>

            <div>
                <label>
                    Message:
                    <textarea name="message" rows="4" required></textarea>
                </label>
            </div>

            <button type="submit">Send</button>
        </form>
    );
};

export default Form;