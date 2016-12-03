import React from 'react';
import './Room.scss';
import Modal from 'react-modal'
import cn from 'classnames';
import { Link } from 'react-router';
import moment from 'moment';
import DatePicker from 'react-datepicker';

export default class Room extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      endDate: moment(),
      openModal: false
    };
  }

  closeModal() {
    this.setState({ openModal: false });
  }

  handleDateChange(date, target) {
    this.setState({
      [target]: date
    });
  }

  openModal() {
    this.setState({
      openModal: true
    });
  }

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-md-9">
                  <div className="thumbnail">
                      <img className="img-responsive" src="http://placehold.it/800x300" alt="" />
                      <div className="caption-full">
                          <button type="button" className="pull-right btn btn-primary" onClick={() => this.openModal()}>
                            Booking (4 night)
                          </button>
                          <h4><a href="#">Extra Room</a>
                          </h4>
                          <p>See more snippets like these online store reviews at <a target="_blank" href="http://bootsnipp.com">Bootsnipp - http://bootsnipp.com</a>.</p>
                          <p>Want to make these reviews work? Check out
                              <strong><a href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this building a review system tutorial</a>
                              </strong>over at maxoffsky.com!</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                      </div>
                      <div className="ratings">
                          <p className="pull-right">3 reviews</p>
                          <p>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star-empty"></span>
                              4.0 stars
                          </p>
                      </div>
                  </div>

                  <div className="well">

                      <div className="text-right">
                          <a className="btn btn-success">Leave a Review</a>
                      </div>

                      <hr/>

                      <div className="row">
                          <div className="col-md-12">
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star-empty"></span>
                              Anonymous
                              <span className="pull-right">10 days ago</span>
                              <p>This product was great in terms of quality. I would definitely buy another!</p>
                          </div>
                      </div>

                      <hr/>

                      <div className="row">
                          <div className="col-md-12">
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star-empty"></span>
                              Anonymous
                              <span className="pull-right">12 days ago</span>
                              <p>I've alredy ordered another one!</p>
                          </div>
                      </div>

                      <hr/>

                      <div className="row">
                          <div className="col-md-12">
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star"></span>
                              <span className="glyphicon glyphicon-star-empty"></span>
                              Anonymous
                              <span className="pull-right">15 days ago</span>
                              <p>I've seen some better than this, but not at this price. I definitely recommend this item.</p>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="col-md-3">
                  <div className="thumbnail">
                      <div className="caption-full">
                          <img src="user.png" className="userImg" />
                          <p className="hostUser"><strong>Jim Zimmer</strong></p>
                          <span className="glyphicon glyphicon-earphone"> 081-111-1111</span>
                      </div>
                  </div>
              </div>
              <Modal
                //className={cn('modal-room')}
                isOpen={this.state.openModal}
                //onAfterOpen={afterOpenFn}
                //onRequestClose={requestCloseFn}
                //closeTimeoutMS={n}
                //style={customStyle}
                contentLabel="Modal"
              >
                <Link to="/home" className={cn('pull-right', 'btn', 'btn-default')}>x</Link>
                <h1>Booking</h1>
                <div className="container">
                  <div className="bookForm">
                    <div className="form-group">
                        <label for="exampleInputEmail1">From</label>
                        <DatePicker
                          selected={this.state.startDate}
                          onChange={(date) => this.handleDateChange(date, 'startDate')}
                        />
                     </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">To</label>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={(date) => this.handleDateChange(date, 'endDate')}
                      />
                    </div>
                 </div>

                  <button type="button" onClick={() => this.closeModal()} className={cn('pull-right', 'btn', 'btn-primary')}>Book</button>
              </div>
              </Modal>

          </div>
      </div>
    );
  }
}
