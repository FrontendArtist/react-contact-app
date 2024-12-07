import React, { useState } from "react";
import "./contactApp.scss";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";

function ContactApp() {
  
  const inputs = [
    { type: "text", name: "name", placeholder: "Name" },
    { type: "text", name: "lastName", placeholder: "Last Name" },
    { type: "email", name: "email", placeholder: "Email" },
    { type: "number", name: "phone", placeholder: "Phone" },
  ];

  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("complete form");
    } else {
      const newContact = {...contact , id:v4()}
      setContacts((contacts) => [...contacts, newContact]);
      setAlert("");
    }
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  const deleteHandler = id => {
    const newContacts = contacts.filter((contact) => contact.id !== id)
    setContacts(newContacts)

  }
  return (
    <div className="contactApp">
      <h3>contact App</h3>
      <form className="contactForm">
        <div>
          {inputs.map((input , index) => (
            <input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              onChange={changeHandler}
              value={contact[input.name]}
            ></input>
          ))}
        </div>
        <button type="submit" className="addContact" onClick={addHandler}>
          add
        </button>
      </form>
      <p className="warning show">{alert}</p>
      <div className="contactsList">
        <h4>contacts list</h4>
        <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
      </div>
    </div>
  );
}

export default ContactApp;
