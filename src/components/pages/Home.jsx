import React from 'react';
import Olayemi from '../../Images/olayemi.png'
import {  Container } from 'react-bootstrap';


function Home() {
  return (
    <div>
       
       <Container>
      <h1>Hi here <span>👋.</span>My name</h1>
      <p>
      A software developer with years experience designing and building responsive web design in the technology
        industry. Proficient with
        CSS and JS Frameworks, with extensive knowledge of UX and user psychology. Notable achievements include boosting
        the conversion
        rate of an existing website by 80% with improved code and design.
      </p>
    </Container>
    {/* <img src="/path/to/your/image.jpg" alt="Jumbotron Image" className="img-fluid" /> */}
    <img src={Olayemi} alt="Jumbotron Image" className='img-fluid' />

   
  
      
    </div>
  );
}

export default Home;
