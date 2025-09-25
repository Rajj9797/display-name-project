import React, { useState } from "react";

const Displayname = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName.length === 0 || lastName.length === 0){
            setError("Please fill out both fields");
            setFullName("");
        }else{
            setFullName(`${firstName} ${lastName}`);
            setError("");
        }
    }

    const firstNameSubmit = (e) => {
        if(e.target.value.length === 0){
            setError("Please fill out this field");
            setFullName("");
        }else{
            setFirstName(e.target.value);
            setError("");
        }
    }

    const lastNameSubmit = (e) => {
        if(e.target.value.length === 0){
            setError("Please fill out this field");
            setFullName("");
        }
        else{
            setLastName(e.target.value);
            setError("");
        };
    }

  return (
    <>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" value={firstName} onChange={firstNameSubmit} />
            <br />
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" value={lastName} onChange={lastNameSubmit} />
            <br />
            <button type="submit">Submit</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
        {fullName && <p>Full Name: {firstName} {lastName}</p>}
        
    </>
    );
};

export default Displayname;