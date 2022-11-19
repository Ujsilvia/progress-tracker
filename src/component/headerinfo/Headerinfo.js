import React from 'react'
import './Headerinfo.css'

function Headerinfo() {
  return (
    <div className='header'>
        <div id='header__info'>
        <div id='headinfo__two'><span>02</span><span className='infoSpan'>Teams</span></div><br/>
        <div id='sub__teams'><span>20</span><span className='infoSpan'>Sub-Teams</span></div><br/>
        <div id='projects__teams'><span>20</span><span className='infoSpan'>Projects</span></div><br/>
        <div id='members'><span>1200</span><span className='infoSpan'>Members</span></div>
        </div>

        <div id='mentor_info'>
          <div id='firstMentor'>
            <div className='infoHead'>24</div>
            <div className='infoSpan'>Mentors</div>
          </div>

          <div id='secondMentor'>
            <div className='infoHead'>01</div>
            <div className='infoSpan'>Super-Mentors</div>
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default Headerinfo