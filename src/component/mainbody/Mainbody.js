import React from "react";
import "./Mainbody.css";
import mec1 from "../../images/mec1.svg";
import mec2 from "../../images/mec2.svg";
import leads from '../../images/leads.svg';

function Mainbody() {
  return (
    <div className="mechanicWrapper">
      {/* FIRST */}
      <div className="mechanicInfo">
        <div className="machanic">
          <div className="mec-team">
            <img src={mec1} alt="mec1" />
            <span>Machanic-team-axle</span>
          </div>
          <div className="team-count">
            <div>4 Leads</div>
            <div>160 Members</div>
            <div>60 Designers</div>
            <div>18 Devs</div>
            <div>6 PM</div>
          </div>
        </div>
        <div className="machanic">
          <div className="mec-team">
            <img src={mec2} alt="mec1" />
            <span>Machanic-team-brainbox</span>
          </div>
          <div className="team-count">
            <div>4 Leads</div>
            <div>160 Members</div>
            <div>60 Designers</div>
            <div>18 Devs</div>
            <div>6 PM</div>
          </div>
        </div>
      </div>

      {/* SECOND */}
      <div className="leadWrapper">
        
        <div className="lead">

          <div className="leadTab">
            <img src={leads} alt="lea" />
            
            </div>

      
        
        </div>
      </div>


    
    </div>
  );
}

export default Mainbody;
