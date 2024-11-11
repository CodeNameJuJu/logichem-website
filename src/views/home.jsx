import { React, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldGeoJSON from '../data/world.geojson';
import { Carousel } from 'react-bootstrap';


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
];

const Home = () => {
  const [, setHoveredProject] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section id="home">
      <div className='fadeIn-animation-up' >
        {/* Map Section */}
        <section>
          <div className='map-container d-flex justify-content-center align-items-center'>
            <ComposableMap
              projection="geoEqualEarth"
              style={{ width: '100%', height: '100%' }}
              projectionConfig={{ scale: 200 }}
            >
              <Geographies geography={worldGeoJSON}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.name;
                    const matchingProject = projectsData.find(project => project.name === countryName);
                    const isBlue = Boolean(matchingProject);
                    const fillColor = isBlue ? "#3B5998" : "#808285";

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={hoveredCountry === geo.rsmKey ? '#2A4373' : fillColor}
                        stroke="#808285"
                        strokeWidth={hoveredCountry === geo.rsmKey ? 2 : 1}
                        onMouseOver={() => {
                          if (isBlue) {
                            setHoveredCountry(geo.rsmKey);
                            setHoveredProject(matchingProject || null);
                          }
                        }}
                        onMouseOut={() => {
                          setHoveredCountry(null);
                          setHoveredProject(null);
                        }}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </section>

        {/* History Section */}
        <section className="about-us-section py-5">
          <div className="container text-center">
            <h3 className="about-us-section-heading">Logichem Control has provided top-tier services since 1990</h3>
            <p className="lead text-center mt-3">
              With over three decades of experience, our commitment remains to exceptional project execution and unmatched workmanship in every engineering task we undertake. Based in Lonehill, Sandton, we have a reputation for quality, competitive pricing, and unbiased supplier selection. Our focus is always on finding the best equipment to meet project needs, not limiting ourselves to pre-existing solutions.
            </p>
          </div>
        </section>

        {/* Responsive Carousel Section */}
        <section className="carousel-section py-5">
          <Carousel interval={5000}>
            <Carousel.Item>
              <figure>
                <div className="w-100 d-flex justify-content-center">
                  <img
                    className="d-block img-fluid"
                    src="../Images/5 Misc_images/1.jpg"
                    alt="Second slide"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </figure>
            </Carousel.Item>
            <Carousel.Item>
              <figure>
                <div className="w-100 d-flex justify-content-center">
                  <img
                    className="d-block img-fluid"
                    src="../Images/5 Misc_images/3.jpg"
                    alt="Fifth slide"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </figure>
            </Carousel.Item>
            <Carousel.Item>
              <figure>
                <div className="w-100 d-flex justify-content-center">
                  <img
                    className="d-block img-fluid"
                    src="../Images/5 Misc_images/2.jpg"
                    alt="Eighth slide"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </figure>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* Vision Section */}
        <section id="what-we-do" className="vision-section text-center py-5">
          <div className="container">
            <h2 className="section-heading">Vision</h2>
            <div className="row">
              <div className="col-sm-4 pb-5">
                <div className="card h-100 border-0 shadow">
                  <div className="card-body">
                    <i className="fas fa-trophy fa-2x text-primary"></i>
                    <h4 className="card-title">30 Years of Dedication</h4>
                    <p className="card-text">
                      Persistence and consistency are key to our success. We believe in maintaining effort over time to achieve lasting results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 pb-5">
                <div className="card h-100 border-0 shadow bg-blue">
                  <div className="card-body">
                    <i className="fas fa-bullseye fa-2x text-primary"></i>
                    <h4 className="card-title">Strive for Excellence</h4>
                    <p className="card-text">
                      We are committed to maintaining the highest standards and continuously seeking innovative solutions in engineering.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 pb-5">
                <div className="card h-100 border-0 shadow bg-blue">
                  <div className="card-body">
                    <i className="fas fa-users fa-2x text-primary"></i>
                    <h4 className="card-title">Collaboration & Teamwork</h4>
                    <p className="card-text">
                      We align our efforts to achieve shared objectives, ensuring teamwork is at the heart of everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section py-5 pb-5 mb-5">
          <div className="container">
            <h2 className="section-heading text-center">Company Values</h2>
            <div className="d-flex justify-content-center flex-wrap">
              <span className="badge">
                <i className="fas fa-trophy"></i> Determination
              </span>
              <span className="badge">
                <i className="fas fa-balance-scale"></i> Sufficiency
              </span>
              <span className="badge">
                <i className="fas fa-chart-line"></i> Efficiency
              </span>
              <span className="badge">
                <i className="fas fa-check-circle"></i> Effectiveness
              </span>
              <span className="badge">
                <i className="fas fa-handshake"></i> Trust
              </span>
              <span className="badge">
                <i className="fas fa-hard-hat"></i> Hard Work
              </span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
