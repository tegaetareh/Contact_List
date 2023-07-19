import React from 'react'
import { useState } from 'react'

import './App.css'
import ContactList from './components/ContactList.jsx'
// import SelectedContact from './components/SelectedContact.jsx'

function App() {
  const [selectedContactId, setSelectedContactId] =  useState(null)
  console.log("Selected ID: ",selectedContactId)
  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View
          {/* <SelectedContact selectedContactId={selectedContactId} /> */}
        </div>
        
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  )
}

export default App
