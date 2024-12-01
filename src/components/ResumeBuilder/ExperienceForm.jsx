import React, { useState } from 'react';

const ExperienceForm = ({ nextStep, prevStep, setFormData, formData }) => {
  const [experiences, setExperiences] = useState(formData.experiences || []);

  const addExperience = () => {
    setExperiences([...experiences, { company: '', role: '', duration: '' }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = experiences.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, experiences });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="space-y-2 border p-4 rounded mb-4">
          <input
            type="text"
            placeholder="Company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Role"
            value={exp.role}
            onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Duration"
            value={exp.duration}
            onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addExperience}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Experience
      </button>

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
