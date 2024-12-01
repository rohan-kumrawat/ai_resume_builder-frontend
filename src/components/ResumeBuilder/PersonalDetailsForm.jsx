import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const PersonalDetailsForm = ({ nextStep, setFormData, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register('name')}
          className="input-field"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          {...register('email')}
          className="input-field"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        className="btn-primary"
      >
        Next
      </button>
    </form>
  );
};

export default PersonalDetailsForm;
