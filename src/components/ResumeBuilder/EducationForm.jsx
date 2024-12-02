import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API from '../../api'; // Axios instance

// Validation schema
const schema = yup.object().shape({
  degree: yup.string().required('Degree is required'),
  institution: yup.string().required('Institution name is required'),
  graduationYear: yup
    .number()
    .typeError('Year must be a number')
    .required('Graduation year is required')
    .min(1900, 'Year must be after 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
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

  // Form submission
  const onSubmit = async (data) => {
    try {
      // Save data to backend
      const response = await API.post('/resume/education', {
        education: { degree: data.degree, institution: data.institution, graduationYear: data.graduationYear },
      });
      console.log('Education saved:', response.data);

      // Update form data and move to the next step
      setFormData({ ...formData, ...data });
      nextStep();
    } catch (error) {
      console.error('Error saving education:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Degree</label>
        <input
          {...register('degree')}
          className="input-field"
          placeholder="Enter your degree"
        />
        {errors.degree && <p className="text-red-500">{errors.degree.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Institution</label>
        <input
          {...register('institution')}
          className="input-field"
          placeholder="Enter institution name"
        />
        {errors.institution && <p className="text-red-500">{errors.institution.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Graduation Year</label>
        <input
          {...register('graduationYear')}
          className="input-field"
          placeholder="Enter graduation year"
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
