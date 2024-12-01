import React, { useState } from 'react';

const EducationForm = ({ nextStep, prevStep, setFormData, formData }) => {
  const [education, setEducation] = useState(formData.education || []);

  const addEducation = () => {
    setEducation([...education, { institution: '', degree: '', year: '' }]);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    setEducation(updatedEducation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, education });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Education</h2>

      {education.map((edu, index) => (
        <div key={index} className="space-y-2 border p-4 rounded mb-4">
          <input
            type="text"
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Year"
            value={edu.year}
            onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Education
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

export default EducationForm;
