import { React, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldGeoJSON from '../data/world.geojson';
import Popup from '../components/popup';


const projectsData = [
  { name: 'South Africa', coordinates: [55, -122] },
  { name: 'Botswana', coordinates: [56, -105] },
  { name: 'Namibia', coordinates: [46, -105] },
  { name: 'Tanzania', coordinates: [74, -72] },
  { name: 'Zimbabwe', coordinates: [66, -100] },
  { name: 'Mauritius', coordinates: [108, -103] },
  { name: 'Democratic Republic of the Congo', coordinates: [57, -64] },
  { name: 'Gabon', coordinates: [39, -61] },
  { name: 'Ivory Coast', coordinates: [11.5, -44] },
  { name: 'Mali', coordinates: [17, -22] },
  { name: 'Eritrea', coordinates: [79, -26] },
  { name: 'Uganda', coordinates: [71, -58] },
  { name: 'Ethiopia', coordinates: [82, -42] },
  { name: 'Turkey', coordinates: [69, 20] },
  { name: 'Hungary', coordinates: [46, 34] },
  { name: 'Croatia', coordinates: [42, 31.5] },
  { name: 'Norway', coordinates: [30, 55] },
  { name: 'Lithuania', coordinates: [50, 47.5] },
  { name: 'United Arab Emirates', coordinates: [102, -10.5] },
  { name: 'Russia', coordinates: [75, 50] },
  { name: 'Kazakhstan', coordinates: [110, 37] },
  { name: 'Uzbekistan', coordinates: [110, 23] },
  { name: 'Kyrgyzstan', coordinates: [123, 24] },
  { name: 'Iran', coordinates: [100, 7] },
  { name: 'Singapore', coordinates: [183.5, -56] },
  { name: 'Australia', coordinates: [220, -115] },
  { name: 'Brazil', coordinates: [-60, -85] },
  { name: 'Chile', coordinates: [-85, -110] },
  { name: 'Peru', coordinates: [-99, -80] },
  // Add more projects with their coordinates
];

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div >
      <section className='fadeIn-animation-up'>
        <div className='heading font-weight-bold'>
          <h1 className='ps-5 ms-5 pt-4 mt-4 text-start text'>
            Over Three Decades
          </h1>
          <h1 className='ps-5 ms-5 text-start text'>
            of Engineering
          </h1>
          <h1 className='ps-5 ms-5 text-start text'>
            Excellence
          </h1>
        </div>
        <div className='map-container'>
          <ComposableMap className='map-container' projection="geoEqualEarth" style={{ margin: '0 auto' }} projectionConfig={{ scale: 210 }}>
            <Geographies geography={worldGeoJSON}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#EAEAEC"
                    stroke="#D6D6DA"
                  />
                ))
              }
            </Geographies>
            {projectsData.map((project, index) => (
              <ProjectPin
                key={index}
                project={project}
                setHoveredProject={setHoveredProject}
              />
            ))}
          </ComposableMap>
        </div>
      </section>
      <section>
        <div className='ps-5 ms-5 pe-5 me-5 pb-2 mb-2 stop-it'>
          <h2 className='pt-4 mt-4 text-center text border-bottom border-4'>
            About us
          </h2>
          <div className='ps-4 pe-4 pt-4 pb-4 bg-blue'>
            <div className='border-color ps-4 pe-4 pt-4 pb-4'>
              <h3 className='text-center text-white'>
                History
              </h3>
              <p className='pt-2 mt-2 lead'>
                Logichem Control has been providing instrument and control engineering
                services since 1987. Our company head office is based in Lonehill, Sandton.
                Over the past 30 odd years, we have earned a reputation for engineering
                services of the highest quality, competitive costing as well as an unbiased
                approach in the selection of suppliers.
                Work ethic for us, revolves around finding the best equipment to meet the
                project requirements by not designing a solution around the equipment and
                its capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='pt-5 mt-5 ps-5 ms-5 pe-5 me-5 pb-2 mb-2 stop-it'>
          <div className='ps-4 pe-4 pt-4 pb-4 bg-blue'>
            <div className='border-color ps-4 pe-4 pt-4 pb-4'>
              <h3 className='text-center text-white'>
                Mission
              </h3>
              Our continued work in the engineering field has given us more than 30 years of experience.
              Therefore we are dedicated to continue excellent project execution and provide exceptional workmanship.
            </p>
          </div>
        </div>
      </section >
      <section className='text-center' id="what-we-do">
        <div className="container-fluid pb-2 mb-2">
          <h2 className='pt-5 mt-5 text-center text'>
            Vision
          </h2>
          <div className='mb-3 pb-3 ps-3 pe-3' >
            <div className="row mt-5 no-margins">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card bg-light-blue">
                  <div className="card-block block-1">
                    <h3 className="card-title">To the next 30 years of continued hard work and dedication</h3>
                    <p className='text-start'>
                      We recognise the value persistence and consistency and we realise  that success is not just about initial effort but also about maintaining that effort over time.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card bg-light-blue ">
                  <div className="card-block block-1 pb-4 mb-2">
                    <h3 className="card-title">To strive for excellence and innovation</h3>
                    <p className='text-start'>
                      We are committed to pursue the highest standards of quality and continuously seeking new ideas and approaches.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <div className="card bg-light-blue ">
                  <div className="card-block block-1 pb-1 mb-1">
                    <h3 className="card-title">To embrace collaboration and teamwork</h3>
                    <p className='text-start'>
                      Through aligning individual efforts we work towards achieving shared objectives.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='ps-5 ms-5 pe-5 me-5'>
          <h2 className='pt-4 mt-4 text-center text'>
            Values
          </h2>
          <div className='pt-4 mt-4 pb-4 mb-4 ps-5 ms-5 pe-5 me-5 text-center'>
            <span className="text-wave-1">Determination&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wave-2">Sufficiency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wave-3">Efficiency&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wave-4">Effectiveness&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wave-5">Trust&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-wave-6">Hard work</span>
          </div>
        </div>
      </section>
      {
        hoveredProject && (
          <Popup project={hoveredProject} />
        )
      }
    </div >
  );
};

const ProjectPin = ({ project, setHoveredProject }) => {
  const [x, y] = project.coordinates;
  const projection = (x, y) => {
    return [((x + 180) * 2), (90 - y) * 2];
  };

  const [cx, cy] = projection(x, y);

  const handleProjectHover = () => {
    setHoveredProject(project);
  };

  const handleProjectHoverOut = () => {
    setHoveredProject(null);
  };

  return (
    <circle
      cx={cx}
      cy={cy}
      r={3}
      fill="#3B5998"
      title={project.name}
      onMouseOver={handleProjectHover}
      onMouseOut={handleProjectHoverOut}
    />
  );
};
export default Home;
