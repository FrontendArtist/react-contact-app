import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    display:flex;
    gap:20px;
    align-items:center;
    border:1px solid gray;
    border-radius:4px;
    padding: 10px 20px;
`
function ContactItem(props) {
    const contact = props.data;
    console.log();
  return (
    <>
    <Li id={contact.id}>
    <p>{contact.name} {contact.lastName}</p>
    <p>{contact.email}</p>
    <p>{contact.phone}</p>
    <input type="button" value="delete" onClick={() => props.deleteHandler(contact.id)}/>
  </Li>
    </>

  )
}

export default ContactItem