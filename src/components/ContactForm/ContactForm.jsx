// export default function ContactForm({ onAdd }) {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     onAdd({
//       id: Date.now(),
//       name: evt.target.elements.text.value,
//       number: evt.target.elements.number.value,
//     });
//     evt.target.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name</label>
//         <input type="text" name="text" />
//       </div>
//       <div>
//         <label>Number</label>
//         <input type="number" name="number" />
//       </div>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// }

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    text: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd(values);
    console.log(values);
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    text: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Це обовʼязкове поле!"),
    number: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Це обовʼязкове поле!"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="text" id="nameFieldId" />
          <ErrorMessage name="text" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="number" name="number" id="numberFieldId" />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
