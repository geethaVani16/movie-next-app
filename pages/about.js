import React from 'react';
import Header from '../components/shared/Header';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/basePage';

const About = () => {
  return (
    <BaseLayout>
      <BasePage>
        <h1>I am About Page</h1>
        {/* <Header /> */}
      </BasePage>

    </BaseLayout>
  )
}

export default About;