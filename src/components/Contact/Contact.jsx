export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
