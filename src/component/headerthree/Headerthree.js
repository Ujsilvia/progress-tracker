import React from 'react';
import './Headerthree.css';
// import arrow from '../../images/arrow.svg';
import {MdArrowForwardIos} from 'react-icons/md';
function Headerthree() {
  return (
    <div id="sort__teamss">

   <div id='header__three'>
    <div>Home </div> 
    <MdArrowForwardIos />
    <div>Team</div>
   </div>

   <div id='sort__team'>
    <div>Sort By</div>
    <div className='selectTeam'>
    <select className='selectTeam'>
      <option selected>Team Lead</option>
    </select>
    </div>
   </div>

    </div>
  )
}

export default Headerthree