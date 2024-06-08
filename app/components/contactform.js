"use client"

import React, { use, useState } from 'react';
// import nodemailer from 'nodemailer'

import Image from 'next/image';

import styles from "./contactform.module.scss";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (phone) {
      const phoneRegex = /^(\+1|1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
      if (!phoneRegex.test(phone)) {
        errors.phone = 'Phone number is invalid';
        isValid = false;
      }
    }

    if (!message) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone, message }),
        });
  
        if (response.ok) {
          // Reset form fields
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setErrors({});
          setSubmitStatus('success');
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      }
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
          <input className={styles.contact__input} type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <span className={styles.contact__error}>{errors.name}</span>}
        </label>
        
        <label className={styles.contact__label}>
          Email:
          <input className={styles.contact__input} type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className={styles.contact__error}>{errors.email}</span>}
        </label>
        
        <label className={styles.contact__label}>
          Phone:
          <input className={styles.contact__input} type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          {errors.phone && <span className={styles.contact__error}>{errors.phone}</span>}
        </label>

        <label className={styles.contact__label}>
          Message:
          <textarea name="message" className={styles.contact__textarea} value={message} onChange={(e) => setMessage(e.target.value)} />
          {errors.message && <span className={styles.contact__error}>{errors.message}</span>}
        </label>
        
        <input className={styles.contact__button} type="submit" value="Submit" />
        
        {submitStatus === 'success' && (
          <p className={styles.contact__success}>Form submitted successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className={styles.contact__error}>An error occurred. Please try again later.</p>
        )}
      </form>
      </div>
    </section>
  );
}