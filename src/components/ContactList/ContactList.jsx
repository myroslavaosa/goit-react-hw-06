import s from "./ContactList.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

function ContactList({ data, onDelete }) {
  return (
    <div className={s.table}>
      {data.map(({ id, name, number }) => (
        <div className={s.item} key={id}>
          <div className={s.label}>
            <FaUser />
            <p className={s.p}>name: {name}</p>
          </div>
          <div className={s.label}>
            <FaPhone />
            <p className={s.p}>number: {number}</p>
          </div>
          <button onClick={() => onDelete(id)} className={s.button}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
