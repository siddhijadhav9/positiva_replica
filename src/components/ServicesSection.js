import React from 'react';
import styled from 'styled-components';
import SEOImage from '../assets/seo.png'; // replace with your SEO image asset
import PPCImage from '../assets/ppc.png'; // replace with your PPC image asset
import { ArrowUpRight } from 'lucide-react'; // if you don't want icons, remove this

const SectionWrapper = styled.section`
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #444;
`;

const ServicesGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1 1 300px;
  background: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0.5rem 0;
`;

const LearnMoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.25rem;
  }
`;

const ServicesSection = () => {
  return (
    <SectionWrapper>
      <Header>
        <Title>Services</Title>
        <Description>
          We offer a range of services to help businesses grow and succeed online.
        </Description>
      </Header>
      <ServicesGrid>
        <Card>
          <CardTitle>Search Engine Optimization</CardTitle>
          <CardImage src={SEOImage} alt="SEO" />
          <LearnMoreLink href="#">
            Learn more <ArrowUpRight size={16} />
          </LearnMoreLink>
        </Card>
        <Card>
          <CardTitle>Pay-per-click Advertising</CardTitle>
          <CardImage src={PPCImage} alt="PPC" />
          <LearnMoreLink href="#">
            Learn more <ArrowUpRight size={16} />
          </LearnMoreLink>
        </Card>
      </ServicesGrid>
    </SectionWrapper>
  );
};

export default ServicesSection;
