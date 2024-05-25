import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const BookingPage = () => {

  const { id } = useParams();
  const [officeData, setOfficeData] = useState(null);

  return (
    <div>
      
    </div>
  )
}

export default BookingPage;