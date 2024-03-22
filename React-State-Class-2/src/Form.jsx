import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let handleInputChange = (event) => {
        let { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter full name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
