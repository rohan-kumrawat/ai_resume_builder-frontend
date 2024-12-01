import React, { useState } from 'react';
import PersonalDetailsForm from '../components/ResumeBuilder/PersonalDetailsForm';
import SkillsForm from '../components/ResumeBuilder/SkillsForm';
import ExperienceForm from '../components/ResumeBuilder/ExperienceForm';
import EducationForm from '../components/ResumeBuilder/EducationForm';
import axios from 'axios';

const ResumeBuilderPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const submitForm = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/resumes', formData); // Adjust the URL to match your backend endpoint.
      alert('Resume submitted successfully!');
      console.log(response.data);
    } catch (err) {
      setError('Failed to submit the resume. Try again later.');
    } finally {
      setLoading(false);
    }
  };

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
      case 3:
        return (
          <ExperienceForm
            nextStep={nextStep}
            prevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case 4:
        return (
          <EducationForm
            nextStep={submitForm}
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
      {error && <p className="text-red-500">{error}</p>}
      {loading ? <p>Loading...</p> : renderStep()}
    </div>
  );
};

export default ResumeBuilderPage;
