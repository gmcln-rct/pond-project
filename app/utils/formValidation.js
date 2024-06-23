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
  
    if (phone && !/^\+?[1-9]\d{1,14}$/.test(phone)) {
      errors.phone = 'Phone number is invalid';
    }
  
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
  
    return errors;
  };