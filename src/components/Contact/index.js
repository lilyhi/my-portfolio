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
      <div className= "contactBox">
      <h1 data-testid="h1tag" className="titleSubject">Contact Me:</h1>&nbsp;      
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label> 
          <input style={{marginLeft:"5px"}} type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input style={{marginLeft:"5px"}} type="email" defaultValue={email} name="email" onBlur={handleChange} />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />&nbsp;
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" className="btn btn-outline-secondary btn-lg">Submit</button>      
      </form>
      </div>
      <div className="myDetails">
        <h1>My Details:</h1>&nbsp;
        <p>Email: lilyygf@gmail.com</p>
        <p>Phone: (602)349-1267</p>
        <p>Phoenix, AZ</p>
      </div>
    </section>
  );
}

export default ContactForm;