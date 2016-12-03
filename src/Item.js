import React from 'react';
import './Item.scss';

const Item = ({ item }) => (
  <div className="row">
      <div className="col-md-7">
          <a href="#">
              <img className="img-responsive" src="http://placehold.it/700x300" alt=""/>
          </a>
      </div>
      <div className="col-md-5">
          <h3>Project Two</h3>
          <h4>Subheading</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <a className="btn btn-primary" href="#">View Project <span className="glyphicon glyphicon-chevron-right"></span></a>
      </div>
  </div>
);

export default Item;
