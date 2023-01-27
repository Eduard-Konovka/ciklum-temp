import { useState } from "react";
import Button from "./Button";

const Form = () => {
    const [firstName, setFirstName] = useState('');

    const changeNameInput = (event) => {
        setFirstName(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        console.log(firstName);
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                data-testid="firstNameInput"
                placeholder="name"
                value={firstName}
                onChange={changeNameInput}
                />
                <div>
                    <Button text="Send data"/>
                </div>
        </form>
    )
}

export default Form;