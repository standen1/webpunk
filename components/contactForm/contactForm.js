import { useState } from 'react';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';


export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setInputs({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mwkaledb',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        )
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error)
      })
  }
  return (
    <Div>
      <p>For any inquiries, please fill out the form below and submit.  I will get in touch with you as soon as possible.  
      Your information will not be used for any reasons other than an inquiry.</p>
     
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleOnChange}
          required
          value={inputs.name}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="_replyto"
          placeholder="Email"
          onChange={handleOnChange}
          required
          value={inputs.email}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          onChange={handleOnChange}
          required
          value={inputs.message}
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </Div>
  )
};

//Styes
const Div = styled.div`
  p {
    font-size: 1.3rem;
    font-weight: 500;
    max-width: 450px;
    margin: auto;
    padding: 0 15px 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 310px;
    justify-content: center;
    margin: auto;
    padding-bottom: 50px;
  }

  form label {
    font-size: 1.4em;
    font-weight: 600;
  }

  form input {
    width: 310px;
    height: 35px;
    font-size: 1.2em;
    font-family: inherit;
    margin: 5px 0 30px;
  }

  form textarea {
    width: 310px;
    height: 200px;
    font-size: 1.2em;
    font-family: inherit;
    margin: 5px 0 30px;
  }

  form button {
    background-color: ${props => props.theme.mainBlue};
    width: 200px;
    height: 30px;
    font-family: inherit;
    font-size: 1.3em;
    border-radius: 25px;
    transition: background-color 0.3s linear;
    margin: auto;
  }

  form button:hover {
    background-color: ${props => props.theme.hover};
    cursor: pointer;
  }

`;

