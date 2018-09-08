import React, { Component } from 'react';
import Map from './Map';

class Location extends Component {
  render () {
    return (
      <div>
        <div className='container' id='top'>
          <h2 className='center-align'>Join us in Los Angeles!</h2>
        </div>
        <img src={'/media/los-angeles-1840764_1920.jpg'} alt={'Los Angeles Skyline'} className='full-img' />
        <div className='container'>
          <div className='container'>
            <h2 className='center-align' id='venue'>Venue</h2>
            <p>ServerlessDays Los Angeles will take place at <a href='https://serverlessdays.la/' target='_blank' rel='noopener noreferrer'>TBD</a> somewhere in Los Angeles.</p>
            <p>Some Venue <br />Some Street <br />Los Angeles, CA ZIP</p>
            <div className='small-space' />
          </div>
        </div>
        <img src={'/media/venue.jpg'} alt={'Venue Picture Alt'} className='full-img' />
        <div className='small-space' />
        <h2 className='center-align' id='map'>Map</h2>
        <Map />
      </div>
    );
  }
}

export default Location;
