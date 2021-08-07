import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  console.log("this is contact form ");
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }

      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }  
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }  
  
  return (
    <section className="contactContainer">
      <div>
      <h1 data-testid="h1tag">Contact Me</h1>      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>      
      </form>
      </div>
      <div>
        <h1>My Details</h1>
        <p>Email: lilyygf@gmail.com</p>
        <p>PO Box 714</p>
        <p>799-876-1212</p>
      </div>
    </section>
  );
}

export default ContactForm;