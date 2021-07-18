import React, { useState } from 'react';
import NavTabs from './navtabs';
import Home from './pages/home/home.page';
import About from './pages/about/about.page';
import Work from './pages/work/work.page';
import Contact from './pages/contact/contact.page';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }

    if (currentPage === "Work") {
      return <Work />
    }
        
    if (currentPage === "Contact"){
    return <Contact />;}
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
