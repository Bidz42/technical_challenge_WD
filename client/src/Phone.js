import React from 'react'
import {Link} from 'react-router-dom'

const Phone = ({phones}) => {
  
  

  return (
    <div>
      Here are the phones
      {phones?.map(phone => (
          <div key={phone.id}>
            <h1>{phone.name}</h1>
          </div>
      ))
      }
    </div>
  )
}

export default Phone