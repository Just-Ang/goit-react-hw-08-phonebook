import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  //const { items, isLoading, error } = useSelector(state => state.contacts);
  // console.log( items, isLoading, error)

  const filter = useSelector(state => state.filters);
  const contactaList = useSelector(state => state.contacts.items);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    return contactaList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();
  //console.log(visibleContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            onClick={() => handleDelete(id)}
            className={css.btn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
