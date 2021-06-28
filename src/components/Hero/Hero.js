import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
         Welcome To <br />
         My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Fast forward to 2021, I decided to do freelancing and consultant work mostly related to web development. 
      </SectionText>
      <Button onClick={() => window.location = 'https://zeinab.co.uk/'}>Wanna Know More</Button>
    </LeftSection>
 </Section>
);

export default Hero;