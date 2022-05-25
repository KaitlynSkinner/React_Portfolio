import React from 'react';
import About from '../About';
import ContactForm from '../Contact';
import Resume from '../Resume';
import Projects from '../Projects';

function Portfolio({currentCategory}) {
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = (currentCategory) => {
    console.log(currentCategory);
    if (currentCategory === 'Resume') {
      return <Resume />;
    }
    if (currentCategory === 'About') {
      return <About />;
    }
    if (currentCategory === 'Projects') {
      return <Projects />;
    }
    if (currentCategory === 'Contact') {
      return <ContactForm />;
    }
  };

  return (
    <section>
      {renderPage(currentCategory)}
    </section>
  );
}
export default Portfolio;