import React, { useState } from 'react';
import PersonalDetailsForm from '../components/ResumeBuilder/PersonalDetailsForm';
import SkillsForm from '../components/ResumeBuilder/SkillsForm';

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
      case 2:
        return (
          <SkillsForm
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      default:
        return <h2 className="text-xl">Thank you! Form complete.</h2>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Build Your Resume</h1>
      {renderStep()}
    </div>
  );
};

export default ResumeBuilderPage;
