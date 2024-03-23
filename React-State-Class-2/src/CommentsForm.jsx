import { useState } from "react";

export default function CommentsForm() {
    // Initialize form data state
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    // Handle input change for all fields
    let handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    // Handle form submission
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div>
                <label htmlFor="remarks">Remarks</label>
                <textarea
                    id="remarks"
                    name="remarks"
                    placeholder="Add a few remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <div>
                <label htmlFor="rating">Rating</label>
                <input
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    type="number"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}
