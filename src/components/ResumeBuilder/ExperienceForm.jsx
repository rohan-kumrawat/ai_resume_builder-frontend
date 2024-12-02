import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  jobTitle: yup.string().required('Job title is required'),
  company: yup.string().required('Company name is required'),
  duration: yup.string().required('Duration is required'),
});

const ExperienceForm = ({ nextStep, prevStep, setFormData, formData }) => {
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
        <label className="block font-medium">Job Title</label>
        <input
          {...register('jobTitle')}
          className="input-field"
          placeholder="Enter job title"
        />
        {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Company Name</label>
        <input
          {...register('company')}
          className="input-field"
          placeholder="Enter company name"
        />
        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Duration</label>
        <input
          {...register('duration')}
          className="input-field"
          placeholder="Enter duration"
        />
        {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="btn-secondary"
        >
          Previous
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
