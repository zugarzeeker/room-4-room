import React from 'react';
import cn from 'classnames';
import './SearchBox.scss';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
  }

  handleDateChange(date, target) {
    this.setState({
      [target]: date
    });
  }

  render() {
    return (
      <div className="container">
        <div className="searchBox">
          <div className="col-md-3 where">
            <label for="where">Where</label>
            <input type="text" name="" placeholder="Destination, city, address" />
          </div>
          <div className="col-md-3 when">
            <label for="when">When</label>
            <div className="whenDate">
              <DatePicker
                selected={this.state.startDate}
                onChange={(date) => this.handleDateChange(date, 'startDate')}
              />
              <span className="glyphicon glyphicon-arrow-right"></span>
              <DatePicker
                selected={this.state.endDate}
                onChange={(date) => this.handleDateChange(date, 'endDate')}
              />
            </div>
          </div>
          <div className="col-md-2 guests">
            <label for="guests">Guests</label>
            <div className="guestCount">
              <input type="text" name="" value="1 guest" />
              <button type="button" className="btn btn-default plus"> + </button>
              <button type="button" className="btn btn-default minus"> - </button>
            </div>
          </div>
          <div className="col-md-2 stars">
            <label for="stars">Stars</label>
            <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
              <span className="caret"></span></button>
              <ul className="dropdown-menu">
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 searchButton">
          <button type="button" className="btn btn-default">Search</button>
          </div>
        </div>
      </div>
    );
  }
};
