import React, { useState } from 'react'
import ContactItem from './ContactItem';

function ContactsList({contacts , deleteHandler} ) {

    console.log(contacts);
  
  return (
    <ul>
      {contacts.map(contact =>(
        <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>

      )
      )}

    </ul>
  )
}

export default ContactsList