import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
<FooterWrapper>
   <LinkList>
     <LinkColumn>
       <LinkTitle>Call</LinkTitle>
       <LinkItem href="tel: 0161-2442446">0161-2442446</LinkItem>
    </LinkColumn>
    <LinkColumn>
       <LinkTitle>Email</LinkTitle>
       <LinkItem href="mailto:contact@zeinab.net">contact@zeinab.net</LinkItem>
    </LinkColumn>
  </LinkList>
  <SocialIconsContainer>
    <CompanyContainer>      
      <Slogan>Innovating projects</Slogan>
    </CompanyContainer>
    <SocialContainer>
    <SocialIcons href="https://github.com">
           <AiFillGithub size="3rem" />
         </SocialIcons>
         <SocialIcons href="https://linkedin.com">
           <AiFillLinkedin size="3rem" />
         </SocialIcons>
         </SocialContainer>
  </SocialIconsContainer>
</FooterWrapper>

  );
};

export default Footer;
