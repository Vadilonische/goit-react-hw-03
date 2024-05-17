import css from "./Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btnDell} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
