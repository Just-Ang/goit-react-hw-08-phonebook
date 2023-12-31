import { ContactList } from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import { ContactForm } from "components/contactForm/ContactForm";

 const Contacts = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h1 >Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  };

  export default Contacts