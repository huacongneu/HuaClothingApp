import React from 'react';
import { CantactPageContainer } from './contact.styles';
import CustomButton from '../../components/custom-button/custom-button.component';
import { SignInContainer, ButtonsBarContainer } from '../../components/sign-in/sign-in.styles';


const ContactPage = () => (
  <CantactPageContainer>
    <p>
    Hi, I am Hua!
    <br />
    Please feel free to contact me if you have any questions.
    <br />
    </p>

    <SignInContainer>
      <ButtonsBarContainer>
        <CustomButton type='submit' isMessageButton>
        <a href="mailto:edwardhuacong@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
        </CustomButton>

        <CustomButton type='submit' isGoogleSignIn>
        <a href="https://www.linkedin.com/in/huacong/" target="_blank" rel="noreferrer">LinkedIn</a>
        </CustomButton>
      </ButtonsBarContainer>
    </SignInContainer>

  </CantactPageContainer>
);

export default ContactPage;
