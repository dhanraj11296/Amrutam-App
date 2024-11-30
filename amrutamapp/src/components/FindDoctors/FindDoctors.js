import React, {useState} from 'react'
import Header from '../Header/Header'
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import { FiX } from 'react-icons/fi';
import "./FindDoctors.css"
import SearchDoctors from './SearchDoctors/SearchDoctors';


const doctorsList = [
  {
    id: 1,
    name: 'Dr. Joe',
    imgUrl: 'https://media.newyorker.com/photos/630e85c820c2208e4152741d/master/pass/Cassidy-Biden-Month.jpg',
  },
  {
    id: 2,
    name: 'Dr. Anne',
    imgUrl: 'https://resizing.flixster.com/kZNjVexlaQWHQhOnZLMMdCrDWEU=/ems.ZW1zLXByZC1hc3NldHMvY2VsZWJyaXRpZXMvOTRmMWFmOWUtODE1NS00M2EwLWE4ZTQtMjZmYmVkZjE2ODY3LmpwZw==',
  },
  {
    id: 3,
    name: 'Dr. Monica',
    imgUrl: 'https://italianismo.com.br/wp-content/uploads/2024/10/Monica-Bellucci.jpg',
  },
  {
    id: 4,
    name: 'Dr. Trump',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/800px-Donald_Trump_official_portrait.jpg',
  }
]


function FindDoctors() {
  
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };


  const [userSearchInput, setuserSearchInput] = useState('')
  const getUserInput = event => {
    setuserSearchInput(event.target.value)
  }

  const searchResults = doctorsList.filter(i =>
    i.name.toLowerCase().includes(userSearchInput.toLowerCase()),
  )  

  return (
    <div className="container">
        <div>
            <Header/>
        </div>
        <div className="findExpert1">
          <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
        
          <div className="findExpert2">
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Select Your Location</h2>

      <form>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="location" style={{ display: 'block', marginBottom: '10px' }}>
          <FaMapMarkerAlt/> Choose a Location:
          </label>
          <select
            id="location"
            
            value={selectedLocation}
            onChange={handleLocationChange}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
            }}
          >
            <option value="">--Select Location--</option>
            <option value="Chennai">Chennai</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Kerala">Kerala</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
            disabled={!selectedLocation}
          >
            Submit
          </button>
        </div>
      </form>

      
      {selectedLocation && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>You have selected: {selectedLocation}</h3>
        </div>
      )}
    </div>

    
    <div className="searchInputContainer">
            <input
              type="search"
              value={userSearchInput}
              onChange={getUserInput}
              className="searchBox"
              placeholder="eg.Doctor, Specialisation, Clinic, Name"
            />
            
          </div>
  

    </div>
    </div>
    <div className="card">
    <div className="cardIn">
    <select
          style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin:"10px"
          }}
    >
            <option value="">Expertise</option>
            <option value="Bangalore">General</option>
    </select>


    <select
          style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin:"10px"
          }}
    >
            <option value="">Gender</option>
            <option value="Bangalore">Male</option>
            <option value="Bangalore">Female</option>
    </select>


    <select
          style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin:"10px"
          }}
    >
            <option value="">Fees</option>
            <option value="Bangalore">699</option>
            <option value="Bangalore">999</option>
    </select>

    <select
          style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin:"10px"
          }}
    >
            <option value="">Languages</option>
            <option value="Bangalore">English</option>
            <option value="Bangalore">Hindi</option>
    </select>


    <select
          style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              margin:"10px",
              backgroundColor:"green"
          }}
    >
            <option value="">All Filters</option>
            <option value="Bangalore">Sort</option>
    </select>

    </div>

    <div className="cardIn2">
      <div className="searchItems">
        <p >Hair Care</p><FiX className="fix"/>
      </div>
      <div className="searchItems">
        <p>Female</p><FiX className="fix"/>
        </div>
      <div className="searchItems">
        <p>Rs.0-Rs.500</p><FiX className="fix"/>
      </div>
      <div className="searchItems">
        <p>Hindi</p><FiX className="fix"/>
      </div>
    </div>



    <ul className="destinList">
            {searchResults.map(i => (
              <SearchDoctors key={i.id} doctorDetails={i} />
            ))}
    </ul> 
    </div> 
 


    </div>
  )
}

export default FindDoctors