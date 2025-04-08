// src/components/ProcessSection.js
import React, { useState } from 'react';
import styled from 'styled-components';

// -- STYLED COMPONENTS --

const SectionWrapper = styled.section`
  padding: 3rem 2rem;
  background-color: #fff;
`;

const Header = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    background-color: #cbff3d;
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #555;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StepBox = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #000;
  background-color: ${(props) => (props.isOpen ? '#cbff3d' : '#fff')};
  transition: background-color 0.3s ease;
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem 1.5rem;
`;

const StepNumberTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;

  span.step-number {
    font-size: 1.2rem;
  }

  span.step-title {
    font-size: 1.1rem;
  }
`;

const ToggleSign = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;

const StepContent = styled.div`
  padding: ${(props) => (props.isOpen ? '1rem 1.5rem' : '0 1.5rem')};
  max-height: ${(props) => (props.isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #000;
`;

// -- MAIN COMPONENT --

const ProcessSection = () => {
  const [openStep, setOpenStep] = useState(0);

  const stepsData = [
    {
      number: '01',
      title: 'Consultation',
      content:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      content:
        'We will conduct thorough research to identify market opportunities and develop a strategy that aligns with your goals. This includes competitor analysis, audience segmentation, and selecting the right marketing channels.'
    }
    // Add more steps if needed
  ];

  const handleToggle = (index) => {
    setOpenStep((prevOpen) => (prevOpen === index ? -1 : index));
  };

  return (
    <SectionWrapper>
      <Header>
        <h2>Our Working Process</h2>
        <h3>Step-by-Step Guide to Achieving Your Business Goals</h3>
      </Header>

      <StepsContainer>
        {stepsData.map((step, index) => {
          const isOpen = openStep === index;
          return (
            <StepBox key={index} isOpen={isOpen}>
              <StepHeader onClick={() => handleToggle(index)}>
                <StepNumberTitle>
                  <span className="step-number">{step.number}</span>
                  <span className="step-title">{step.title}</span>
                </StepNumberTitle>
                <ToggleSign>{isOpen ? '-' : '+'}</ToggleSign>
              </StepHeader>
              <StepContent isOpen={isOpen}>{step.content}</StepContent>
            </StepBox>
          );
        })}
      </StepsContainer>
    </SectionWrapper>
  );
};

export default ProcessSection;
