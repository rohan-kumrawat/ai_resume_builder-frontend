import React from 'react';

const ResumePreview = ({ formData, prevStep }) => {
  return (
    <div className="p-8 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Personal Details</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Skills</h3>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Experience</h3>
        <p><strong>Job Title:</strong> {formData.jobTitle}</p>
        <p><strong>Company:</strong> {formData.company}</p>
        <p><strong>Duration:</strong> {formData.duration}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Education</h3>
        <p><strong>Degree:</strong> {formData.degree}</p>
        <p><strong>Institution:</strong> {formData.institution}</p>
        <p><strong>Graduation Year:</strong> {formData.graduationYear}</p>
      </div>

      <button
        type="button"
        onClick={prevStep}
        className="btn-secondary"
      >
        Edit Details
      </button>
    </div>
  );
};

export default ResumePreview;
