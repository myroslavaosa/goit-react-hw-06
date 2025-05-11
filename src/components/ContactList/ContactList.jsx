import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.table}>
      {filteredContacts.map(({ id, name, number }) => (
        <div className={s.item} key={id}>
          <div className={s.label}>
            <FaUser />
            <p className={s.p}>Name: {name}</p>
          </div>
          <div className={s.label}>
            <FaPhone />
            <p className={s.p}>Number: {number}</p>
          </div>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
