// Contact Form, including image

"use client";

import { useState } from 'react';
import { validateForm } from '../utils/formValidation';
import Image from 'next/image';

import styles from './contact-form.module.scss';

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData.name, formData.email, formData.phone, formData.message);
    setErrors(validationErrors);

    // If there are errors, don't submit the form
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitStatus('success');
        console.log('Form submitted successfully!')
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error('Server error:', data.message, data.error);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <section className={styles.contact}>
      <h1 className={styles.contact__title}>Contact Little Bear to learn more about our services.</h1>
      <div className={styles.contact__content}>
        <div className={styles.contact__imageContainer}>
          <Image src="/images/pond-logo-v1.png" alt="Pond" width={400} height={400} />
        </div>
        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <label className={styles.contact__label}>
            Name:
            <input className={styles.contact__input} type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className={styles.contact__error}>{errors.name}</span>}
          </label>
          
          <label className={styles.contact__label}>
            Email:
            <input className={styles.contact__input} type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className={styles.contact__error}>{errors.email}</span>}
          </label>
          
          <label className={styles.contact__label}>
            Phone:
            <input className={styles.contact__input} type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <span className={styles.contact__error}>{errors.phone}</span>}
          </label>

          <label className={styles.contact__label}>
            Message:
            <textarea name="message" className={styles.contact__textarea} value={formData.message} onChange={handleChange} />
            {errors.message && <span className={styles.contact__error}>{errors.message}</span>}
          </label>
          
          <input className={styles.contact__button} type="submit" value="Submit" />
          
          {submitStatus === 'sending' && <p className={styles.contact__sending}>Sending...</p>}
          {submitStatus === 'success' && <p className={styles.contact__success}>Form submitted successfully!</p>}
          {submitStatus === 'error' && <p className={styles.contact__error}>An error occurred. Please try again later.</p>}
        </form>
      </div>
    </section>
  );
}