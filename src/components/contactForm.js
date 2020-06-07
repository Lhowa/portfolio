import React, { useState } from 'react';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sendEmail = event => {
    event.preventDefault();

    console.log('We will fill this up shortly.');
    // code to trigger Sending email
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div>
        <form onSubmit={sendEmail}>
            <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your full name"
                    onChange={onInputChange}
            />
            <br/>
            <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your email"
                    onChange={onInputChange}
                />
            <br/>
            <label>Subject:</label>
                <input
                    type="text"
                    name="subject"
                    value={state.subject}
                    placeholder="Enter subject"
                    onChange={onInputChange}
                />
            <br/>
            <label>Message:</label>
                <textarea
                    name="message"
                    value={state.message}
                    placeholder="Enter your message"
                    onChange={onInputChange}
                />
            <br/>
            <input type='submit'/>
        </form>
    </div>
  );
};

export default ContactForm;