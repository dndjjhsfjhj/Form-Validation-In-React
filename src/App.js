import React, { useState } from 'react';

function FormComponent() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    errors: {},
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const{name,email,password}=formState
      console.log(name,email,password)
    } else {
      setFormState({
        ...formState,
        errors,
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formState.name) {
      errors.name = 'Name is required';
    }
    if (!formState.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formState.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        {formState.errors.name && <span>{formState.errors.name}</span>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        {formState.errors.email && <span>{formState.errors.email}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        {formState.errors.password && <span>{formState.errors.password}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
