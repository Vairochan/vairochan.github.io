import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Reset the submitted state after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>vairochan.sah@example.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Your Location</p>
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
            {submitted ? (
              <div className="form-success">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
