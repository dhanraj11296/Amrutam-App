import {Link} from "react-router-dom"
import { FaFolder,FaGraduationCap,FaEnvelope,FaRupeeSign } from 'react-icons/fa'
import './SearchDoctors.css'

function SearchDoctors(props) {
    const { doctorDetails } = props;
    const { name, imgUrl } = doctorDetails;
  
    console.log(doctorDetails);  
  
    return (
      <>
      <div className="details">
        <li className="dItem">
          <img src={imgUrl} alt={name} className="doctorImage" />
          <p className="name">{name}</p>
          <div className="sent1">
          <FaFolder/>
          <p>Male-Female Infertility</p>
          </div>
          <div className="sent1">
          <FaGraduationCap/>
          <p>7 Years of Experience</p>
          </div>
          <div className="sent1">
          <FaEnvelope/>
          <p>Speaks English, Hindi, Marathi</p>
          </div>
          <div className="tdiv">
            <div className="div1">
                <p>Video Consultation</p>
                <p><FaRupeeSign/>800</p>
            </div>
            <div className="div1">
                <p>Chat Consultation</p>
                <p>Free</p>
            </div>            
          </div>
          <button className="btn1">
          <Link to="/" className="book">View Profile</Link>
          </button>
          <button className="btn2">
            <Link to="/" className="book1">Book a consultation</Link>
          </button>

        </li>
        </div>
      </>
    );
  }
  export default SearchDoctors;
  