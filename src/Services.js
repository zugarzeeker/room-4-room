import React from 'react';

const Services = () => (
  <section id="services">
      <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2 className="section-heading">Benefits</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
          </div>
          <div className="row text-center">
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary"></i>
                      <i className="fa fa-money fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Save Money</h4>
                  <p className="text-muted">Pay less money to stay anywhere</p>
              </div>
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary"></i>
                      <i className="fa fa-moon-o fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Collect Nights</h4>
                  <p className="text-muted">Get night for providing room</p>
              </div>
              <div className="col-md-4">
                  <span className="fa-stack fa-4x">
                      <i className="fa fa-circle fa-stack-2x text-primary"></i>
                      <i className="fa fa-plane fa-stack-1x fa-inverse"></i>
                  </span>
                  <h4 className="service-heading">Travel Freely</h4>
                  <p className="text-muted">Travel anywhere without worrying about the room price</p>
              </div>
          </div>
      </div>
  </section>
);

export default Services;
