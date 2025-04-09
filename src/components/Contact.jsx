import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null
  });
  
  const formRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });
    
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setStatus({ submitted: true, loading: false, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        // Reset the submitted state after 5 seconds
        setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setStatus({ submitted: false, loading: false, error: 'Failed to send email. Please try again.' });
      });
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>vairochansah2000@gmail.com</p>
            </div>
            <div className="contact-social">
              <a href="https://github.com/Vairochan" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vairochan" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://discord.com/users/Vairochan#6225" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://www.facebook.com/vairochan.sah" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="http://www.instagram.com/vairochan_sah" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            {status.submitted ? (
              <div className="form-success">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                {status.error && (
                  <div className="form-error" style={{ 
                    backgroundColor: '#ffebee', 
                    border: '1px solid #ef5350', 
                    color: '#c62828', 
                    padding: '10px', 
                    borderRadius: '4px', 
                    marginBottom: '20px' 
                  }}>
                    <p>{status.error}</p>
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary ${status.loading ? 'btn-loading' : ''}`}
                  disabled={status.loading}
                  style={status.loading ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                >
                  {status.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;