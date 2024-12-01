import React, { useState } from 'react';
import PersonalDetailsForm from '../components/ResumeBuilder/PersonalDetailsForm';

const ResumeBuilderPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetailsForm
            nextStep={nextStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      // We will add more steps (skills, education, experience) here later.
      default:
        return <h2 className="text-xl">Thank you! Form complete.</h2>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Build Your Resume</h1>
      {renderStep()}
      {step > 1 && (
        <button
          onClick={prevStep}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default ResumeBuilderPage;
