import React, { useState } from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    title: "Marketing Director at XYZ Corp",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SliderContainer>
      <HeaderContainer>
        <HeaderTitle>Testimonials</HeaderTitle>
        <HeaderText>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</HeaderText>
      </HeaderContainer>

      <ArrowButton onClick={prevSlide}>←</ArrowButton>
      <TestimonialCard>
        <Text>"{testimonials[currentIndex].text}"</Text>
        <Name>{testimonials[currentIndex].name}</Name>
        <Title>{testimonials[currentIndex].title}</Title>
      </TestimonialCard>
      <ArrowButton onClick={nextSlide}>→</ArrowButton>
      <Dots>
        {testimonials.map((_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default TestimonialSlider;

// Styled Components
const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: #222;
  padding: 40px;
  border-radius: 10px;
  color: #fff;
  max-width: 800px;
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const HeaderTitle = styled.div`
  background-color: #a0e86e; // Light green background
  color: #000; // Black text
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
`;

const HeaderText = styled.div`
  color: #ccc;
  font-size: 16px;
`;

const TestimonialCard = styled.div`
  max-width: 700px;
  text-align: center;
  background: #333;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 15px 15px 0 15px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Name = styled.h3`
  font-size: 18px;
  color: #a0e86e;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-size: 14px;
  color: #ccc;
`;

const ArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  color: #a0e86e;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 8px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.active ? '#a0e86e' : '#555')};
`;