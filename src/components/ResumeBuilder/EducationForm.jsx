import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  degree: yup.string().required('Degree is required'),
  institution: yup.string().required('Institution is required'),
  graduationYear: yup
    .number()
    .required('Graduation year is required')
    .typeError('Must be a number')
    .min(1900, 'Invalid year')
    .max(new Date().getFullYear(), 'Cannot be in the future'),
});

const EducationForm = ({ nextStep, prevStep, setFormData, formData }) => {
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
        <label className="block font-medium">Degree</label>
        <input
          {...register('degree')}
          className="input-field"
          placeholder="Enter degree"
        />
        {errors.degree && <p className="text-red-500">{errors.degree.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Institution</label>
        <input
          {...register('institution')}
          className="input-field"
          placeholder="Enter institution"
        />
        {errors.institution && <p className="text-red-500">{errors.institution.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Graduation Year</label>
        <input
          {...register('graduationYear')}
          className="input-field"
          placeholder="Enter graduation year"
          type="number"
        />
        {errors.graduationYear && <p className="text-red-500">{errors.graduationYear.message}</p>}
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

export default EducationForm;
