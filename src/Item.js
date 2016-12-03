import React from 'react';
import './Item.scss';
import { Link } from 'react-router';

const Item = ({ item, data }) => (
  <div className="row">
      <div className="col-md-7">
          <a href="#">
              <img className="img-responsive" src={`img/${data}.jpg`} alt=""/>
          </a>
      </div>
      <div className="col-md-5">
          <h3>Room {data}</h3>
          <h4>{data} night</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <Link className="btn btn-primary" href="/room">View Detail <span className="glyphicon glyphicon-chevron-right"></span></Link>
      </div>
  </div>
);

export default Item;
