import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Details = () => {

    const {id} = useParams();
  const [officeData, setOfficeData] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getbyid/`+id);
    const data = await res.json();
    console.log(data);
    setOfficeData(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const displayOffice = () => {
    if(officeData!==null){
      return <div className='container mx-auto sm:px-4'>
      <div className="flex flex-wrap ">
        <div className="md:w-1/3 pr-4 pl-4">
          <img className='max-w-full h-auto' src={`${import.meta.env.VITE_BACKEND_URL}`+officeData.image} alt="" />
        </div>
        <div className="md:w-2/3 pr-4 pl-4">
          <h1>{officeData.title}</h1>
          <h1>{officeData.description}</h1>
          <h1>{officeData.area}</h1>
          <h1>{officeData.services}</h1>
        </div>
      </div>
    </div>
    }else{
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