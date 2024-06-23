// utils/formValidation.js

export const validateForm = (name, email, phone, message) => {
    const errors = {};
  
    if (!name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
  
    if (phone) {
      const phoneRegex = /^(\+1|1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
      if (!phoneRegex.test(phone)) {
        errors.phone = 'Phone number is invalid';
      }
    }
  
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
  
    return errors;
  };