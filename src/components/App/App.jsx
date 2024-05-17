import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

export default function App() {
  const initialContactState = () => {
    const savedContact = localStorage.getItem("contacts");
    return savedContact
      ? JSON.parse(savedContact)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  };

  const [inputValue, setInputValue] = useState("");

  const [contacts, setContacts] = useState(initialContactState);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm onAdd={addContact} />

      <SearchBox value={inputValue} onSearch={setInputValue} />

      <ContactList onDelete={deleteContact} contacts={visibleContacts} />
    </div>
  );
}
