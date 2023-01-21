import {useState,useEffect} from 'react'
import List from './List'
import Form from './Form'
import  './styles.css'

function Contacts() {
    const [contacts, setContacts]=useState([
      {
        fullname:"Mehmet",
        phone_number:"12123"
      },
      {
        fullname:"Kayra",
        phone_number:"324325"
      },
      {
        fullname:"Enis",
        phone_number:"857349"
      }
    ])

    useEffect(()=>{
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
      <h1>Contact List</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts