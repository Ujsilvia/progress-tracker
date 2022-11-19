import React from 'react'
import hnglogo from '../../images/hnglogo.svg';
import './Headerone.css';
import searchicon from '../../images/searchicon.svg'


function Headerone() {
  return (
    <>
    <div className='hng__logo'>

      <div ><img src = {hnglogo} alt = "hnglogo" /></div>
      <div id='headerone'>
        <p>Home</p>
        <p>Teams</p>
        <p>FAQs</p>
        <p>About HNG</p>
      </div>
     
      <div className='searchbar'>
      <img src = {searchicon} alt = "searchicon" />
      <input placeholder= "Search about HNG, Teams and mentors" />
     
      </div>
      
      
      </div>
      </>

  )
}

export default Headerone
