import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_pf9sfno',     // Your Service ID
      'template_9up297b',    // Your Template ID
      form.current,
      'JNclWd0Not-_7lGaz' // Replace with the same public key
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <StyledForm>
      <div className="form-container">
        <h2>Get In Touch</h2>
        <p>Have any questions? We'd love to hear from you.</p>
        
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === 'sending'}
            className={status === 'sending' ? 'sending' : ''}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'success' && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
          
          {status === 'error' && (
            <div className="error-message">
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

    h2 {
      color: #1E3A8A;
      font-size: 1.8rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-align: center;
    }

    p {
      color: #666;
      text-align: center;
      margin-bottom: 2rem;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;

    input, textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #4B7B3B;
        box-shadow: 0 0 0 3px rgba(75, 123, 59, 0.1);
      }
    }

    textarea {
      min-height: 150px;
      resize: vertical;
    }
  }

  button {
    width: 100%;
    padding: 0.75rem 1.5rem;
    background: #3B82F6;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #1E3A8A;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &.sending {
      background: #3B82F6;
      opacity: 0.7;
    }
  }

  .success-message {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #dcfce7;
    color: #166534;
    border-radius: 0.5rem;
    text-align: center;
  }

  .error-message {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #fee2e2;
    color: #991b1b;
    border-radius: 0.5rem;
    text-align: center;
  }
`;

export default ContactForm; 