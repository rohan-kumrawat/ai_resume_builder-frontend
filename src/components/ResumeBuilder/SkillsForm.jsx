import React, { useState } from 'react';

const SkillsForm = ({ nextStep, prevStep, setFormData, formData }) => {
  const [skills, setSkills] = useState(formData.skills || []);

  const addSkill = () => {
    setSkills([...skills, '']);
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? value : skill));
    setSkills(updatedSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, skills });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Skills</h2>

      {skills.map((skill, index) => (
        <input
          key={index}
          type="text"
          value={skill}
          onChange={(e) => handleSkillChange(index, e.target.value)}
          placeholder={`Skill ${index + 1}`}
          className="w-full border px-3 py-2 rounded mb-2"
        />
      ))}

      <button
        type="button"
        onClick={addSkill}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Skill
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

export default SkillsForm;
