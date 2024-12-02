import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

  const onSubmit = (data) => {
    setFormData({ ...formData, skills: data.skills });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block font-medium">Skills</label>
        {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
        {Array.from({ length: 5 }).map((_, index) => (
          <input
            key={index}
            {...register(`skills[${index}]`)}
            className="input-field mb-2"
            placeholder={`Skill ${index + 1}`}
          />
        ))}
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

export default SkillsForm;
