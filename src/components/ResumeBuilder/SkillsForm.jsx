import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import API from '../../api'; // Axios instance

const schema = yup.object().shape({
  skills: yup
    .array()
    .min(1, 'At least one skill is required')
    .of(yup.string().required('Skill cannot be empty')),
});

const SkillsForm = ({ nextStep, prevStep, setFormData, formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { skills: formData.skills || [''] },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await API.post('/resume/skills', { skills: data.skills.split(',') });
      console.log('Skills saved:', response.data);
      setFormData({ ...formData, skills: data.skills.split(',') });
      nextStep();
    } catch (error) {
      console.error('Error saving skills:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Skills (comma separated)</label>
        <input
          {...register('skills', { required: 'Skills are required' })}
          className="input-field"
          placeholder="e.g. JavaScript, React, Node.js"
        />
        {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
      </div>

      <button type="submit" className="btn-primary">
        Next
      </button>
    </form>
  );
};

export default SkillsForm;
