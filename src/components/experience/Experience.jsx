import React from "react";
import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
import { SiSass } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { BsDiagram3Fill } from 'react-icons/bs';
import { SiFigma } from 'react-icons/si';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Developement</h3>
          <div className="experience_content">
            <artical className="experience_details">
              <SiHtml5 className='experience_details-icon' />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiCss3 className='experience_details-icon' />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiJavascript className='experience_details-icon' />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiSass className='experience_details-icon' />
              <div>
                <h4>SASS</h4>
                <small>Intermediate</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiReact className='experience_details-icon' />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </artical>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
          <h3>Design Tools</h3>
          <div className="experience_content">
            <artical className="experience_details">
              <SiAdobephotoshop className='experience_details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiAdobeillustrator className='experience_details-icon' />
              <div>
                <h4>Illustrator</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiAdobexd className='experience_details-icon' />
              <div>
                <h4>XD</h4>
                <small>Experienced</small>
              </div>
            </artical>
            <artical className="experience_details">
              <SiFigma className='experience_details-icon' />
              <div>
                <h4>Figma</h4>
                <small>Intermediate</small>
              </div>
            </artical>
            <artical className="experience_details">
              <BsDiagram3Fill className='experience_details-icon' />
              <div>
                <h4>LucidCharts</h4>
                <small>Intermediate</small>
              </div>
            </artical>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
