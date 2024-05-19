import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Details = () => {

  const { id } = useParams();
  const [officeData, setOfficeData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getbyid/` + id);
    const data = await res.json();
    console.log(data);
    setOfficeData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const displayOffice = () => {
    if (officeData !== null) {
      return <div className='container mx-auto sm:px-4'>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img className='max-w-full h-auto' src={`${import.meta.env.VITE_BACKEND_URL}/` + officeData.image} alt="" />
          </div>
          <div className="md:w-2/3 pr-4 pl-4">
            <h1 className='font-bold text-5xl py-5'>{officeData.title}</h1>
            <h1>📍{officeData.location}</h1>
            <h1>₹{officeData.cost}</h1>
            <h1>{officeData.description}</h1>
            <h1>Total Area : {officeData.area} sq. feet</h1>
            <h1>Facilities : {officeData.services}</h1>
            <h1>{officeData.furnishingStatus}</h1>
            <h1>Washrooms available : {officeData.washroom}</h1>
            <h1>Parking area : {officeData.parking} four wheeler capacity</h1>

            <Link to={'/user/bookingpage/' + id} className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Book Now</Link>

          </div>
        </div>
      </div>
    } else {
      return <h1>Loading ...</h1>
    }
  }

  return (
    <div>
      {displayOffice()}
    </div>
  )
}

export default Details