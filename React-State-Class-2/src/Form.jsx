import { useState } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setFullName(event.target.value);
    };

    return (
        <form>
            <label htmlFor="username">Full name</label>
            <input id={'username'}
                placeholder="Enter full name"
                type="text"
                value={fullName}
                onChange={handleNameChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
