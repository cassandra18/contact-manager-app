import React, { useState } from "react";
import './App.css';
import Header from "./Header"
import AddContact  from "./AddContacts"
import ContactList from "./ContactList"

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts = { contacts }/> 
    </div>
  );
}

export default App;
 