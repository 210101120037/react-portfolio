import React from 'react';
import Header from './Header';
import ImageSection from './ImageSection';
import EducationSection from './EductionSection';
import ProjectSection from './ProjectSection';
import ClientSection from './ClientSection';
import ContactForm from './ContactForm';
import BackgroundEffect from './BackgroundEffect';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <BackgroundEffect/>
      <Header />
      <ImageSection />
      <EducationSection />
      <ProjectSection />
      <ClientSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
