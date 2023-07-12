import React from 'react';
import { StyledForm } from './ContactForm.style';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data)=> {  

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = response.json();
      reset();
    } catch (error) {
      console.log("Error -> ", error);
    }
   
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <h2>Formulario</h2>
      <input type="text" placeholder="name" {...register("name", {required: true})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Phone number" {...register("Phone number", {required: true})} />
      <textarea {...register("message", { maxLength: 2998})} />

      <input type="submit" />
    </StyledForm>
  )
}
export default ContactForm;
