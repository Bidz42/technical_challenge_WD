import './App.css';
import React, {useState, useEffect} from 'react';
import {Spinner} from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)
  const[phoneDetails, setPhoneDetails] = useState([])

  useEffect(() => {
   getPhones() 
  }, [])
 
  const getPhones = async () => {
    try{
      const response = await axios.get('http://localhost:5005/phones')

      setTimeout(() => {
        setPhones(response.data)
        setLoading(false)
      }, 2000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSelection = (id) => {
    axios
      .get(`http://localhost:5005/phones/${id}`)
      .then((response) => {
        setPhoneDetails(response.data)
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <>
    {loading ?
    
    <div>
      <Spinner animation='border' variant='info'/>
    </div>

    :

    <div className="App">
    <div>

      <h1>List of Phones</h1>
      
      {
      phones.map((phone) => {
        return (
          <div key={phone.id}>
            <h2>{phone.name}</h2>
            <h2>{phone.manufacturer}</h2>
            <p>{phone.description}</p>
            <button onClick={(e) => handleSelection(phone.id)}>
              More Details
            </button>
          </div>
        );
      })}
    </div>
    <div>
      <h1>Specific Phone</h1>
      
      <h2>{phoneDetails.name}</h2>
      <img src={phoneDetails.imageFileName} alt={phoneDetails.name}></img>
      <h2>{phoneDetails.manufacturer}</h2>
      <h2>{phoneDetails.color}</h2>
      <p>{phoneDetails.description}</p>
      <h2>{phoneDetails.price}</h2>
      <h2>{phoneDetails.processor}</h2>
      <h2>{phoneDetails.ram}</h2>
      <h2>{phoneDetails.screen}</h2>
    </div>
  </div>
    }
    </>
  );
}

export default App;
