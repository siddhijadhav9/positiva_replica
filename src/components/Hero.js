// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

// Replace these with actual images or paths from your `src/assets` folder
import megaphoneImage from '../assets/megaphone.png'; 
import amazonLogo from '../assets/amazon.png';
import dribbbleLogo from '../assets/dribbble.png';
import hubspotLogo from '../assets/hubspot.png';
import notionLogo from '../assets/notion.png';
import netflixLogo from '../assets/netflix.png';
import zoomLogo from '../assets/zoom.png';

const HeroSection = styled.section`
  width: 100%;
  padding: 4rem 2rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem 4rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.5;
  color: #555;
`;

const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #b3ff00; /* Neon green from your theme */
  border: none;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  object-fit: contain;
`;

const BrandsContainer = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const BrandLogo = styled.img`
  height: 24px; /* Adjust as needed */
  object-fit: contain;
  filter: grayscale(100%); /* Optional: grayscale effect */
  transition: filter 0.3s;

  &:hover {
    filter: none; /* Show original color on hover */
  }
`;

const Hero = () => {
  return (
    <div>
      <HeroSection>
        {/* Left Column (Text) */}
        <HeroContent>
          <HeroTitle>Navigating the digital landscape for success</HeroTitle>
          <HeroSubtitle>
            Our digital marketing agency helps businesses grow and succeed 
            online through a range of services including SEO, PPC, social media 
            marketing, and content creation.
          </HeroSubtitle>
          <HeroButton>Book a consultation</HeroButton>
        </HeroContent>

        {/* Right Column (Image) */}
        <HeroImageContainer>
          {/* Replace `megaphoneImage` with your actual image */}
          <HeroImage src={megaphoneImage} alt="Megaphone Illustration" />
        </HeroImageContainer>
      </HeroSection>

      {/* Brand Logos */}
      <BrandsContainer>
        <BrandLogo src={amazonLogo} alt="Amazon Logo" />
        <BrandLogo src={dribbbleLogo} alt="Dribbble Logo" />
        <BrandLogo src={hubspotLogo} alt="HubSpot Logo" />
        <BrandLogo src={notionLogo} alt="Notion Logo" />
        <BrandLogo src={netflixLogo} alt="Netflix Logo" />
        <BrandLogo src={zoomLogo} alt="Zoom Logo" />
      </BrandsContainer>
    </div>
  );
};

export default Hero;
