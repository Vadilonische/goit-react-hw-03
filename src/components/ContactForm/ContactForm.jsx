import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: Date.now(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm();
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 символів!")
      .required("Це обовʼязкове поле!"),
    number: Yup.string()
      .matches(
        /^(?:\d{10}|\d{3}-\d{3}-\d{2}-\d{2})$/,
        "Номер телефону у форматі xxx-xxx-xx-xx"
      )
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
      <Form className={css.formAddContact}>
        <div className={css.formInput}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.formInputAdd}
            type="text"
            name="name"
            id="nameFieldId"
          />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formInput}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.formInputAdd}
            type="text"
            name="number"
            id="numberFieldId"
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.btnAdd} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
