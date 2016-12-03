import React from 'react';
import './Item.scss';
import { Link } from 'react-router';
import _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';

const Item = ({ item, data }) => (
  <div className="row">
      <div className="col-md-7">
          <a href="#">
              <img className="img-responsive" src={`img/${data}.jpg`} alt=""/>
          </a>
      </div>
      <div className="col-md-5">
          <h3>Room {data}</h3>
          {/*<h4>{data} night</h4>*/}
          {/*<h4>{data} night</h4>*/}
          {/*<h4>{data} night</h4>*/}
          <div>
            {_.range(data + 3).map(() => (
              <i className="fa fa-moon-o night-icon"/>
            ))}
          </div>
          <div className="star-rating">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={data + 2}
              onStarClick={() => {}}
            />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <Link className="btn btn-primary" to="/room">View Detail <span className="glyphicon glyphicon-chevron-right"></span></Link>
      </div>
  </div>
);

export default Item;
